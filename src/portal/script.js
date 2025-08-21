<<<<<<< HEAD
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

// Loop through all course files and generate structure
courseFiles.forEach(file => {
  const course = JSON.parse(fs.readFileSync(file, 'utf8'));
  generateCourseStructure(course);
});
=======
function loadCourse(courseJsonPath, container) {
  fetch(courseJsonPath)
    .then(res => {
      if (!res.ok) throw new Error('Failed to load course JSON');
      return res.json();
    })
    .then(course => {
      container.innerHTML = ''; // clear loading text

      if (!course || !Array.isArray(course.units)) {
        container.textContent = 'Error: Course JSON is missing "units" array.';
        return;
      }

      course.units.forEach(unit => {
        const unitDiv = document.createElement('div');
        const unitHeader = document.createElement('h2');
        unitHeader.textContent = unit.name;
        unitDiv.appendChild(unitHeader);

        const chapterUl = document.createElement('ul');
        if (unit.chapters && Array.isArray(unit.chapters)) {
          unit.chapters.forEach(chapter => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${chapter.flexbookPath}" target="_blank">${chapter.title}</a>`;
            chapterUl.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'No chapters found.';
          chapterUl.appendChild(li);
        }

        unitDiv.appendChild(chapterUl);
        container.appendChild(unitDiv);
      });
    })
    .catch(err => {
      console.error(err);
      container.textContent = 'Error loading course: ' + err;
    });
}

>>>>>>> refs/remotes/origin/main
