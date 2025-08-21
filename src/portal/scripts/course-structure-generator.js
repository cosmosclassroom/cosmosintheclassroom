// Course Structure Generator
// Node.js script to automatically generate course folder structures based on course.json files

const fs = require('fs');
const path = require('path');

const courseFiles = [
  './hphysics/admin/course.json',
  './sphysics/course.json',
  './natdis/course.json'
];

// Helper to create folder if it doesn't exist
function createFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
    }
}

// Helper to create placeholder file
function createFile(filePath) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `<!-- Placeholder for ${path.basename(filePath)} -->`);
        console.log(`Created file: ${filePath}`);
    }
}

// Main function to generate structure for a course object
function generateCourseStructure(course) {
    // Create root folder
    const rootFolder = course.courseId;
    createFolder(rootFolder);

    // Loop through units
    course.units.forEach(unit => {
        const unitFolder = path.join(rootFolder, unit.unitId);
        createFolder(unitFolder);

        // Loop through chapters
        unit.chapters.forEach(chapter => {
            // Flexbook
            if (chapter.flexbookPath) {
                const flexFolder = path.dirname(chapter.flexbookPath);
                createFolder(flexFolder);
                createFile(chapter.flexbookPath);
            }

            // Slides
            if (chapter.slidesPath) {
                const slidesFolder = path.dirname(chapter.slidesPath);
                createFolder(slidesFolder);
                createFile(chapter.slidesPath);
            }

            // Notes
            if (chapter.notesPath) {
                const notesFolder = path.dirname(chapter.notesPath);
                createFolder(notesFolder);
                createFile(chapter.notesPath);
            }

            // Briefs
            if (chapter.briefsPath) {
                const briefsFolder = path.dirname(chapter.briefsPath);
                createFolder(briefsFolder);
                createFile(chapter.briefsPath);
            }

            // Artifacts
            if (chapter.artifacts && chapter.artifacts.length > 0) {
                chapter.artifacts.forEach(artifactPath => {
                    const artifactFolder = path.dirname(artifactPath);
                    createFolder(artifactFolder);
                    createFile(artifactPath);
                });
            }
        });
    });

    // Create glossary and learning objectives
    if (course.glossary) {
        createFolder(path.dirname(course.glossary));
        createFile(course.glossary);
    }
    if (course.learningObjectives) {
        createFolder(path.dirname(course.learningObjectives));
        createFile(course.learningObjectives);
    }

    console.log(`Course folder structure for ${course.courseId} generated successfully!`);
}

// Main execution
function main() {
    console.log('🏗️  Course Structure Generator');
    console.log('==================================');
    
    courseFiles.forEach((file, index) => {
        console.log(`\n📁 Processing course file ${index + 1}/${courseFiles.length}: ${file}`);
        
        try {
            if (!fs.existsSync(file)) {
                console.warn(`⚠️  Course file not found: ${file}`);
                return;
            }
            
            const course = JSON.parse(fs.readFileSync(file, 'utf8'));
            generateCourseStructure(course);
            console.log(`✅ Successfully generated structure for ${course.courseId}`);
        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error.message);
        }
    });
    
    console.log('\n🎉 Course structure generation complete!');
}

// Run the script if called directly
if (require.main === module) {
    main();
}

module.exports = {
    generateCourseStructure,
    createFolder,
    createFile
};
