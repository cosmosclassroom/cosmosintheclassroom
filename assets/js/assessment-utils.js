// Track script loading for debugging
if (window.markScriptLoaded) {
    window.markScriptLoaded('utils');
}

// Simple password verification (client-side deterrent only)
async function verifyPassword(password) {
    console.log('Checking password:', password);
    console.log('Expected password:', ASSESSMENT_CONFIG.password);
    console.log('Expected hash:', ASSESSMENT_CONFIG.passwordHash);
    
    // Check plain text password first (preferred method)
    if (ASSESSMENT_CONFIG.password && ASSESSMENT_CONFIG.password.trim()) {
        const isMatch = password.trim() === ASSESSMENT_CONFIG.password.trim();
        console.log('Plain text match:', isMatch);
        return isMatch;
    }
    
    // Fallback to hash comparison for legacy assessments
    if (ASSESSMENT_CONFIG.passwordHash && ASSESSMENT_CONFIG.passwordHash.trim()) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        const isMatch = hashHex === ASSESSMENT_CONFIG.passwordHash;
        console.log('Hash match:', isMatch);
        return isMatch;
    }
    
    // No password protection
    console.log('No password protection');
    return true;
}

// Progress tracking
function updateProgress() {
    const questions = document.querySelectorAll('.question[data-required="true"], .calculation-question[data-required="true"]');
    let answered = 0;
    
    questions.forEach(question => {
        let questionAnswered = false;
        
        // Check for textarea answers
        const textarea = question.querySelector('textarea');
        if (textarea && textarea.value.trim()) {
            questionAnswered = true;
        }
        
        // Check for radio button answers
        const checkedRadios = question.querySelectorAll('input[type="radio"]:checked');
        if (checkedRadios.length > 0) {
            questionAnswered = true;
        }
        
        // Check for checkbox answers
        const checkedBoxes = question.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedBoxes.length > 0) {
            questionAnswered = true;
        }
        
        // Check for number/text input answers (for calculation questions)
        const numberInputs = question.querySelectorAll('input[type="number"], input[type="text"]');
        numberInputs.forEach(input => {
            if (input.value.trim()) {
                questionAnswered = true;
            }
        });
        
        // Check for select dropdown answers
        const selects = question.querySelectorAll('select');
        selects.forEach(select => {
            if (select.value && select.value !== '') {
                questionAnswered = true;
            }
        });
        
        if (questionAnswered) {
            answered++;
        }
    });
    
    const percentage = questions.length > 0 ? Math.round((answered / questions.length) * 100) : 0;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${percentage}% Complete`;
}

// Form validation
function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.field-error').forEach(error => error.textContent = '');
    document.querySelectorAll('.question').forEach(q => q.classList.remove('error'));
    
    // Validate required fields
    const studentName = document.getElementById('student-name');
    const classPeriod = document.getElementById('class-period');
    
    if (!studentName.value.trim()) {
        const errorEl = document.getElementById('student-name-error');
        if (errorEl) errorEl.textContent = 'Name is required';
        isValid = false;
    }
    
    if (!classPeriod.value) {
        const errorEl = document.getElementById('class-period-error');
        if (errorEl) errorEl.textContent = 'Please select a class period';
        isValid = false;
    }
    
    // Validate required questions
    document.querySelectorAll('.question[data-required="true"], .calculation-question[data-required="true"]').forEach(question => {
        let questionAnswered = false;
        
        // Check for textarea answers
        const textarea = question.querySelector('textarea');
        if (textarea && textarea.value.trim()) {
            questionAnswered = true;
        }
        
        // Check for radio button answers
        const checkedRadios = question.querySelectorAll('input[type="radio"]:checked');
        if (checkedRadios.length > 0) {
            questionAnswered = true;
        }
        
        // Check for checkbox answers
        const checkedBoxes = question.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedBoxes.length > 0) {
            questionAnswered = true;
        }
        
        // Check for number/text input answers (for calculation questions)
        const numberInputs = question.querySelectorAll('input[type="number"], input[type="text"]');
        numberInputs.forEach(input => {
            if (input.value.trim()) {
                questionAnswered = true;
            }
        });
        
        // Check for select dropdown answers
        const selects = question.querySelectorAll('select');
        selects.forEach(select => {
            if (select.value && select.value !== '') {
                questionAnswered = true;
            }
        });
        
        if (!questionAnswered) {
            question.classList.add('error');
            isValid = false;
        }
    });
    
    return isValid;
}
