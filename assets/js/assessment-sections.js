// Section management
let currentSection = 0;
let sections = [];
let sectionRequirements = [];
let sectionFormData = {}; // Store form data for each section

function initializeSections() {
    const contentContainer = document.getElementById('assessment-sections');
    if (!contentContainer) {
        console.warn('[assessment-sections] #assessment-sections not found; skipping initialization');
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.style.display = 'inline-block';
            submitBtn.style.visibility = 'visible';
        }
        return;
    }
    const content = contentContainer.innerHTML;
    
    console.log('Content to split:', content.substring(0, 500)); // Debug
    
    // Split content by section headers (## Segment) - more flexible approach
    const sectionHeaders = content.match(/<h2[^>]*>Segment \d+[^<]*<\/h2>/gi);
    console.log('Found section headers:', sectionHeaders);
    
    if (sectionHeaders && sectionHeaders.length >= 1) {
        // Split by h2 headers containing "Segment"
        const parts = content.split(/<h2[^>]*>Segment \d+[^<]*<\/h2>/i);
        console.log('Split parts:', parts.length);
        
        // Create sections array starting with instructions section
        sections = [];
        
        // First section: Instructions and general info (everything before first Segment)
        if (parts[0].trim()) {
            sections.push(`
                <div class="instructions-section">
                    <h2>Assessment Instructions</h2>
                    ${parts[0]}
                    <div class="start-assessment-prompt">
                        <p><strong>Ready to begin?</strong> Click "Next" to start with the first question section.</p>
                        <p><small><em>Note: Once you begin, the interface will switch to a cleaner view focused on the questions.</em></small></p>
                        <div style="background: #d1ecf1; border: 1px solid #b8daff; color: #0c5460; padding: 8px; margin-top: 10px; border-radius: 4px; font-size: 12px;">
                            💾 <strong>Auto-Save:</strong> Your progress is automatically saved as you work. If you accidentally close the page, you'll be offered to restore your progress when you return.
                        </div>
                    </div>
                </div>
            `);
        }
        
        // Add the actual assessment segments
        for (let i = 1; i < parts.length; i++) {
            const header = sectionHeaders[i - 1];
            const sectionContent = header + parts[i];
            sections.push(sectionContent);
        }
        
    } else {
        // Fallback: try markdown-style headers that might not be converted yet
        const markdownSections = content.split(/## Segment \d+[^\n]*/i);
        console.log('Markdown sections:', markdownSections.length);
        
        if (markdownSections.length > 1) {
            sections = [];
            // Add instructions as first section
            if (markdownSections[0].trim()) {
                sections.push(`
                    <div class="instructions-section">
                        <h2>Assessment Instructions</h2>
                        ${markdownSections[0]}
                        <div class="start-assessment-prompt">
                            <p><strong>Ready to begin?</strong> Click "Next" to start with the first question section.</p>
                        </div>
                    </div>
                `);
            }
            // Add the rest as question sections
            sections = sections.concat(markdownSections.slice(1));
        } else {
            // No sections found - treat entire content as one section
            sections = [content];
        }
    }
    
    console.log('Final sections:', sections.length);
    
    // Initialize section requirements tracking
    sectionRequirements = sections.map(() => false);
    
    // Set up navigation if multiple sections
    if (sections.length > 1) {
        console.log(`Setting up navigation for ${sections.length} sections`);
        setupSectionNavigation();
        showSection(0);
    } else {
        // Single section - show normally
        const sectionNav = document.getElementById('section-nav');
        if (sectionNav) {
            sectionNav.style.display = 'none';
        }
        // Ensure submit button is visible even for single sections
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.style.display = 'inline-block';
            submitBtn.style.visibility = 'visible';
        }
        console.log('Only one section found, showing all content normally');
    }
}

function setupSectionNavigation() {
    const sectionNav = document.getElementById('section-nav');
    const sectionDots = document.getElementById('section-dots');
    const prevBtn = document.getElementById('prev-section-btn');
    const nextBtn = document.getElementById('next-section-btn');
    const submitBtn = document.getElementById('submit-btn');
    const bottomSubmit = document.getElementById('bottom-submit');
    
    console.log('setupSectionNavigation: Elements found:', {
        sectionNav: !!sectionNav,
        sectionDots: !!sectionDots,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        submitBtn: !!submitBtn,
        bottomSubmit: !!bottomSubmit
    });
    
    if (sectionNav) {
        sectionNav.style.display = 'block';
    }
    
    // Hide bottom submit section when using section navigation
    if (bottomSubmit) {
        bottomSubmit.style.display = 'none';
    }
    
    // Always ensure submit button is visible - students can submit blank attempts
    if (submitBtn) {
        submitBtn.style.display = 'inline-block';
        submitBtn.style.visibility = 'visible';
    }
    
    // Create progress dots
    if (sectionDots) {
        sectionDots.innerHTML = '';
        for (let i = 0; i < sections.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'section-dot';
            if (i === 0) {
                dot.title = 'Instructions';
                dot.classList.add('instructions-dot');
            } else {
                dot.title = `Question Section ${i}`;
            }
            dot.onclick = () => navigateToSection(i);
            sectionDots.appendChild(dot);
        }
    }
    
    // Navigation button handlers
    prevBtn.onclick = () => navigateToSection(currentSection - 1);
    nextBtn.onclick = () => navigateToSection(currentSection + 1);
    
    // Submit button handler (same as bottom button)
    if (submitBtn) {
        submitBtn.onclick = (e) => {
            e.preventDefault();
            const form = document.getElementById('assessment-form');
            if (form) form.dispatchEvent(new Event('submit'));
        };
    }
}

function showSection(index) {
    if (index < 0 || index >= sections.length) return;
    
    // Save current section data before switching
    if (currentSection !== index) {
        saveCurrentSectionData();
    }
    
    currentSection = index;
    const contentContainer = document.getElementById('assessment-sections');
    const sectionIndicator = document.getElementById('section-indicator');
    const prevBtn = document.getElementById('prev-section-btn');
    const nextBtn = document.getElementById('next-section-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    console.log(`showSection(${index}): Elements found:`, {
        contentContainer: !!contentContainer,
        sectionIndicator: !!sectionIndicator,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        submitBtn: !!submitBtn
    });
    
    // Update content
    if (contentContainer) {
        contentContainer.innerHTML = sections[index];
    }
    
    // Restore saved data for this section (after content is loaded)
    setTimeout(() => {
        restoreSectionData(index);
        attachSectionEventListeners(); // Re-attach event listeners after content change
    }, 10);
    
    // Show/hide header and student info based on section
    const assessmentHeader = document.getElementById('assessment-header');
    const studentInfoSection = document.getElementById('student-info-section');
    
    if (index === 0) {
        // Instructions section - show header and student info
        if (assessmentHeader) assessmentHeader.style.display = 'block';
        if (studentInfoSection) studentInfoSection.style.display = 'block';
    } else {
        // Quiz sections - hide header and student info for cleaner interface
        if (assessmentHeader) assessmentHeader.style.display = 'none';
        if (studentInfoSection) studentInfoSection.style.display = 'none';
    }
    
    // Update section indicator
    if (sectionIndicator) {
        let newText;
        if (index === 0) {
            newText = `Instructions`;
        } else {
            newText = `Question Section ${index} of ${sections.length - 1}`;
        }
        console.log(`Updating section indicator from "${sectionIndicator.textContent}" to "${newText}"`);
        sectionIndicator.textContent = newText;
    }
    
    // Update navigation buttons
    if (prevBtn) {
        prevBtn.disabled = index === 0;
    }
    
    // ALWAYS show submit button - this is the key fix
    if (submitBtn) {
        submitBtn.style.display = 'inline-block';
        submitBtn.style.visibility = 'visible';
        submitBtn.style.opacity = '1';
        console.log('Submit button forced visible');
    }
    
    // Show/hide next button based on section
    const isLastSection = index === sections.length - 1;
    if (nextBtn) {
        if (isLastSection) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-block';
        }
    }
    
    // Update progress dots
    const dots = document.querySelectorAll('.section-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.classList.toggle('completed', sectionRequirements[i]);
    });
    
    // Re-attach event listeners for new content
    attachSectionEventListeners();
    updateProgress();
}

function saveCurrentSectionData() {
    // Save form data from the current section
    const contentContainer = document.getElementById('assessment-sections');
    const inputs = contentContainer.querySelectorAll('input, textarea, select');
    
    if (!sectionFormData[currentSection]) {
        sectionFormData[currentSection] = {};
    }
    
    inputs.forEach(input => {
        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) {
                if (input.type === 'radio') {
                    sectionFormData[currentSection][input.name] = input.value;
                } else {
                    // Handle checkboxes (multiple values)
                    if (!sectionFormData[currentSection][input.name]) {
                        sectionFormData[currentSection][input.name] = [];
                    }
                    if (!sectionFormData[currentSection][input.name].includes(input.value)) {
                        sectionFormData[currentSection][input.name].push(input.value);
                    }
                }
            }
        } else {
            if (input.value) {
                sectionFormData[currentSection][input.name] = input.value;
            }
        }
    });
    
    console.log(`Saved data for section ${currentSection}:`, sectionFormData[currentSection]);
}

function restoreSectionData(sectionIndex) {
    // Restore form data for the given section
    if (!sectionFormData[sectionIndex]) {
        console.log(`No saved data for section ${sectionIndex}`);
        return;
    }
    
    const data = sectionFormData[sectionIndex];
    console.log(`Restoring data for section ${sectionIndex}:`, data);
    
    Object.keys(data).forEach(fieldName => {
        const value = data[fieldName];
        console.log(`Restoring field ${fieldName} with value:`, value);
        
        // Handle radio buttons
        const radioInputs = document.querySelectorAll(`input[name="${fieldName}"][type="radio"]`);
        if (radioInputs.length > 0) {
            console.log(`Found ${radioInputs.length} radio buttons for ${fieldName}`);
            radioInputs.forEach(radio => {
                const shouldCheck = (radio.value === value);
                radio.checked = shouldCheck;
                console.log(`Radio ${radio.value}: checked = ${shouldCheck}`);
            });
            return;
        }
        
        // Handle checkboxes
        const checkboxInputs = document.querySelectorAll(`input[name="${fieldName}"][type="checkbox"]`);
        if (checkboxInputs.length > 0) {
            console.log(`Found ${checkboxInputs.length} checkboxes for ${fieldName}`);
            const values = Array.isArray(value) ? value : [value];
            checkboxInputs.forEach(checkbox => {
                const shouldCheck = values.includes(checkbox.value);
                checkbox.checked = shouldCheck;
                console.log(`Checkbox ${checkbox.value}: checked = ${shouldCheck}`);
            });
            return;
        }
        
        // Handle regular inputs and textareas
        const input = document.querySelector(`[name="${fieldName}"]`);
        if (input) {
            input.value = value;
            console.log(`Set input ${fieldName} to: ${value}`);
        } else {
            console.log(`No input found for field: ${fieldName}`);
        }
    });
    
    console.log(`Restore complete for section ${sectionIndex}`);
}

function mergeSectionDataToForm() {
    // Create hidden inputs for all section data to ensure it's included in form submission
    const form = document.getElementById('assessment-form');
    
    Object.keys(sectionFormData).forEach(sectionIndex => {
        const sectionData = sectionFormData[sectionIndex];
        
        Object.keys(sectionData).forEach(fieldName => {
            const value = sectionData[fieldName];
            
            // Check if there's already an input with this name in the current form
            const existingInput = form.querySelector(`[name="${fieldName}"]`);
            if (!existingInput) {
                // Create hidden input for this field
                if (Array.isArray(value)) {
                    // Handle checkbox arrays
                    value.forEach(val => {
                        const hiddenInput = document.createElement('input');
                        hiddenInput.type = 'hidden';
                        hiddenInput.name = fieldName;
                        hiddenInput.value = val;
                        form.appendChild(hiddenInput);
                    });
                } else {
                    const hiddenInput = document.createElement('input');
                    hiddenInput.type = 'hidden';
                    hiddenInput.name = fieldName;
                    hiddenInput.value = value;
                    form.appendChild(hiddenInput);
                }
            }
        });
    });
    
    console.log('Merged all section data to form for submission');
}

function attachSectionEventListeners() {
    // Re-attach input listeners for progress tracking
    const inputs = document.querySelectorAll('#assessment-sections input, #assessment-sections textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            updateProgress();
            checkSectionCompletion();
        });
        input.addEventListener('change', () => {
            updateProgress();
            checkSectionCompletion();
        });
    });
}

function checkSectionCompletion() {
    const currentSectionElement = document.getElementById('assessment-sections');
    const requiredQuestions = currentSectionElement.querySelectorAll('.question[data-required="true"], .calculation-question[data-required="true"]');
    let allAnswered = true;
    let answeredCount = 0;
    
    console.log(`Checking section ${currentSection + 1} completion. Found ${requiredQuestions.length} required questions.`);
    
    requiredQuestions.forEach((question, idx) => {
        let questionAnswered = false;
        
        // Check for textarea answers
        const textarea = question.querySelector('textarea');
        if (textarea && textarea.value.trim()) {
            questionAnswered = true;
            console.log(`Question ${idx + 1}: answered via textarea`);
        }
        
        // Check for radio button answers
        const checkedRadios = question.querySelectorAll('input[type="radio"]:checked');
        if (checkedRadios.length > 0) {
            questionAnswered = true;
            console.log(`Question ${idx + 1}: answered via radio button`);
        }
        
        // Check for checkbox answers
        const checkedBoxes = question.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedBoxes.length > 0) {
            questionAnswered = true;
            console.log(`Question ${idx + 1}: answered via checkbox`);
        }
        
        // Check for number/text input answers (for calculation questions)
        const numberInputs = question.querySelectorAll('input[type="number"], input[type="text"]');
        numberInputs.forEach(input => {
            if (input.value.trim()) {
                questionAnswered = true;
                console.log(`Question ${idx + 1}: answered via number/text input`);
            }
        });
        
        // Check for select dropdown answers
        const selects = question.querySelectorAll('select');
        selects.forEach(select => {
            if (select.value && select.value !== '') {
                questionAnswered = true;
                console.log(`Question ${idx + 1}: answered via select dropdown`);
            }
        });
        
        if (!questionAnswered) {
            allAnswered = false;
            console.log(`Question ${idx + 1}: NOT answered`);
        } else {
            answeredCount++;
        }
    });
    
    console.log(`Section ${currentSection + 1} summary: ${answeredCount}/${requiredQuestions.length} questions answered. Complete: ${allAnswered}`);
    
    sectionRequirements[currentSection] = allAnswered;
    
    // Update next button state
    const nextBtn = document.getElementById('next-section-btn');
    if (currentSection < sections.length - 1) {
        nextBtn.disabled = !allAnswered;
        nextBtn.title = allAnswered ? '' : 'Please complete all required questions before proceeding';
    }
    
    // Update progress dots
    const dots = document.querySelectorAll('.section-dot');
    if (dots[currentSection]) {
        dots[currentSection].classList.toggle('completed', allAnswered);
    }
}

function navigateToSection(index) {
    if (index < 0 || index >= sections.length) return;
    
    // Check if trying to move forward without completing current section
    if (index > currentSection && !sectionRequirements[currentSection]) {
        // Run completion check again to make sure we have the latest state
        checkSectionCompletion();
        
        // Check again after running completion check
        if (!sectionRequirements[currentSection]) {
            const currentSectionElement = document.getElementById('assessment-sections');
            const requiredQuestions = currentSectionElement.querySelectorAll('.question[data-required="true"], .calculation-question[data-required="true"]');
            
            console.log(`Section ${currentSection + 1} completion check:`, {
                totalRequired: requiredQuestions.length,
                sectionComplete: sectionRequirements[currentSection]
            });
            
            alert(`Please complete all required questions in Section ${currentSection + 1} before proceeding.`);
            return;
        }
    }
    
    showSection(index);
}
