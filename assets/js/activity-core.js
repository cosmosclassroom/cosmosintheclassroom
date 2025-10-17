/**
 * Activity Core - Unified Activity Submission System
 * Handles student info, auto-save, submission logic for all activity types
 * Version: 1.0.0
 * Date: October 13, 2025
 */

// =============================================================================
// GLOBAL STATE
// =============================================================================
window.ACTIVITY_STATE = {
    metadata: {},
    startTime: null,
    autoSaveTimer: null,
    submissionEnabled: false,
    initialized: false
};

// =============================================================================
// INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('[activity-core] Initializing...');
    
    // Load metadata from DOM
    loadMetadata();
    
    // Only proceed if submission is enabled
    if (!ACTIVITY_STATE.submissionEnabled) {
        console.log('[activity-core] Submission disabled for this activity');
        return;
    }
    
    // Initialize form
    initializeForm();
    
    // Set up auto-save
    if (ACTIVITY_STATE.metadata.autoSaveEnabled) {
        initializeAutoSave();
    }
    
    // Set up form handlers
    initializeFormHandlers();
    
    // Restore any saved data
    restoreSavedData();
    
    ACTIVITY_STATE.initialized = true;
    console.log('[activity-core] Initialization complete');
});

// =============================================================================
// METADATA LOADING
// =============================================================================
function loadMetadata() {
    const metadataDiv = document.getElementById('activity-metadata');
    if (!metadataDiv) {
        console.error('[activity-core] Metadata div not found');
        return;
    }
    
    ACTIVITY_STATE.metadata = {
        resourceId: metadataDiv.dataset.resourceId,
        contentType: metadataDiv.dataset.contentType,
        course: metadataDiv.dataset.course,
        title: metadataDiv.dataset.title,
        unit: metadataDiv.dataset.unit,
        submissionEnabled: metadataDiv.dataset.submissionEnabled === 'true',
        autoSaveEnabled: metadataDiv.dataset.autoSaveEnabled === 'true',
        autoSaveInterval: parseInt(metadataDiv.dataset.autoSaveInterval) || 30000,
        submissionFields: parseJSON(metadataDiv.dataset.submissionFields)
    };
    
    ACTIVITY_STATE.submissionEnabled = ACTIVITY_STATE.metadata.submissionEnabled;
    
    console.log('[activity-core] Metadata loaded:', ACTIVITY_STATE.metadata);
}

function parseJSON(jsonString) {
    if (!jsonString) {
        console.warn('[activity-core] JSON string is undefined or empty');
        return null;
    }
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.warn('[activity-core] Failed to parse JSON:', e);
        console.log('[activity-core] JSON string was:', jsonString);
        return null;
    }
}

// =============================================================================
// FORM INITIALIZATION
// =============================================================================
function initializeForm() {
    // Set start time
    ACTIVITY_STATE.startTime = new Date().toISOString();
    document.getElementById('start-time').value = ACTIVITY_STATE.startTime;
    
    // Set browser info
    document.getElementById('browser-info').value = navigator.userAgent;
    
    console.log('[activity-core] Form initialized, start time:', ACTIVITY_STATE.startTime);
}

// =============================================================================
// FORM HANDLERS
// =============================================================================
function initializeFormHandlers() {
    const form = document.getElementById('activity-submission-form');
    const clearButton = document.getElementById('clear-form');
    
    if (!form) {
        console.error('[activity-core] Form not found');
        return;
    }
    
    // Submit handler
    form.addEventListener('submit', handleSubmit);
    
    // Clear button handler
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear all form data? This cannot be undone.')) {
                clearForm();
            }
        });
    }
    
    console.log('[activity-core] Form handlers initialized');
}

async function handleSubmit(event) {
    event.preventDefault();
    
    console.log('[activity-core] Form submission started');
    
    const form = event.target;
    const submitButton = document.getElementById('submit-button');
    const statusDiv = document.getElementById('submission-status');
    
    // Disable submit button and show submitting state
    submitButton.disabled = true;
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '⏳ Submitting...';
    submitButton.style.opacity = '0.7';
    
    // Set submit time
    document.getElementById('submit-time').value = new Date().toISOString();
    
    // Create FormData from the form
    const formData = new FormData(form);
    
    // CRITICAL: Ensure ALL answer fields are included, even if empty
    // This prevents column misalignment when first student skips questions
    const allAnswerFields = form.querySelectorAll('.problem-answer-field');
    allAnswerFields.forEach(field => {
        if (field.name && !formData.has(field.name)) {
            formData.append(field.name, ''); // Add empty value
        }
    });
    
    try {
        // Check if we're in local development
        const isLocalDevelopment = window.location.hostname === '127.0.0.1' || 
                                   window.location.hostname === 'localhost';
        const forceLive = new URLSearchParams(window.location.search).get('livetest') === '1';
        
        if (isLocalDevelopment && !forceLive) {
            // Simulate submission
            console.log('[activity-core] LOCAL DEV MODE - Simulating submission');
            console.log('[activity-core] Form data:', Object.fromEntries(formData.entries()));
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            showStatus('success', 'Simulated submission successful (local development mode)');
            clearSavedData();
        } else {
            // Live submission
            console.log('[activity-core] LIVE SUBMISSION MODE');
            const result = await submitToBackend(formData);
            
            if (result.success) {
                showStatus('success', 'Activity submitted successfully!');
                clearSavedData();
                
                // Optionally clear form after successful submission
                setTimeout(() => {
                    if (confirm('Submission successful! Would you like to clear the form?')) {
                        clearForm();
                    }
                }, 1000);
            } else {
                showStatus('error', 'Submission failed: ' + (result.error || 'Unknown error'));
            }
        }
    } catch (error) {
        console.error('[activity-core] Submission error:', error);
        showStatus('error', 'Submission failed: ' + error.message);
    } finally {
        // Re-enable submit button and restore text
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        submitButton.style.opacity = '1';
    }
}

async function submitToBackend(formData) {
    // Get the backend URL from config
    const backendUrl = window.SITE_CONFIG?.activityCollectorUrl || 
                      '{{ site.google_scripts.activity_collector.url }}';
    
    if (!backendUrl || backendUrl.includes('{{')) {
        throw new Error('Backend URL not configured');
    }
    
    // Convert FormData to object, handling arrays
    const data = {};
    for (const [key, value] of formData.entries()) {
        if (data.hasOwnProperty(key)) {
            // Key exists - convert to array or append
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }
    
    // Convert arrays to comma-separated strings (Google Sheets compatibility)
    Object.keys(data).forEach(key => {
        if (Array.isArray(data[key])) {
            data[key] = data[key].join(', ');
        }
    });
    
    console.log('[activity-core] Submitting to:', backendUrl);
    console.log('[activity-core] Data:', data);
    
    // Submit to backend
    const response = await fetch(backendUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requirement
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    // no-cors mode doesn't allow reading response, assume success
    return { success: true };
}

function showStatus(type, message) {
    const statusDiv = document.getElementById('submission-status');
    if (!statusDiv) return;
    
    statusDiv.hidden = false;
    statusDiv.className = 'submission-status ' + type;
    statusDiv.textContent = message;
    
    console.log('[activity-core] Status:', type, message);
}

function clearForm() {
    const form = document.getElementById('activity-submission-form');
    if (!form) return;
    
    form.reset();
    clearSavedData();
    
    // Clear any dynamically generated fields
    const dynamicFields = document.getElementById('activity-specific-fields');
    if (dynamicFields) {
        const inputs = dynamicFields.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            } else {
                input.value = '';
            }
        });
    }
    
    showStatus('info', 'Form cleared');
    console.log('[activity-core] Form cleared');
}

// =============================================================================
// AUTO-SAVE FUNCTIONALITY
// =============================================================================
function initializeAutoSave() {
    const interval = ACTIVITY_STATE.metadata.autoSaveInterval;
    
    console.log('[activity-core] Auto-save enabled, interval:', interval + 'ms');
    
    // Save immediately on any input change
    const form = document.getElementById('activity-submission-form');
    if (form) {
        form.addEventListener('input', function() {
            // Debounce: save 2 seconds after last input
            clearTimeout(ACTIVITY_STATE.autoSaveTimer);
            ACTIVITY_STATE.autoSaveTimer = setTimeout(saveFormData, 2000);
        });
    }
    
    // Periodic save
    setInterval(saveFormData, interval);
}

function saveFormData() {
    const form = document.getElementById('activity-submission-form');
    if (!form) return;
    
    const formData = new FormData(form);
    const data = {};
    
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Also save dynamically generated fields
    const dynamicFields = document.getElementById('activity-specific-fields');
    if (dynamicFields) {
        const inputs = dynamicFields.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                data[input.name] = input.checked;
            } else if (input.type === 'radio') {
                if (input.checked) {
                    data[input.name] = input.value;
                }
            } else {
                data[input.name] = input.value;
            }
        });
    }
    
    const storageKey = 'activity-draft-' + ACTIVITY_STATE.metadata.resourceId;
    localStorage.setItem(storageKey, JSON.stringify(data));
    
    // Don't show save indicator for hexagon labs
    if (ACTIVITY_STATE.metadata.contentType !== 'hexagon_lab') {
        showAutoSaveIndicator();
    }
    
    console.log('[activity-core] Auto-saved draft for:', ACTIVITY_STATE.metadata.resourceId);
}

function restoreSavedData() {
    const storageKey = 'activity-draft-' + ACTIVITY_STATE.metadata.resourceId;
    const savedData = localStorage.getItem(storageKey);
    
    if (!savedData) {
        console.log('[activity-core] No saved draft found');
        return;
    }
    
    try {
        const data = JSON.parse(savedData);
        
        // Restore standard form fields
        Object.keys(data).forEach(key => {
            const element = document.querySelector(`[name="${key}"]`);
            if (element) {
                // Skip file inputs (cannot be programmatically set for security)
                if (element.type === 'file') {
                    return;
                }
                
                if (element.type === 'checkbox') {
                    element.checked = data[key] === true;
                } else if (element.type === 'radio') {
                    if (element.value === data[key]) {
                        element.checked = true;
                    }
                } else {
                    element.value = data[key];
                }
            }
        });
        
        console.log('[activity-core] Restored saved draft');
        showStatus('info', 'Draft restored from previous session');
    } catch (e) {
        console.error('[activity-core] Failed to restore saved data:', e);
    }
}

function clearSavedData() {
    const storageKey = 'activity-draft-' + ACTIVITY_STATE.metadata.resourceId;
    localStorage.removeItem(storageKey);
    console.log('[activity-core] Cleared saved draft');
}

function showAutoSaveIndicator() {
    const indicator = document.getElementById('auto-save-indicator');
    if (!indicator) return;
    
    indicator.hidden = false;
    
    // Fade out after 2 seconds
    setTimeout(() => {
        indicator.hidden = true;
    }, 2000);
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Make functions available globally for activity modules
window.ACTIVITY_CORE = {
    getMetadata: () => ACTIVITY_STATE.metadata,
    getStartTime: () => ACTIVITY_STATE.startTime,
    saveFormData: saveFormData,
    showStatus: showStatus
};

console.log('[activity-core] Module loaded');
