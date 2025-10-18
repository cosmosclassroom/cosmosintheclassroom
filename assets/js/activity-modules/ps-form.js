/**
 * Socrates | Problem Set Form Module
 *
 * @version 1.0.1
 * @author  [Your Name]
 * @license MIT
 *
 * This module handles the specific logic for problem set forms,
 * including collecting answers from various input fields.
 */

(function(Socrates) {
    'use strict';

    if (!Socrates) {
        console.error('[ps-form] Socrates global object not found. This module will not run.');
        return;
    }

    /**
     * Initializes the problem set form handlers.
     * This function is attached to the Socrates.modules object and called by activity-core.js.
     * @param {HTMLElement} form - The main activity form element.
     */
    function initializeProblemSetForm(form) {
        if (!form) {
            console.error('[ps-form] Initialization failed: Form element not found.');
            return;
        }
        Socrates.log('[ps-form] Initializing problem set form handlers...');

        // This function will be called by the core script to gather data
        Socrates.collectFormData = function() {
            const formData = {};
            const problems = document.querySelectorAll('.problem-container');

            problems.forEach((problem) => {
                const problemNumber = problem.dataset.problemNumber;
                const responseElement = problem.querySelector(`textarea[name="problem_${problemNumber}_response"]`);
                
                if (responseElement) {
                    formData[`problem_${problemNumber}_response`] = responseElement.value;
                }

                // Handle multi-part questions if they exist
                const multiPartInputs = problem.querySelectorAll(`.multi-part-response-field[data-problem-number="${problemNumber}"]`);
                multiPartInputs.forEach(input => {
                    const part = input.dataset.part;
                    formData[`problem_${problemNumber}_part_${part}`] = input.value;
                });
            });

            // Also collect reflection response
            const reflectionTextarea = form.querySelector('textarea[name="reflection_response"]');
            if (reflectionTextarea) {
                formData['reflection_response'] = reflectionTextarea.value;
            }

            Socrates.log('[ps-form] Collected form data:', formData);
            return formData;
        };

        // This function will be called by the core script to restore data
        Socrates.restoreFormData = function(savedData) {
            if (!savedData) return;

            Socrates.log('[ps-form] Restoring form data...');

            Object.keys(savedData).forEach(key => {
                const element = form.querySelector(`[name="${key}"]`);
                if (element) {
                    element.value = savedData[key];
                }
            });
        };

        Socrates.log('[ps-form] Problem set form handlers initialized.');
    }

    // Attach the initialization function to the global Socrates object
    Socrates.modules.initForm = initializeProblemSetForm;

})(window.Socrates);
