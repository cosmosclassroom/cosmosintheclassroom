// Initialize assessment
document.addEventListener('DOMContentLoaded', function() {
    const startTime = new Date();
    const startTimeElement = document.getElementById('start-time');
    const startTimeHidden = document.getElementById('start-time-hidden');
    const browserInfo = document.getElementById('browser-info');
    
    if (startTimeElement) startTimeElement.textContent = startTime.toLocaleString();
    if (startTimeHidden) startTimeHidden.value = startTime.toISOString();
    if (browserInfo) browserInfo.value = navigator.userAgent;

    // Check for and offer to restore saved progress
    checkForSavedProgress();
    
    // Add manual recovery button if there's saved data
    addManualRecoveryButton();

    // Add development mode indicator
    const isLocalDevelopment = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
    if (isLocalDevelopment) {
        const devNotice = document.createElement('div');
        devNotice.innerHTML = `
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 10px; margin: 10px 0; border-radius: 4px; font-size: 14px;">
                <strong>Development Mode:</strong> Assessment submissions will be simulated locally. No data will be sent to external servers.
            </div>
        `;
        const assessmentHeader = document.querySelector('.assessment-header');
        if (assessmentHeader) {
            assessmentHeader.appendChild(devNotice);
        }
    }

    // Progress tracking
    document.addEventListener('input', updateProgress);
    document.addEventListener('change', updateProgress);
    
    // Auto-save setup
    if (ASSESSMENT_CONFIG.autoSaveInterval > 0) {
        setInterval(autoSave, ASSESSMENT_CONFIG.autoSaveInterval);
    }
    
    // Form submission
    const form = document.getElementById('assessment-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitStatus = document.getElementById('submit-status');
    
    // Add confirmation dialog before submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Save current section data before submission
        saveCurrentSectionData();
        
        // Confirmation dialog
        if (!confirm('Are you sure you want to submit your assessment? You will not be able to make changes after submission.')) {
            return;
        }
        
        if (!validateForm()) {
            alert('Please correct the errors before submitting.');
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        // Merge all section data back into the main form before submission
        mergeSectionDataToForm();
        
        try {
            await submitAssessment(new FormData(form));
            
            submitBtn.textContent = 'Submitted ✓';
            submitBtn.style.background = '#28a745';
            
            // Disable all form elements
            form.querySelectorAll('input, textarea, select, button').forEach(el => {
                el.disabled = true;
            });
            
            alert('Assessment submitted successfully!');
            
            // Clear auto-save
            const title = document.querySelector('input[name="AssessmentTitle"]')?.value;
            if (title) localStorage.removeItem(`assessment-${title}`);
            
        } catch (error) {
            console.error('Submission error:', error);
            
            // Show fallback submission dialog
            showFallbackSubmissionDialog(form, error.message);
            
            // Reset submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Assessment';
            submitBtn.style.background = ''; // Reset to original color
        }
    });
    
    // Prevent accidental navigation
    window.addEventListener('beforeunload', function(e) {
        if (submitBtn.textContent !== 'Submitted') {
            e.preventDefault();
            e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        }
    });
    
    // Initial progress update
    updateProgress();
    
    // Initialize section management
    initializeSections();
});
