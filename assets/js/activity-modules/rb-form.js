/**
 * Socrates | Research Brief Form Module
 *
 * @version 1.0.1
 * @author  Socrates Engineering Team
 * @license MIT
 *
 * This module handles the specific logic for research brief forms,
 * including multi-phase research cycles and response collection.
 */

(function(Socrates) {
    'use strict';

    if (!Socrates) {
        console.error('[rb-form] Socrates global object not found. This module will not run.');
        return;
    }

    /**
     * Initializes the research brief form handlers.
     * This function is attached to the Socrates.modules object and called by activity-core.js.
     * @param {HTMLElement} form - The main activity form element.
     */
    function initializeResearchBriefForm(form) {
        if (!form) {
            console.error('[rb-form] Initialization failed: Form element not found.');
            return;
        }

        const metadata = Socrates.getMetadata();
        
        if (metadata.contentType !== 'research_brief') {
            Socrates.log('[rb-form] Not a research brief, skipping initialization');
            return;
        }

        Socrates.log('[rb-form] Initializing research brief form handlers...');
        
        // Generate form fields for research brief phases
        generateFormFields(metadata);
        
        // Attach event listeners
        attachEventListeners();

        // This function will be called by the core script to gather data
        Socrates.collectFormData = function() {
            const formData = {};
            
            // Collect phase responses
            const phaseInputs = document.querySelectorAll('textarea[name^="phase_"], input[name^="phase_"]');
            phaseInputs.forEach(input => {
                formData[input.name] = input.value;
            });
            
            return formData;
        };

        // Restore data function
        Socrates.restoreFormData = function(savedData) {
            Object.keys(savedData).forEach(key => {
                const element = form.querySelector(`[name="${key}"]`);
                if (element) {
                    element.value = savedData[key];
                }
            });
        };

        Socrates.log('[rb-form] Research brief form handlers initialized.');
    }

    // =============================================================================
    // FORM FIELD GENERATION
    // =============================================================================
    
    function generateFormFields(metadata) {
        Socrates.log('[rb-form] Generating Research Brief form fields...');
        
        // Safety check to ensure we have access to Socrates methods
        if (!Socrates.getMetadata) {
            console.error('[rb-form] Socrates methods not available');
            return;
        }
        
        // Find all research brief prompts and create form fields for them
        const briefPhases = findBriefPhases();
        
        if (!briefPhases || briefPhases.length === 0) {
            console.log('[rb-form] No brief phases found - using default submission mode');
            return;
        }
        
        console.log('[rb-form] Found', briefPhases.length, 'research brief phases');
        
        // Generate the form sections for each phase
        const formContainer = document.createElement('div');
        formContainer.className = 'research-brief-form';
        
        briefPhases.forEach((phase, index) => {
            const phaseSection = buildPhaseSection(phase, index);
            formContainer.innerHTML += phaseSection;
        });
        
        // Add the form to the page
        const targetElement = document.querySelector('.research-brief-content');
        if (targetElement) {
            targetElement.appendChild(formContainer);
        } else {
            console.error('[rb-form] Could not find target element for form insertion');
        }
    }

    function findBriefPhases() {
        // First try the embedded JSON approach (most reliable)
        const jsonScriptElement = document.getElementById('brief-cycle-data');
        if (jsonScriptElement) {
            try {
                const briefCycleData = JSON.parse(jsonScriptElement.textContent);
                if (Array.isArray(briefCycleData)) {
                    console.log('[rb-form] Using brief phases from embedded JSON');
                    return briefCycleData.map((phase, index) => {
                        return {
                            index: index,
                            phase: phase.phase,
                            title: phase.title,
                            description: phase.description,
                            prompts: (phase.prompts || []).map((prompt, pIndex) => {
                                const mappedPrompt = {
                                    index: pIndex,
                                    title: prompt.title,
                                    prompt: prompt.prompt_text,
                                    response_type: prompt.response_type || 'textarea',
                                    rows: prompt.rows || 5
                                };
                                
                                // Handle multi-part prompts
                                if (prompt.response_type === 'multi_part' && prompt.parts) {
                                    mappedPrompt.parts = prompt.parts.map(part => {
                                        return {
                                            part: part.part,
                                            prompt: part.prompt,
                                            response_type: part.response_type || 'textarea',
                                            rows: part.rows || 3,
                                            choices: part.choices
                                        };
                                    });
                                }
                                
                                return mappedPrompt;
                            })
                        };
                    });
                }
            } catch (e) {
                console.error('[rb-form] Failed to parse embedded JSON:', e);
            }
        }
        
        // Try to get phases from YAML front matter as fallback
        const metadata = window.ACTIVITY_CORE.getMetadata();
        if (metadata && metadata.briefCycle && Array.isArray(metadata.briefCycle)) {
            console.log('[rb-form] Using brief phases from front matter YAML');
            return metadata.briefCycle.map((phase, index) => {
                return {
                    index: index,
                    phase: phase.phase,
                    title: phase.title,
                    description: phase.description,
                    prompts: (phase.prompts || []).map((prompt, pIndex) => {
                        const mappedPrompt = {
                            index: pIndex,
                            title: prompt.title,
                            prompt: prompt.prompt_text,
                            response_type: prompt.response_type || 'textarea',
                            rows: prompt.rows || 5
                        };
                        
                        // Handle multi-part prompts
                        if (prompt.response_type === 'multi_part' && prompt.parts) {
                            mappedPrompt.parts = prompt.parts.map(part => {
                                return {
                                    part: part.part,
                                    prompt: part.prompt,
                                    response_type: part.response_type || 'textarea',
                                    rows: part.rows || 3,
                                    choices: part.choices
                                };
                            });
                        }
                        
                        return mappedPrompt;
                    })
                };
            });
        }
        
        // CRITICAL FAILURE: No structured data found
        // This violates our data-first architecture - the build should have failed earlier
        console.error('[rb-form] CRITICAL: No brief phases found in structured data sources (JSON or YAML front matter)');
        console.error('[rb-form] Research Brief requires briefCycle data in front matter. Check YAML configuration.');
        throw new Error('Research Brief form cannot be generated: Missing briefCycle data in page front matter');
    }

    function buildPhaseSection(phase, phaseIndex) {
        let html = `<div class="form-section phase-section" data-phase="${phaseIndex}">`;
        html += `<h3>${escapeHtml(phase.title)}</h3>`;
        
        phase.prompts.forEach((prompt, promptIndex) => {
            const fieldName = `phase_${phaseIndex}_prompt_${promptIndex}`;
            const fieldId = `phase-${phaseIndex}-prompt-${promptIndex}`;
            
            html += '<div class="form-group brief-prompt-group">';
            html += `<label for="${fieldId}">`;
            html += `<strong>${escapeHtml(prompt.title)}</strong>`;
            html += ' <span class="required">*</span>';
            html += '</label>';
            html += `<p class="prompt-text">${escapeHtml(prompt.prompt)}</p>`;
            
            // Different response types
            if (prompt.response_type === 'textarea') {
                html += `<textarea id="${fieldId}" name="${fieldName}" rows="${prompt.rows}" 
                          class="form-control brief-response" required></textarea>`;
            } else if (prompt.response_type === 'file_upload') {
                html += `<input type="file" id="${fieldId}" name="${fieldName}" 
                          class="form-control brief-response file-upload" />`;
            } else if (prompt.response_type === 'notice_wonder') {
                html += '<div class="notice-wonder-container">';
                html += `<div class="notice-section">
                           <h5>I Notice</h5>
                           <textarea id="${fieldId}-notice" name="${fieldName}_notice" rows="3" 
                            class="form-control brief-response" required></textarea>
                         </div>`;
                html += `<div class="wonder-section">
                           <h5>I Wonder</h5>
                           <textarea id="${fieldId}-wonder" name="${fieldName}_wonder" rows="3" 
                            class="form-control brief-response" required></textarea>
                         </div>`;
                html += '</div>';
            } else if (prompt.response_type === 'multi_part') {
                html += '<div class="multi-part-container">';
                
                if (prompt.parts && Array.isArray(prompt.parts)) {
                    prompt.parts.forEach((part, partIndex) => {
                        const partId = `${fieldId}-part-${part.part || partIndex}`;
                        const partName = `${fieldName}_part_${part.part || partIndex}`;
                        
                        html += `<div class="part-section">
                                   <h5>Part ${part.part || String.fromCharCode(97 + partIndex).toUpperCase()}</h5>
                                   <p class="part-prompt">${escapeHtml(part.prompt)}</p>`;
                                   
                        if (part.response_type === 'textarea') {
                            html += `<textarea id="${partId}" name="${partName}" rows="${part.rows || 3}" 
                                      class="form-control brief-response" required></textarea>`;
                        } else if (part.response_type === 'multiple_choice' && Array.isArray(part.choices)) {
                            html += `<div class="multiple-choice-options">`;
                            part.choices.forEach((choice, choiceIndex) => {
                                html += `<div class="form-check">
                                          <input class="form-check-input brief-response" type="radio" name="${partName}" 
                                           id="${partId}-choice-${choiceIndex}" value="${choice.value || choice.text}">
                                          <label class="form-check-label" for="${partId}-choice-${choiceIndex}">
                                            ${escapeHtml(choice.text)}
                                          </label>
                                        </div>`;
                            });
                            html += `</div>`;
                        }
                        
                        html += `</div>`;
                    });
                }
                
                html += '</div>';
            } else if (prompt.response_type === 'cer') {
                html += '<div class="cer-container">';
                html += `<div class="cer-section">
                           <h5>Claim</h5>
                           <textarea id="${fieldId}-claim" name="${fieldName}_claim" rows="2" 
                            class="form-control brief-response" required></textarea>
                         </div>`;
                html += `<div class="cer-section">
                           <h5>Evidence</h5>
                           <textarea id="${fieldId}-evidence" name="${fieldName}_evidence" rows="3" 
                            class="form-control brief-response" required></textarea>
                         </div>`;
                html += `<div class="cer-section">
                           <h5>Reasoning</h5>
                           <textarea id="${fieldId}-reasoning" name="${fieldName}_reasoning" rows="3" 
                            class="form-control brief-response" required></textarea>
                         </div>`;
                html += '</div>';
            }
            
            html += '</div>'; // End form-group
        });
        
        html += '</div>'; // End phase-section
        return html;
    }

    // =============================================================================
    // EVENT LISTENERS
    // =============================================================================

    function attachEventListeners() {
        // Listen for autosave events
        window.ACTIVITY_CORE.addEventListener('autosave', handleAutosave);
        
        // Listen for submit events
        window.ACTIVITY_CORE.addEventListener('submit', handleSubmit);
        
        // Listen for form field changes
        document.addEventListener('change', handleFormChange);
        document.addEventListener('input', handleFormChange);
    }

    function handleFormChange(event) {
        const target = event.target;
        if (target.classList.contains('brief-response')) {
            // Mark the activity as dirty to trigger autosave
            window.ACTIVITY_CORE.setDirty(true);
        }
    }

    function handleAutosave(event) {
        // Collect all form field values for autosave
        const formData = collectFormData();
        event.detail.formData = formData;
    }

    function handleSubmit(event) {
        // Collect all form field values for final submission
        const formData = collectFormData();
        event.detail.formData = formData;
    }

    function collectFormData() {
        const formData = {};
        
        // Collect all form field values
        const formElements = document.querySelectorAll('.brief-response');
        formElements.forEach(element => {
            if (element.name) {
                if (element.type === 'file') {
                    // For file uploads, we can't store the file itself in formData
                    // The ACTIVITY_CORE will handle file uploads separately
                    formData[element.name] = element.value ? true : false;
                } else {
                    formData[element.name] = element.value;
                }
            }
        });
        
        return formData;
    }

    // =============================================================================
    // UTILITY FUNCTIONS
    // =============================================================================

    function escapeHtml(text) {
        if (!text) return '';
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Attach the initialization function to the global Socrates object
    Socrates.modules.initForm = initializeResearchBriefForm;

})(window.Socrates);