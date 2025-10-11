// Auto-save functionality
async function autoSave() {
// Track script loading for debugging
if (window.markScriptLoaded) {
    window.markScriptLoaded('storage');
}    if (!ASSESSMENT_CONFIG.webAppUrl) return;
    
    const indicator = document.getElementById('auto-save-indicator');
    const form = document.getElementById('assessment-form');
    
    try {
        indicator.textContent = 'Saving...';
        indicator.className = 'auto-save-indicator saving';
        
        // Save current section data first
        saveCurrentSectionData();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.AutoSave = true;
        data.Timestamp = new Date().toISOString();
        
        // Include section data in the save
        data.SectionData = sectionFormData;
        
        // Local backup
        localStorage.setItem(`assessment-${data.AssessmentTitle}`, JSON.stringify(data));
        
        indicator.textContent = 'Saved';
        indicator.className = 'auto-save-indicator saved';
        
        setTimeout(() => {
            indicator.textContent = '';
            indicator.className = 'auto-save-indicator';
        }, 3000);
        
    } catch (error) {
        console.warn('Auto-save failed:', error);
        indicator.textContent = '';
        indicator.className = 'auto-save-indicator';
    }
}

// Check for saved progress and offer recovery
function checkForSavedProgress() {
    const assessmentTitle = document.querySelector('input[name="AssessmentTitle"]')?.value || 'Assessment';
    const savedData = localStorage.getItem(`assessment-${assessmentTitle}`);
    
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            const savedTime = new Date(parsedData.Timestamp);
            const timeDiff = Date.now() - savedTime.getTime();
            const hoursDiff = timeDiff / (1000 * 60 * 60);
            
            // Only offer recovery if saved within last 24 hours
            if (hoursDiff < 24) {
                showRecoveryDialog(parsedData, savedTime);
            } else {
                // Clean up old saves
                localStorage.removeItem(`assessment-${assessmentTitle}`);
            }
        } catch (error) {
            console.warn('Failed to parse saved assessment data:', error);
            localStorage.removeItem(`assessment-${assessmentTitle}`);
        }
    }
}

function showRecoveryDialog(savedData, savedTime) {
    const recoveryModal = document.createElement('div');
    recoveryModal.className = 'modal-overlay';
    recoveryModal.style.display = 'flex';
    recoveryModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <h3>🔄 Restore Previous Progress?</h3>
            <p>We found a saved version of your assessment from <strong>${savedTime.toLocaleString()}</strong>.</p>
            <p>Would you like to restore your previous answers?</p>
            <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                <button id="recovery-cancel" class="nav-btn" style="background: #6c757d;">Start Fresh</button>
                <button id="recovery-restore" class="nav-btn" style="background: #28a745;">Restore Progress</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(recoveryModal);
    
    document.getElementById('recovery-cancel').onclick = () => {
        const assessmentTitle = savedData.AssessmentTitle;
        localStorage.removeItem(`assessment-${assessmentTitle}`);
        document.body.removeChild(recoveryModal);
    };
    
    document.getElementById('recovery-restore').onclick = () => {
        restoreFormData(savedData);
        document.body.removeChild(recoveryModal);
        
        // Show success message
        const indicator = document.getElementById('auto-save-indicator');
        if (indicator) {
            indicator.textContent = 'Progress Restored!';
            indicator.className = 'auto-save-indicator saved';
            setTimeout(() => {
                indicator.textContent = '';
                indicator.className = 'auto-save-indicator';
            }, 4000);
        }
    };
}

function restoreFormData(savedData) {
    // Restore section data if available
    if (savedData.SectionData) {
        Object.assign(sectionFormData, savedData.SectionData);
    }
    
    // Restore form field values
    Object.keys(savedData).forEach(key => {
        if (key === 'AutoSave' || key === 'Timestamp' || key === 'SectionData') return;
        
        // Handle radio buttons and checkboxes
        const radioElements = document.querySelectorAll(`input[name="${key}"][type="radio"]`);
        const checkboxElements = document.querySelectorAll(`input[name="${key}"][type="checkbox"]`);
        
        if (radioElements.length > 0) {
            // Handle radio buttons
            radioElements.forEach(radio => {
                radio.checked = (radio.value === savedData[key]);
            });
        } else if (checkboxElements.length > 0) {
            // Handle checkboxes
            const savedValues = Array.isArray(savedData[key]) ? savedData[key] : [savedData[key]];
            checkboxElements.forEach(checkbox => {
                checkbox.checked = savedValues.includes(checkbox.value);
            });
        } else {
            // Handle regular input fields
            const element = document.querySelector(`[name="${key}"]`);
            if (element) {
                element.value = savedData[key];
            }
        }
    });
    
    // Restore current section data if we're in a section
    const currentSection = document.querySelector('.assessment-section:not([style*="display: none"])');
    if (currentSection && savedData.SectionData) {
        const sectionId = currentSection.id;
        restoreSectionData(sectionId);
    }
    
    // Trigger change events to update any dependent UI
    const form = document.getElementById('assessment-form');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
        });
    }
    
    console.log('Assessment progress restored from local storage');
}

function addManualRecoveryButton() {
    const assessmentTitle = document.querySelector('input[name="AssessmentTitle"]')?.value || 'Assessment';
    const savedData = localStorage.getItem(`assessment-${assessmentTitle}`);
    
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            const savedTime = new Date(parsedData.Timestamp);
            const timeDiff = Date.now() - savedTime.getTime();
            const hoursDiff = timeDiff / (1000 * 60 * 60);
            
            // Only show manual recovery if saved within last 24 hours
            if (hoursDiff < 24) {
                const recoveryBtn = document.createElement('button');
                recoveryBtn.type = 'button';
                recoveryBtn.className = 'nav-btn utility-btn';
                recoveryBtn.innerHTML = '🔄 Load Saved Progress';
                recoveryBtn.style.marginLeft = '10px';
                recoveryBtn.title = `Saved ${savedTime.toLocaleString()}`;
                
                recoveryBtn.onclick = () => {
                    if (confirm(`Load your saved progress from ${savedTime.toLocaleString()}?`)) {
                        restoreFormData(parsedData);
                        
                        // Show success message
                        const indicator = document.getElementById('auto-save-indicator');
                        if (indicator) {
                            indicator.textContent = 'Progress Restored!';
                            indicator.className = 'auto-save-indicator saved';
                            setTimeout(() => {
                                indicator.textContent = '';
                                indicator.className = 'auto-save-indicator';
                            }, 4000);
                        }
                    }
                };
                
                // Add to section controls
                const sectionControls = document.querySelector('.section-controls');
                if (sectionControls) {
                    sectionControls.insertBefore(recoveryBtn, sectionControls.firstChild);
                }
            }
        } catch (error) {
            console.warn('Failed to parse saved assessment data for manual recovery:', error);
        }
    }
}
