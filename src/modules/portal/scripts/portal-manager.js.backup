// Portal Manager
// Frontend JavaScript for managing course portal functionality

/**
 * Loads course data from a JSON file and renders it in the portal
 * @param {string} courseJsonPath - Path to the course JSON file
 * @param {HTMLElement} container - DOM element to render the course into
 */
function loadCourse(courseJsonPath, container) {
    // Show loading state
    container.innerHTML = '<div class="loading">Loading course content...</div>';
    
    fetch(courseJsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load course JSON: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(course => {
            renderCourse(course, container);
        })
        .catch(error => {
            console.error('Error loading course:', error);
            container.innerHTML = `
                <div class="error-message">
                    <h3>Error Loading Course</h3>
                    <p>${error.message}</p>
                    <p>Please check the console for more details.</p>
                </div>
            `;
        });
}

/**
 * Renders course data into the container
 * @param {Object} course - Course data object
 * @param {HTMLElement} container - DOM element to render into
 */
function renderCourse(course, container) {
    container.innerHTML = ''; // Clear loading/error content

    if (!course || !Array.isArray(course.units)) {
        container.innerHTML = `
            <div class="error-message">
                <h3>Invalid Course Data</h3>
                <p>Course JSON is missing required "units" array.</p>
            </div>
        `;
        return;
    }

    // Create course header
    if (course.courseName || course.description) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'course-header';
        
        if (course.courseName) {
            const titleElement = document.createElement('h1');
            titleElement.textContent = course.courseName;
            titleElement.className = 'course-title';
            headerDiv.appendChild(titleElement);
        }
        
        if (course.description) {
            const descElement = document.createElement('p');
            descElement.textContent = course.description;
            descElement.className = 'course-description';
            headerDiv.appendChild(descElement);
        }
        
        container.appendChild(headerDiv);
    }

    // Create units container
    const unitsContainer = document.createElement('div');
    unitsContainer.className = 'units-container';

    course.units.forEach((unit, unitIndex) => {
        const unitDiv = document.createElement('div');
        unitDiv.className = 'unit-card';
        unitDiv.setAttribute('data-unit-id', unit.unitId || `unit-${unitIndex}`);

        // Unit header
        const unitHeader = document.createElement('div');
        unitHeader.className = 'unit-header';
        
        const unitTitle = document.createElement('h2');
        unitTitle.textContent = unit.unitName || unit.name || `Unit ${unitIndex + 1}`;
        unitTitle.className = 'unit-title';
        unitHeader.appendChild(unitTitle);

        if (unit.description) {
            const unitDesc = document.createElement('p');
            unitDesc.textContent = unit.description;
            unitDesc.className = 'unit-description';
            unitHeader.appendChild(unitDesc);
        }

        unitDiv.appendChild(unitHeader);

        // Chapters list
        const chaptersContainer = document.createElement('div');
        chaptersContainer.className = 'chapters-container';

        if (unit.chapters && Array.isArray(unit.chapters)) {
            const chaptersList = document.createElement('ul');
            chaptersList.className = 'chapters-list';

            unit.chapters.forEach((chapter, chapterIndex) => {
                const chapterItem = document.createElement('li');
                chapterItem.className = 'chapter-item';
                chapterItem.setAttribute('data-chapter-id', chapter.chapterId || `chapter-${chapterIndex}`);

                // Create chapter content
                const chapterContent = createChapterContent(chapter, chapterIndex);
                chapterItem.appendChild(chapterContent);

                chaptersList.appendChild(chapterItem);
            });

            chaptersContainer.appendChild(chaptersList);
        } else {
            const noChapters = document.createElement('p');
            noChapters.textContent = 'No chapters available for this unit.';
            noChapters.className = 'no-content-message';
            chaptersContainer.appendChild(noChapters);
        }

        unitDiv.appendChild(chaptersContainer);
        unitsContainer.appendChild(unitDiv);
    });

    container.appendChild(unitsContainer);
}

/**
 * Creates chapter content with multiple resource links
 * @param {Object} chapter - Chapter data
 * @param {number} index - Chapter index
 * @returns {HTMLElement} Chapter content element
 */
function createChapterContent(chapter, index) {
    const chapterDiv = document.createElement('div');
    chapterDiv.className = 'chapter-content';

    // Chapter title
    const titleElement = document.createElement('h3');
    titleElement.textContent = chapter.chapterName || chapter.title || `Chapter ${index + 1}`;
    titleElement.className = 'chapter-title';
    chapterDiv.appendChild(titleElement);

    // Chapter description
    if (chapter.description) {
        const descElement = document.createElement('p');
        descElement.textContent = chapter.description;
        descElement.className = 'chapter-description';
        chapterDiv.appendChild(descElement);
    }

    // Resource links
    const resourcesDiv = document.createElement('div');
    resourcesDiv.className = 'chapter-resources';

    const resources = [
        { path: chapter.flexbookPath, label: '📖 Flexbook', type: 'flexbook' },
        { path: chapter.briefsPath, label: '📋 Brief', type: 'brief' },
        { path: chapter.notesPath, label: '📝 Notes', type: 'notes' },
        { path: chapter.slidesPath, label: '🎨 Slides', type: 'slides' }
    ];

    resources.forEach(resource => {
        if (resource.path) {
            const link = document.createElement('a');
            link.href = resource.path;
            link.textContent = resource.label;
            link.className = `resource-link resource-${resource.type}`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            resourcesDiv.appendChild(link);
        }
    });

    // Artifacts
    if (chapter.artifacts && Array.isArray(chapter.artifacts) && chapter.artifacts.length > 0) {
        const artifactsDiv = document.createElement('div');
        artifactsDiv.className = 'artifacts-section';
        
        const artifactsTitle = document.createElement('h4');
        artifactsTitle.textContent = 'Artifacts & Resources';
        artifactsTitle.className = 'artifacts-title';
        artifactsDiv.appendChild(artifactsTitle);

        const artifactsList = document.createElement('ul');
        artifactsList.className = 'artifacts-list';

        chapter.artifacts.forEach(artifactPath => {
            const artifactItem = document.createElement('li');
            const artifactLink = document.createElement('a');
            artifactLink.href = artifactPath;
            artifactLink.textContent = `📎 ${getFileName(artifactPath)}`;
            artifactLink.className = 'artifact-link';
            artifactLink.target = '_blank';
            artifactLink.rel = 'noopener noreferrer';
            artifactItem.appendChild(artifactLink);
            artifactsList.appendChild(artifactItem);
        });

        artifactsDiv.appendChild(artifactsList);
        resourcesDiv.appendChild(artifactsDiv);
    }

    chapterDiv.appendChild(resourcesDiv);
    return chapterDiv;
}

/**
 * Utility function to extract filename from path
 * @param {string} path - File path
 * @returns {string} Filename
 */
function getFileName(path) {
    return path.split('/').pop() || path;
}

/**
 * Initialize portal functionality when DOM is loaded
 */
function initializePortal() {
    console.log('🚀 Portal Manager initialized');
    
    // Add any global portal initialization logic here
    // For example, setting up navigation, search, etc.
    
    // Track portal usage
    if (typeof logEvent === 'function') {
        logEvent('portal_initialized', {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortal);
} else {
    initializePortal();
}

// Export functions for use in other scripts
window.PortalManager = {
    loadCourse,
    renderCourse,
    createChapterContent,
    initializePortal
};
