/**
 * Socrates | Hexagon Lab Form Module
 *
 * @version 1.0.1
 * @author  Socrates Engineering Team
 * @license MIT
 *
 * This module handles the specific logic for hexagon lab forms,
 * including lab report submissions and data collection.
 */

(function(Socrates) {
    'use strict';

    if (!Socrates) {
        console.error('[hl-form] Socrates global object not found. This module will not run.');
        return;
    }

    /**
     * Initializes the hexagon lab form handlers.
     * This function is attached to the Socrates.modules object and called by activity-core.js.
     * @param {HTMLElement} form - The main activity form element.
     */
    function initializeHexagonLabForm(form) {
        if (!form) {
            console.error('[hl-form] Initialization failed: Form element not found.');
            return;
        }

        const metadata = Socrates.getMetadata();
        
        if (metadata.contentType !== 'hexagon_lab') {
            Socrates.log('[hl-form] Not a hexagon lab, skipping initialization');
            return;
        }

        Socrates.log('[hl-form] Initializing hexagon lab form handlers...');
        
        // Generate form fields
        generateFormFields(metadata);

        // This function will be called by the core script to gather data
        Socrates.collectFormData = function() {
            const formData = {};
            
            // Collect lab report answers
            const labInputs = document.querySelectorAll('textarea[name^="lab_"], input[name^="lab_"]');
            labInputs.forEach(input => {
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

        Socrates.log('[hl-form] Hexagon lab form handlers initialized.');
    }

    // =============================================================================
    // FORM FIELD GENERATION
    // =============================================================================

    function generateFormFields(metadata) {
        const container = document.getElementById('activity-specific-fields');
        if (!container) {
            console.error('[hl-form] Container #activity-specific-fields not found');
            return;
        }
        
        // Clear existing content - no additional fields needed for hexagon labs
        // All questions are already rendered in the lab sections
        container.innerHTML = '';
        
        Socrates.log('[hl-form] Hexagon lab uses inline questions - no additional submission fields');
    }

    // =============================================================================
    // SUBMISSION HANDLER (for hexagon labs)
    // =============================================================================

    function wireSubmitButton() {
        const submitButton = document.getElementById('submit-button');
        if (!submitButton) {
            console.warn('[hl-form] Submit button not found');
            return;
        }
        
        submitButton.addEventListener('click', async function(e) {
            e.preventDefault();
            
            try {
                // Collect form data using Socrates API
                const formData = new FormData();
                
                // Collect all form fields
                const inputs = document.querySelectorAll('#assessment-form input, #assessment-form textarea, #assessment-form select');
                inputs.forEach(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        if (input.checked) {
                            formData.append(input.name, input.value);
                        }
                    } else {
                        formData.append(input.name, input.value);
                    }
                });
                
                // Add metadata
                const metadata = Socrates.getMetadata();
                console.log('[hl-form] DEBUG: Metadata from Socrates.getMetadata():', metadata);
                
                // Also check the element directly
                const metadataEl = document.getElementById('activity-metadata');
                console.log('[hl-form] DEBUG: Direct element check:', metadataEl);
                if (metadataEl) {
                    console.log('[hl-form] DEBUG: data-resource-id attribute:', metadataEl.getAttribute('data-resource-id'));
                }
                
                formData.append('resource_id', metadata.resourceId);
                formData.append('content_type', metadata.contentType);
                formData.append('course', metadata.course);
                formData.append('unit', metadata.unit);
                
                // Call submission function if available, otherwise implement inline
                if (typeof submitAssessment === 'function') {
                    // Manually add ResourceID to formData for submitAssessment compatibility
                    formData.append('ResourceID', metadata.resourceId);
                    formData.append('ContentType', metadata.contentType);
                    formData.append('Course', metadata.course);
                    
                    console.log('[hl-form] DEBUG: Calling submitAssessment with ResourceID:', metadata.resourceId);
                    
                    const result = await submitAssessment(formData);
                    if (result.success) {
                        alert('Lab report submitted successfully!');
                    } else {
                        alert('Submission failed: ' + result.message);
                    }
                } else {
                    // Inline submission fallback
                    await inlineSubmit(formData);
                }
                
            } catch (error) {
                console.error('[hl-form] Submission error:', error);
                alert('Submission failed. Please try again or contact your instructor.');
            }
        });
    }
    
    async function inlineSubmit(formData) {
        // Check if running locally
        const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
        
        if (isLocal) {
            console.log('[hl-form] Local development - simulating submission');
            console.log('Form data:', Object.fromEntries(formData.entries()));
            alert('Local development mode: Submission simulated (check console)');
            return;
        }
        
        // Convert FormData to JSON object (like assessment-submit.js does)
        const data = {};
        for (const [key, value] of formData.entries()) {
            if (data.hasOwnProperty(key)) {
                // Key already exists - convert to array or append to existing array
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }
        
        // Convert arrays to comma-separated strings for Google Sheets compatibility
        Object.keys(data).forEach(key => {
            if (Array.isArray(data[key])) {
                data[key] = data[key].join(', ');
            }
        });
        
        // Ensure ResourceID is set for proper tab naming
        data.ResourceID = data.resource_id || data.ResourceID || 'unknown';
        data.ContentType = data.content_type || data.ContentType || 'hexagon_lab';
        data.Course = data.course || data.Course || 'unknown';
        data.SubmissionTime = new Date().toISOString();
        
        console.log('[hl-form] DEBUG: Final data.ResourceID:', data.ResourceID);
        console.log('[hl-form] DEBUG: Final data.resource_id:', data.resource_id);
        console.log('[hl-form] Submitting data:', data);
        
        // Live submission
        const webAppUrl = window.ASSESSMENT_CONFIG?.webAppUrl || window.SITE_CONFIG?.activityCollectorUrl;
        if (!webAppUrl) {
            throw new Error('No submission endpoint configured');
        }
        
        const response = await fetch(webAppUrl, {
            method: 'POST',
            headers: { 
                'Content-Type': 'text/plain;charset=utf-8'  // CORS-friendly: avoids preflight
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Network error: ' + response.status);
        }
        
        const result = await response.text();
        console.log('[hl-form] Submission result:', result);
        alert('Lab report submitted successfully!');
    }

    // Wire up submit button after initialization
    setTimeout(wireSubmitButton, 100);

    // Attach the initialization function to the global Socrates object
    Socrates.modules.initForm = initializeHexagonLabForm;

})(window.Socrates);
