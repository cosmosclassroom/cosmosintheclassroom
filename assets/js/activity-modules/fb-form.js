/**
 * Socrates | Flexbook Form Module
 *
 * @version 1.0.1
 * @author  Socrates Engineering Team
 * @license MIT
 *
 * This module handles the specific logic for flexbook forms,
 * including checkpoint questions and reading reflections.
 */

(function(Socrates) {
    'use strict';

    if (!Socrates) {
        console.error('[fb-form] Socrates global object not found. This module will not run.');
        return;
    }

    /**
     * Initializes the flexbook form handlers.
     * This function is attached to the Socrates.modules object and called by activity-core.js.
     * @param {HTMLElement} form - The main activity form element.
     */
    function initializeFlexbookForm(form) {
        if (!form) {
            console.error('[fb-form] Initialization failed: Form element not found.');
            return;
        }

        const metadata = Socrates.getMetadata();
        
        if (metadata.contentType !== 'flexbook') {
            Socrates.log('[fb-form] Not a flexbook, skipping initialization');
            return;
        }

        Socrates.log('[fb-form] Initializing flexbook form handlers...');
        
        // Generate form fields for checkpoints
        generateFormFields(metadata);
        
        // Attach event listeners
        attachEventListeners();

        // This function will be called by the core script to gather data
        Socrates.collectFormData = function() {
            const formData = {};
            
            // Collect checkpoint answers
            const checkpointInputs = document.querySelectorAll('.checkpoint-answer');
            checkpointInputs.forEach(input => {
                formData[input.name] = input.value;
                
                // Handle units for numeric inputs
                const unitsInput = document.querySelector(`[name="${input.name}_units"]`);
                if (unitsInput) {
                    formData[`${input.name}_units`] = unitsInput.value;
                }
            });
            
            // Collect completion items
            const completionItems = document.querySelectorAll('input[name="completion_items"]:checked');
            formData.completion_items = Array.from(completionItems).map(item => item.value);
            
            return formData;
        };

        // Restore data function
        Socrates.restoreFormData = function(savedData) {
            Object.keys(savedData).forEach(key => {
                if (key === 'completion_items' && Array.isArray(savedData[key])) {
                    savedData[key].forEach(value => {
                        const checkbox = document.querySelector(`input[name="completion_items"][value="${value}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                } else {
                    const element = form.querySelector(`[name="${key}"]`);
                    if (element) {
                        element.value = savedData[key];
                    }
                }
            });
        };

        Socrates.log('[fb-form] Flexbook form handlers initialized.');
    }

    // =============================================================================
    // FORM FIELD GENERATION
    // =============================================================================

    function generateFormFields(metadata) {
        // Simplified: No additional fields needed
        // Checkpoint answers are inline in content
        // Submission bar handles name + submit
        Socrates.log('[fb-form] Minimal submission mode - no additional fields needed');
    }

    function findCheckpoints() {
        // Find all checkpoint divs that were rendered from instructional_flow
        const checkpointElements = document.querySelectorAll('[data-flow-type="checkpoint"]');
        const checkpoints = [];
        
        checkpointElements.forEach((element, index) => {
            const title = element.querySelector('h3, h4')?.textContent || `Checkpoint ${index + 1}`;
            const questions = [];
            
            // Extract questions from the checkpoint display
            const questionElements = element.querySelectorAll('.checkpoint-question');
            questionElements.forEach((qElement, qIndex) => {
                const questionText = qElement.querySelector('.question-text')?.textContent || '';
                const answerFormat = qElement.dataset.answerFormat || 'text';
                const rows = parseInt(qElement.dataset.rows) || 3;
                const choices = qElement.dataset.choices ? JSON.parse(qElement.dataset.choices) : [];
                
                questions.push({
                    index: qIndex,
                    question: questionText,
                    answer_format: answerFormat,
                    rows: rows,
                    choices: choices
                });
            });
            
            checkpoints.push({
                index: index,
                title: title,
                questions: questions
            });
        });
        
        return checkpoints;
    }

    function buildCheckpointSection(checkpoint, checkpointIndex) {
        let html = '<div class="form-section checkpoint-section">';
        html += `<h4>${escapeHtml(checkpoint.title)}</h4>`;
        
        checkpoint.questions.forEach((question, qIndex) => {
            const fieldName = `checkpoint_${checkpointIndex}_q${qIndex}`;
            const fieldId = `checkpoint-${checkpointIndex}-q${qIndex}`;
            
            html += '<div class="form-group checkpoint-question-group">';
            html += `<label for="${fieldId}">`;
            html += `<strong>Question ${qIndex + 1}:</strong> ${escapeHtml(question.question)}`;
            html += ' <span class="required">*</span>';
            html += '</label>';
            
            // Generate appropriate input based on answer format
            if (question.answer_format === 'text') {
                html += `<textarea id="${fieldId}" name="${fieldName}" required rows="${question.rows}" `;
                html += 'class="checkpoint-answer"></textarea>';
                html += '<span class="helper-text">Provide a complete answer in your own words.</span>';
            } 
            else if (question.answer_format === 'multiple_choice' && question.choices.length > 0) {
                html += `<select id="${fieldId}" name="${fieldName}" required class="checkpoint-answer">`;
                html += '<option value="">-- Select your answer --</option>';
                question.choices.forEach(choice => {
                    html += `<option value="${escapeHtml(choice)}">${escapeHtml(choice)}</option>`;
                });
                html += '</select>';
            }
            else if (question.answer_format === 'numeric_with_units') {
                html += '<div class="numeric-input-group">';
                html += `<input type="text" id="${fieldId}" name="${fieldName}" required `;
                html += 'class="checkpoint-answer numeric-answer" placeholder="Enter value">';
                html += `<input type="text" id="${fieldId}-units" name="${fieldName}_units" `;
                html += 'class="units-input" placeholder="Units">';
                html += '</div>';
                html += '<span class="helper-text">Include both numerical value and units.</span>';
            }
            else {
                // Default to text input for unknown formats
                html += `<input type="text" id="${fieldId}" name="${fieldName}" required `;
                html += 'class="checkpoint-answer">';
            }
            
            html += '</div>';
        });
        
        html += '</div>';
        return html;
    }

    function buildReadingReflection() {
        let html = '<div class="form-section">';
        html += '<h4>Reading Reflection <span class="required">*</span></h4>';
        html += '<div class="form-group">';
        html += '<label for="reading-reflection">';
        html += 'Summarize the main ideas from this chapter. What connections did you make to the course\'s anchoring phenomenon?';
        html += '</label>';
        html += '<textarea id="reading-reflection" name="reading_reflection" required minlength="100" rows="6">';
        html += '</textarea>';
        html += '<span class="helper-text">Minimum 100 characters. Be specific and connect to course themes.</span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function buildCompletionConfirmation() {
        let html = '<div class="form-section">';
        html += '<h4>Completion Confirmation</h4>';
        html += '<div class="checkbox-group">';
        
        html += '<div class="checkbox-item">';
        html += '<input type="checkbox" id="read-all" name="completion_items" value="read_all_sections" required>';
        html += '<label for="read-all">I have read all sections of this chapter <span class="required">*</span></label>';
        html += '</div>';
        
        html += '<div class="checkbox-item">';
        html += '<input type="checkbox" id="answered-checkpoints" name="completion_items" value="answered_checkpoints" required>';
        html += '<label for="answered-checkpoints">I have thoughtfully answered all checkpoint questions <span class="required">*</span></label>';
        html += '</div>';
        
        html += '<div class="checkbox-item">';
        html += '<input type="checkbox" id="ready-practice" name="completion_items" value="ready_for_practice">';
        html += '<label for="ready-practice">I feel ready to apply these concepts in practice problems (optional)</label>';
        html += '</div>';
        
        html += '</div>';
        
        // Time spent
        html += '<div class="form-group" style="margin-top: 1rem;">';
        html += '<label for="time-spent-reading">Approximate time spent reading (minutes) <span class="required">*</span></label>';
        html += '<input type="number" id="time-spent-reading" name="time_spent" min="5" max="300" required>';
        html += '</div>';
        
        // Optional questions/comments
        html += '<div class="form-group" style="margin-top: 1rem;">';
        html += '<label for="questions">Questions or areas of confusion (optional)</label>';
        html += '<textarea id="questions" name="questions" rows="3">';
        html += '</textarea>';
        html += '<span class="helper-text">List any concepts or sections you found confusing.</span>';
        html += '</div>';
        
        html += '</div>';

        return html;
    }

    // =============================================================================
    // EVENT LISTENERS
    // =============================================================================

    function attachEventListeners() {
        // Character counter for reading reflection
        const reflectionField = document.getElementById('reading-reflection');
        if (reflectionField) {
            reflectionField.addEventListener('input', function() {
                const length = this.value.length;
                const minLength = parseInt(this.getAttribute('minlength')) || 100;
                
                // Find or create counter display
                let counter = this.parentElement.querySelector('.char-counter');
                if (!counter) {
                    counter = document.createElement('span');
                    counter.className = 'char-counter';
                    this.parentElement.appendChild(counter);
                }

                counter.textContent = `${length} / ${minLength} characters`;
                counter.style.color = length >= minLength ? '#27ae60' : '#7f8c8d';
                counter.style.fontSize = '0.85rem';
                counter.style.marginTop = '0.25rem';
                counter.style.display = 'block';
            });
        }

        // Time spent validation
        const timeSpentField = document.getElementById('time-spent-reading');
        if (timeSpentField) {
            timeSpentField.addEventListener('input', function() {
                const value = parseInt(this.value);
                if (value < 5) {
                    this.setCustomValidity('Please provide a realistic reading time (minimum 5 minutes).');
                } else if (value > 120) {
                    this.setCustomValidity('If you spent more than 2 hours, please explain in the questions field.');
                } else {
                    this.setCustomValidity('');
                }
            });
        }

        // Checkpoint answer quality hints
        const checkpointAnswers = document.querySelectorAll('textarea.checkpoint-answer');
        checkpointAnswers.forEach(textarea => {
            textarea.addEventListener('blur', function() {
                const wordCount = this.value.trim().split(/\s+/).filter(w => w.length > 0).length;
                const helperText = this.parentElement.querySelector('.helper-text');
                
                if (wordCount < 10 && this.value.trim().length > 0) {
                    if (helperText) {
                        helperText.textContent = 'Consider providing more detail in your answer (currently ' + wordCount + ' words).';
                        helperText.style.color = '#e67e22';
                    }
                } else if (wordCount >= 10) {
                    if (helperText) {
                        helperText.textContent = 'Provide a complete answer in your own words.';
                        helperText.style.color = '';
                    }
                }
            });
        });

        // Completion checkbox validation
        const completionCheckboxes = document.querySelectorAll('input[name="completion_items"]');
        completionCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateCompletionStatus();
            });
        });
    }

    function updateCompletionStatus() {
        const requiredCheckboxes = document.querySelectorAll('input[name="completion_items"][required]');
        const allChecked = Array.from(requiredCheckboxes).every(cb => cb.checked);
        
        if (allChecked) {
            console.log('[fb-form] All required completion items checked');
        }
    }

    // =============================================================================
    // UTILITY FUNCTIONS
    // =============================================================================

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Attach the initialization function to the global Socrates object
    Socrates.modules.initForm = initializeFlexbookForm;

})(window.Socrates);
