// Debug version of assessment-submit.js with enhanced logging
// Replace the existing assessment-submit.js with this file for debugging

// Form submission
async function submitAssessment(formData) {
    // Track script loading for debugging
    if (window.markScriptLoaded) {
        window.markScriptLoaded('submit');
    }
    
    // DEBUGGING: Log form data entries
    console.log('DEBUG: Form Data Entries:');
    for (const [key, value] of formData.entries()) {
        console.log(`DEBUG: ${key} = ${value}`);
    }
    
    // Check if running on localhost for development
    const isLocalDevelopment = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
    
    // Convert FormData to object and add submission time
    const data = Object.fromEntries(formData.entries());
    data.SubmissionTime = new Date().toISOString();
    
    // DEBUGGING: Log the data object
    console.log('DEBUG: Data object to be sent:', data);
    
    // If in development mode, simulate submission
    if (isLocalDevelopment) {
        console.log('Local development mode - simulating submission');
        return { success: true, message: 'Simulated submission for local development' };
    }
    
    if (!ASSESSMENT_CONFIG.webAppUrl) {
        throw new Error('Submission endpoint not configured');
    }
    
    try {
        console.log('🚀 Starting submission to:', ASSESSMENT_CONFIG.webAppUrl);
        
        // DEBUGGING: Create a debug data object with metadata
        const debugData = {
            ...data,
            DEBUG_INFO: {
                browserInfo: navigator.userAgent,
                screenSize: `${window.innerWidth}x${window.innerHeight}`,
                timestamp: Date.now(),
                formKeys: Object.keys(data)
            }
        };
        
        // Convert to JSON string
        const jsonData = JSON.stringify(debugData);
        console.log('📤 Sending JSON data:', jsonData);
        console.log('📤 JSON data length:', jsonData.length);
        
        // Send the data
        const response = await fetch(ASSESSMENT_CONFIG.webAppUrl, {
            method: 'POST',
            headers: { 
                'Content-Type': 'text/plain;charset=utf-8'  // CORS-friendly: avoids preflight
            },
            body: jsonData
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
        
        // Create and display debug information on the page
        const debugInfo = document.createElement('div');
        debugInfo.style.margin = '20px';
        debugInfo.style.padding = '20px';
        debugInfo.style.border = '1px solid #ccc';
        debugInfo.style.backgroundColor = '#f9f9f9';
        debugInfo.innerHTML = `
            <h3>Form Submission Debug Info</h3>
            <p>Data sent to server:</p>
            <pre>${JSON.stringify(data, null, 2)}</pre>
            <p>Response from server:</p>
            <pre>${JSON.stringify(result, null, 2)}</pre>
        `;
        document.body.appendChild(debugInfo);
        
        return result;
    } catch (error) {
        console.error('❌ Full error details:', error);
        console.error('🔍 Error type:', error.name);
        console.error('💬 Error message:', error.message);
        
        // Create error info display
        const errorInfo = document.createElement('div');
        errorInfo.style.margin = '20px';
        errorInfo.style.padding = '20px';
        errorInfo.style.border = '1px solid #f88';
        errorInfo.style.backgroundColor = '#fee';
        errorInfo.innerHTML = `
            <h3>Form Submission Error</h3>
            <p>Error type: ${error.name}</p>
            <p>Error message: ${error.message}</p>
            <p>Data that was being sent:</p>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
        document.body.appendChild(errorInfo);
        
        throw error;
    }
}

// Make the function available globally
window.submitAssessment = submitAssessment;