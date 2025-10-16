/**
 * Research Brief Form Module
 * Handles form generation and submission for Research Brief activities
 * Version: 1.0.0
 * Date: October 16, 2025
 */

(function() {
    'use strict';
    
    // Create a safety check for activity-core
    let retryCount = 0;
    const MAX_RETRIES = 5;
    
    // Function to check for activity-core readiness
    function checkActivityCore() {
        if (window.ACTIVITY_CORE && typeof window.ACTIVITY_CORE.getMetadata === 'function') {
            console.log('[rb-form] activity-core.js loaded and ready');
            initialize();
            return true;
        } else {
            retryCount++;
            if (retryCount <= MAX_RETRIES) {
                console.log(`[rb-form] activity-core.js not ready yet, retry ${retryCount}/${MAX_RETRIES} in ${retryCount * 300}ms`);
                setTimeout(checkActivityCore, retryCount * 300);
            } else {
                console.error('[rb-form] activity-core.js failed to load after multiple retries');
            }
            return false;
        }
    }

    console.log('[rb-form] Research Brief module loading...');

    // =============================================================================
    // MODULE INITIALIZATION
    // =============================================================================
    
    function initialize() {
        const metadata = window.ACTIVITY_CORE.getMetadata();
        
        if (metadata.contentType !== 'research_brief') {
            console.warn('[rb-form] Not a research brief, skipping initialization');
            return;
        }

        console.log('[rb-form] Initializing Research Brief form...');
        
        // Generate form fields for research brief phases
        generateFormFields(metadata);
        
        // Attach event listeners
        attachEventListeners();
        
        console.log('[rb-form] Research Brief form initialized');
    }

    // =============================================================================
    // FORM FIELD GENERATION
    // =============================================================================

    function generateFormFields(metadata) {
        // Safety check to ensure we have access to activity-core
        if (!window.ACTIVITY_CORE || !window.ACTIVITY_CORE.getMetadata) {
            console.error('[rb-form] activity-core.js methods not available');
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
                                return {
                                    index: pIndex,
                                    title: prompt.title,
                                    prompt: prompt.prompt_text,
                                    response_type: prompt.response_type || 'textarea',
                                    rows: prompt.rows || 5
                                };
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
                        return {
                            index: pIndex,
                            title: prompt.title,
                            prompt: prompt.prompt_text,
                            response_type: prompt.response_type || 'textarea',
                            rows: prompt.rows || 5
                        };
                    })
                };
            });
        }
        
        // Fallback to DOM-based phase detection
        console.log('[rb-form] Falling back to DOM-based phase detection');
        const phaseElements = document.querySelectorAll('[data-brief-phase]');
        const phases = [];
        
        phaseElements.forEach((element, index) => {
            const phaseTitle = element.querySelector('h3, h4')?.textContent || `Phase ${index + 1}`;
            const prompts = [];
            
            // Extract prompts from the phase display
            const promptElements = element.querySelectorAll('.brief-prompt');
            promptElements.forEach((pElement, pIndex) => {
                const promptTitle = pElement.querySelector('.prompt-title')?.textContent || '';
                const promptText = pElement.querySelector('.prompt-text')?.textContent || '';
                const responseType = pElement.dataset.responseType || 'textarea';
                const rows = parseInt(pElement.dataset.rows) || 5;
                
                prompts.push({
                    index: pIndex,
                    title: promptTitle,
                    prompt: promptText,
                    response_type: responseType,
                    rows: rows
                });
            });
            
            phases.push({
                index: index,
                title: phaseTitle,
                prompts: prompts
            });
        });
        
        return phases;
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

    // =============================================================================
    // INITIALIZE MODULE
    // =============================================================================
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('[rb-form] DOM loaded, checking for activity-core...');
        // Give activity-core.js a chance to load first
        setTimeout(checkActivityCore, 100);
    });
    
    window.RESEARCH_BRIEF_FORM = { 
        initialize: initialize,
        checkActivityCore: checkActivityCore
    };
    console.log('[rb-form] Module registered');

})();