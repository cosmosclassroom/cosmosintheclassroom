class AltTextEnforcer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import 'components/alt-text-enforcer.css';
            </style>
            <div class="alt-text-enforcer">
                <h3>Image Block</h3>
                <div class="form-group">
                    <label for="image-src">Image Source</label>
                    <input type="file" id="image-src" accept="image/*">
                </div>
                <div class="form-group">
                    <label for="alt-text">Alt Text <span class="mandatory-indicator">*</span></label>
                    <input type="text" id="alt-text" required>
                </div>
                <img id="preview" src="" alt="Image preview" style="display:none; max-width: 100%; margin-bottom: 10px;"/>
                <button id="save-btn">Save Image</button>
                <p id="error-message" class="error-message"></p>
            </div>
        `;

        this.saveButton = this.shadowRoot.querySelector('#save-btn');
        this.errorMessage = this.shadowRoot.querySelector('#error-message');
        this.altText = this.shadowRoot.querySelector('#alt-text');
        this.imageSrc = this.shadowRoot.querySelector('#image-src');
        this.preview = this.shadowRoot.querySelector('#preview');
    }

    connectedCallback() {
        this.saveButton.addEventListener('click', () => this.save());
        this.altText.addEventListener('input', () => this.validate());
        this.imageSrc.addEventListener('change', (event) => this.updatePreview(event));
        this.validate();
    }

    updatePreview(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.preview.src = e.target.result;
                this.preview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            this.preview.style.display = 'none';
        }
        this.validate();
    }

    validate() {
        const isAltTextProvided = this.altText.value.trim() !== '';
        const isImageSelected = this.imageSrc.files.length > 0;
        const isValid = isAltTextProvided && isImageSelected;
        
        this.saveButton.disabled = !isValid;
        if (!isImageSelected) {
            this.errorMessage.textContent = 'Please select an image file.';
        } else if (!isAltTextProvided) {
            this.errorMessage.textContent = 'Alt text is required for accessibility.';
        } else {
            this.errorMessage.textContent = '';
        }
        return isValid;
    }

    save() {
        if (!this.validate()) {
            return;
        }
        const imageData = {
            src: this.preview.src, // In a real app, you'd handle file upload differently
            alt: this.altText.value,
        };

        this.dispatchEvent(new CustomEvent('save-image', {
            detail: imageData,
            bubbles: true,
            composed: true
        }));

        console.log('Saved Image:', imageData);
        alert('Image saved successfully!');
    }
}

customElements.define('alt-text-enforcer', AltTextEnforcer);
