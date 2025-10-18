/**
 * activity-core.js
 *
 * Core module for all Collection-based interactive activities (Problem Sets, Labs, Research Briefs).
 * Handles global object initialization, form finding, and module loading.
 */

// --------------------------------------------------------------------------
// 1. GLOBAL OBJECT INITIALIZATION (CRITICAL: MUST RUN FIRST)
// --------------------------------------------------------------------------

// Initialize the global Socrates object immediately to prevent "Socrates is not defined"
// errors when individual activity modules (like ps-form.js) load and execute.
if (typeof window.Socrates === 'undefined') {
    window.Socrates = {
        config: {},
        data: {},
        modules: {},
        log: function(message) {
            console.log('[Socrates]', message);
        }
    };
    window.Socrates.log('Global object initialized.');
}

// --------------------------------------------------------------------------
// 2. DOM READY / WINDOW LOAD HANDLERS
// --------------------------------------------------------------------------

// The initialization logic MUST be deferred to window.onload to resolve the DOM race condition
// where Liquid includes (like the submission form) are not yet rendered when the script loads.

window.onload = function() {
    window.Socrates.log('Window resources fully loaded. Starting activity initialization.');

    // --- FORM FINDING AND RACE CONDITION CHECK ---
    const submissionForm = document.getElementById('activity-submission-form');

    if (!submissionForm) {
        // This log was previously triggered by the race condition.
        // If it runs now, it means the architecture is fundamentally broken (which it shouldn't be).
        window.Socrates.log('[activity-core] Submission is enabled, but no submission form was found on this page.');
        return;
    }

    window.Socrates.log('Submission form found. Attaching event listeners...');

    // --- CONFIGURATION LOADING (Example) ---
    // Extract configuration from hidden inputs or page front matter (not shown here for brevity)
    window.Socrates.config.resourceId = submissionForm.getAttribute('data-resource-id') || 'N/A';
    window.Socrates.log('Resource ID: ' + window.Socrates.config.resourceId);

    // --- MODULE EXECUTION ---
    // Find and execute specialized module based on content type (e.g., ps-form.js, hl-form.js)
    // In a real build, we'd dynamically call the correct module's initialization function here.
    if (window.Socrates.modules.initForm) {
        window.Socrates.modules.initForm(submissionForm);
    }
};

// --------------------------------------------------------------------------
// 3. AUXILIARY UTILITIES
// --------------------------------------------------------------------------
// Placeholder for utility functions (e.g., saveProgress, loadState, etc.)
// ...

window.Socrates.log('activity-core.js fully loaded.');
