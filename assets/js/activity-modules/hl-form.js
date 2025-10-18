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

    // Attach the initialization function to the global Socrates object
    Socrates.modules.initForm = initializeHexagonLabForm;

})(window.Socrates);
