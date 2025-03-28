import sys
import os
from PyQt5.QtWidgets import (QApplication, QWidget, QPushButton, QVBoxLayout, 
                             QFileDialog, QLabel, QHBoxLayout, QMessageBox)
from PyQt5.QtGui import QPixmap, QImage
from PyQt5.QtCore import Qt

from PIL import Image, ImageDraw, ImageFilter

class CircularImageProcessor(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()
        self.input_image_path = None
        self.output_image_path = None

    def initUI(self):
        # Set up the main layout
        layout = QVBoxLayout()

        # Input image selection section
        input_layout = QHBoxLayout()
        self.select_input_btn = QPushButton('Select Input Image')
        self.select_input_btn.clicked.connect(self.select_input_image)
        input_layout.addWidget(self.select_input_btn)

        # Input image preview label
        self.input_preview = QLabel('No image selected')
        self.input_preview.setAlignment(Qt.AlignCenter)
        input_layout.addWidget(self.input_preview)
        layout.addLayout(input_layout)

        # Output image selection section
        output_layout = QHBoxLayout()
        self.select_output_btn = QPushButton('Choose Output Location')
        self.select_output_btn.clicked.connect(self.select_output_image)
        output_layout.addWidget(self.select_output_btn)

        # Output image preview label
        self.output_preview = QLabel('No output selected')
        self.output_preview.setAlignment(Qt.AlignCenter)
        output_layout.addWidget(self.output_preview)
        layout.addLayout(output_layout)

        # Process button
        self.process_btn = QPushButton('Process Image')
        self.process_btn.clicked.connect(self.process_image)
        self.process_btn.setEnabled(False)
        layout.addWidget(self.process_btn)

        # Set the layout
        self.setLayout(layout)
        self.setWindowTitle('Circular Image Processor')
        self.setGeometry(300, 300, 600, 400)

    def select_input_image(self):
        # Open file dialog to select input image
        filename, _ = QFileDialog.getOpenFileName(
            self, 
            'Select Input Image', 
            '', 
            'Image Files (*.png *.jpg *.jpeg *.bmp *.gif)'
        )
        
        if filename:
            self.input_image_path = filename
            # Update input preview
            pixmap = QPixmap(filename)
            scaled_pixmap = pixmap.scaled(
                200, 200, 
                Qt.KeepAspectRatio, 
                Qt.SmoothTransformation
            )
            self.input_preview.setPixmap(scaled_pixmap)
            
            # Enable process button if output is also selected
            self.update_process_button()

    def select_output_image(self):
        # Open file dialog to select output location
        filename, _ = QFileDialog.getSaveFileName(
            self, 
            'Save Processed Image', 
            '', 
            'PNG Files (*.png)'
        )
        
        if filename:
            # Ensure filename ends with .png
            self.output_image_path = filename if filename.endswith('.png') else filename + '.png'
            
            # Update output preview (show the output filename)
            self.output_preview.setText(os.path.basename(self.output_image_path))
            
            # Enable process button if input is also selected
            self.update_process_button()

    def update_process_button(self):
        # Enable process button only if both input and output paths are selected
        self.process_btn.setEnabled(
            self.input_image_path is not None and 
            self.output_image_path is not None
        )

    def process_image(self):
        if not self.input_image_path or not self.output_image_path:
            QMessageBox.warning(self, 'Error', 'Please select input and output files')
            return

        try:
            # Open the image
            original_image = Image.open(self.input_image_path)
            
            # Calculate dimensions to maintain aspect ratio
            width, height = original_image.size
            new_size = min(512, max(width, height))
            
            # Calculate crop dimensions to maintain aspect ratio
            left = (width - new_size) // 2
            top = (height - new_size) // 2
            right = left + new_size
            bottom = top + new_size
            
            # Crop the image
            cropped_image = original_image.crop((left, top, right, bottom))
            
            # Resize to 512x512 for consistent processing
            cropped_image = cropped_image.resize((512, 512), Image.LANCZOS)
            
            # Create a new image with an alpha channel (RGBA)
            width, height = cropped_image.size
            circle_diameter = min(width, height)
            
            # Create a circular mask
            mask = Image.new('L', (width, height), 0)
            draw = ImageDraw.Draw(mask)
            
            # Draw a white circle on the mask
            center = (width // 2, height // 2)
            radius = circle_diameter // 2
            draw.ellipse([center[0] - radius, center[1] - radius, 
                          center[0] + radius, center[1] + radius], 
                         fill=255)
            
            # Create a drop shadow with more definition
            shadow_size = width + 40
            shadow = Image.new('RGBA', (shadow_size, shadow_size), (0, 0, 0, 0))
            shadow_draw = ImageDraw.Draw(shadow)
            
            # Draw multiple semi-transparent circles for a more realistic shadow
            for i in range(10, 0, -1):
                shadow_alpha = 20 - (i // 2)  # Gradually reduce alpha
                shadow_draw.ellipse(
                    [shadow_size//2 - radius - i, 
                     shadow_size//2 - radius - i, 
                     shadow_size//2 + radius + i, 
                     shadow_size//2 + radius + i], 
                    fill=(0, 0, 0, shadow_alpha)
                )
            
            # Apply gaussian blur to soften the shadow
            shadow = shadow.filter(ImageFilter.GaussianBlur(3))
            
            # Apply the circular mask to the original image
            result = Image.new('RGBA', (width, height), (0, 0, 0, 0))
            result.paste(cropped_image, (0, 0), mask)
            
            # Create a new image to combine shadow and result
            final_image = Image.new('RGBA', (shadow_size, shadow_size), (0, 0, 0, 0))
            final_image.paste(shadow, (0, 0), shadow)
            
            # Center the result on the shadow
            final_image.paste(
                result, 
                ((shadow_size - width) // 2, (shadow_size - height) // 2), 
                result
            )
            
            # Draw the border
            border_draw = ImageDraw.Draw(final_image)
            border_draw.ellipse(
                [
                    (shadow_size - width) // 2, 
                    (shadow_size - height) // 2, 
                    (shadow_size + width) // 2, 
                    (shadow_size + height) // 2
                ], 
                outline=(0, 0, 0, 128), 
                width=1
            )
            
            # Save the final image
            final_image.save(self.output_image_path)
            
            # Show success message
            QMessageBox.information(
                self, 
                'Success', 
                f'Image processed and saved to {self.output_image_path}'
            )
            
            # Update output preview with processed image
            pixmap = QPixmap(self.output_image_path)
            scaled_pixmap = pixmap.scaled(
                200, 200, 
                Qt.KeepAspectRatio, 
                Qt.SmoothTransformation
            )
            self.output_preview.setPixmap(scaled_pixmap)

        except Exception as e:
            QMessageBox.critical(
                self, 
                'Error', 
                f'An error occurred while processing the image:\n{str(e)}'
            )

def main():
    app = QApplication(sys.argv)
    ex = CircularImageProcessor()
    ex.show()
    sys.exit(app.exec_())

if __name__ == '__main__':
    main()