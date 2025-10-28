// Form submission
async function submitAssessment(formData) {
// Track script loading for debugging
if (window.markScriptLoaded) {
    window.markScriptLoaded('submit');
}    // Check if running on localhost for development
    // Allow ?livetest=1 query param to force live submission for testing
    const urlParams = new URLSearchParams(window.location.search);
    const forceLive = urlParams.get('livetest') === '1';
    const isLocalDevelopment = !forceLive && (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost');
    
    if (isLocalDevelopment) {
        // Simulate submission for local development
        console.log('Local development mode - simulating submission');
        console.log('Form data would be submitted:', Object.fromEntries(formData.entries()));
        
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return { success: true, message: 'Simulated submission for local development' };
    }
    
    console.log('🔴 LIVE SUBMISSION MODE ACTIVE - Will POST to backend');
    
    if (!ASSESSMENT_CONFIG.webAppUrl) {
        throw new Error('Submission endpoint not configured');
    }
    
    // Convert FormData to object, handling multiple values (checkboxes)
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
    
    // Add metadata for backend routing
    const metadata = document.getElementById('assessment-metadata') || document.getElementById('activity-metadata');
    console.log('🔍 [assessment-submit] DEBUG: metadata element:', metadata);
    if (metadata) {
        data.ResourceID = metadata.getAttribute('data-resource-id') || 'unknown';
        data.ContentType = metadata.getAttribute('data-content-type') || 'assessment';
        data.Course = metadata.getAttribute('data-course') || 'unknown';
        console.log('🔍 [assessment-submit] DEBUG: Added ResourceID:', data.ResourceID);
        console.log('🔍 [assessment-submit] DEBUG: Added ContentType:', data.ContentType);
        console.log('🔍 [assessment-submit] DEBUG: Added Course:', data.Course);
    } else {
        console.warn('🔍 [assessment-submit] DEBUG: No metadata element found!');
    }
    
    data.SubmissionTime = new Date().toISOString();
    
    try {
        console.log('🚀 Starting submission to:', ASSESSMENT_CONFIG.webAppUrl);
        console.log('📤 Sending data:', data);
        
        const response = await fetch(ASSESSMENT_CONFIG.webAppUrl, {
            method: 'POST',
            headers: { 
                'Content-Type': 'text/plain;charset=utf-8'  // CORS-friendly: avoids preflight
            },
            body: JSON.stringify(data)
        });
        
        console.log('📡 Response received:', response);
        console.log('📊 Response status:', response.status);
        console.log('✅ Response ok:', response.ok);
        
        if (!response.ok) {
            throw new Error(`Submission failed: ${response.status}`);
        }
        
        console.log('🔄 Parsing JSON response...');
        const result = await response.json();
        console.log('📋 Parsed result:', result);
        
        return result;
    } catch (error) {
        console.error('❌ Full error details:', error);
        console.error('🔍 Error type:', error.name);
        console.error('💬 Error message:', error.message);
        
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            console.error('🚨 CORS troubleshooting tips:');
            console.error('1. Verify Google Apps Script deployed with "Who has access: Anyone"');
            console.error('2. Try creating a new deployment instead of updating existing one');
            console.error('3. Check if webAppUrl is the latest deployment URL');
            console.error('4. Current URL:', ASSESSMENT_CONFIG.webAppUrl);
            throw new Error('Unable to submit assessment. This may be due to CORS restrictions. Please contact your instructor if the problem persists.');
        }
        throw error;
    }
}

// Fallback submission dialog when main submission fails
function showFallbackSubmissionDialog(form, errorMessage) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.SubmissionTime = new Date().toISOString();
    
    // Create a formatted submission summary
    const submissionText = Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    
    // Create modal dialog
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.7); z-index: 10000; display: flex;
        align-items: center; justify-content: center;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: white; border-radius: 8px; padding: 20px;
        max-width: 600px; max-height: 80vh; overflow-y: auto;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    const studentName = data.StudentName || 'Student';
    const assessmentTitle = data.AssessmentTitle || 'Assessment';
    
    dialog.innerHTML = `
        <h3 style="color: #dc3545; margin-top: 0;">Submission Failed</h3>
        <p><strong>Error:</strong> ${errorMessage}</p>
        <p>Don't worry! Your answers have been saved. Please choose one of these options:</p>
        
        <div style="margin: 20px 0;">
            <button id="emailFallback" style="background: #007bff; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">
                📧 Email Your Answers
            </button>
            <button id="copyFallback" style="background: #28a745; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">
                📋 Copy to Clipboard
            </button>
            <button id="downloadFallback" style="background: #17a2b8; color: white; border: none; padding: 10px 20px; margin: 5px; border-radius: 5px; cursor: pointer;">
                💾 Download as File
            </button>
        </div>
        
        <div style="margin: 20px 0;">
            <label for="submissionData" style="display: block; margin-bottom: 5px; font-weight: bold;">Your Submission Data:</label>
            <textarea id="submissionData" readonly style="width: 100%; height: 200px; font-family: monospace; font-size: 12px; border: 1px solid #ccc; padding: 10px;">${submissionText}</textarea>
        </div>
        
        <div style="text-align: right;">
            <button id="closeFallback" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                Close
            </button>
        </div>
    `;
    
    modal.appendChild(dialog);
    document.body.appendChild(modal);
    
    // Email fallback
    document.getElementById('emailFallback').addEventListener('click', () => {
        const subject = encodeURIComponent(`${assessmentTitle} Submission - ${studentName}`);
        const body = encodeURIComponent(`Assessment Submission\n\n${submissionText}`);
        const teacherEmail = 'teacher@school.edu'; // Will be configurable via Jekyll
        window.open(`mailto:${teacherEmail}?subject=${subject}&body=${body}`);
    });
    
    // Copy to clipboard
    document.getElementById('copyFallback').addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(submissionText);
            alert('Submission data copied to clipboard!');
        } catch (err) {
            // Fallback for older browsers
            document.getElementById('submissionData').select();
            document.execCommand('copy');
            alert('Submission data copied to clipboard!');
        }
    });
    
    // Download as file
    document.getElementById('downloadFallback').addEventListener('click', () => {
        const blob = new Blob([submissionText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${assessmentTitle}-${studentName}-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    
    // Close dialog
    document.getElementById('closeFallback').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}
