// Markdown Assessment JS Integration

// Track script loading for debugging
if (window.markScriptLoaded) {
  window.markScriptLoaded('md');
}

// This function will be called when the script is loaded
function initAssessmentMd() {
  console.log('Assessment MD script loaded');
  console.log('submitAssessment function available:', typeof submitAssessment === 'function');
  console.log('autoSave function available:', typeof autoSave === 'function');
  
  const form = document.getElementById('assessment-form');
  if (!form) {
    console.error('Assessment form not found!');
    return;
  }

  console.log('Setting up assessment functionality');
  
  // Process any form fields that need interactive elements
  setupFormInteractivity();

  // Restore saved progress if available
  if (typeof checkForSavedProgress === 'function') {
    checkForSavedProgress();
  } else {
    console.warn('checkForSavedProgress function not found');
  }

  // Auto-save setup (interval from config)
  if (typeof autoSave === 'function' && typeof ASSESSMENT_CONFIG !== 'undefined' && ASSESSMENT_CONFIG.autoSaveInterval > 0) {
    console.log('Setting up auto-save with interval:', ASSESSMENT_CONFIG.autoSaveInterval);
    setInterval(autoSave, ASSESSMENT_CONFIG.autoSaveInterval);
  } else {
    console.warn('Auto-save not set up. Missing dependencies.');
  }

  // Manual save button
  const saveBtn = document.querySelector('.save-progress');
  if (saveBtn && typeof autoSave === 'function') {
    console.log('Setting up save button');
    saveBtn.addEventListener('click', function() {
      console.log('Save button clicked');
      autoSave();
    });
  }

  // Form submission handler
  form.addEventListener('submit', function(e) {
    console.log('Form submission started');
    e.preventDefault();
    const formData = new FormData(form);
    
    // Create submission status indicator
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'submission-status';
    statusIndicator.style.padding = '15px';
    statusIndicator.style.margin = '15px 0';
    statusIndicator.style.borderRadius = '5px';
    statusIndicator.style.textAlign = 'center';
    
    // Insert status indicator at the top of the form
    form.insertBefore(statusIndicator, form.firstChild);
    
    // Show submitting status
    statusIndicator.textContent = 'Submitting assessment...';
    statusIndicator.style.backgroundColor = '#fff3cd';
    statusIndicator.style.color = '#856404';
    statusIndicator.style.border = '1px solid #ffeeba';
    
    // Disable form elements during submission
    Array.from(form.elements).forEach(el => el.disabled = true);
    
    if (typeof submitAssessment === 'function') {
      console.log('Calling submitAssessment function');
      submitAssessment(formData)
        .then(result => {
          console.log('Submission successful:', result);
          
          // Show success message
          statusIndicator.textContent = result.message || 'Assessment submitted successfully!';
          statusIndicator.style.backgroundColor = '#d4edda';
          statusIndicator.style.color = '#155724';
          statusIndicator.style.border = '1px solid #c3e6cb';
          
          // Keep form disabled after successful submission
        })
        .catch(err => {
          console.error('Submission error:', err);
          
          // Show error message
          statusIndicator.textContent = 'Submission failed: ' + (err.message || 'Unknown error');
          statusIndicator.style.backgroundColor = '#f8d7da';
          statusIndicator.style.color = '#721c24';
          statusIndicator.style.border = '1px solid #f5c6cb';
          
          // Re-enable form elements to allow resubmission
          Array.from(form.elements).forEach(el => el.disabled = false);
        });
    } else {
      console.error('submitAssessment function not available');
      
      // Show error message
      statusIndicator.textContent = 'Submission functionality is not available. Please refresh the page and try again.';
      statusIndicator.style.backgroundColor = '#f8d7da';
      statusIndicator.style.color = '#721c24';
      statusIndicator.style.border = '1px solid #f5c6cb';
      
      // Re-enable form elements
      Array.from(form.elements).forEach(el => el.disabled = false);
    }
  });

  // Progress tracking
  if (typeof updateProgress === 'function') {
    document.addEventListener('input', updateProgress);
    document.addEventListener('change', updateProgress);
  }
  
  console.log('Assessment MD initialization complete');
}

// Function to set up interactive elements
function setupFormInteractivity() {
  console.log('Setting up form interactivity');
  
  // Make checkboxes interactive
  document.querySelectorAll('.task-list-item-checkbox').forEach(checkbox => {
    checkbox.removeAttribute('disabled');
    checkbox.name = 'question_option';
    checkbox.classList.add('interactive-checkbox');
    console.log('Made checkbox interactive:', checkbox);
  });
  
  // Process numerical answers
  processAnswerFields();
  
  // Process unit selection fields
  processUnitSelections();
  
  // Render MathJax if available
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise().catch(function(err) {
      console.error('MathJax error:', err);
    });
  }
}

// Process answer fields
function processAnswerFields() {
  // Find paragraphs containing "Answer: [number]"
  const answerRegex = /Answer:\s*\[([\d\.]+)\]\s*([a-zA-Z0-9\/²³°\s]+)?/i;
  
  document.querySelectorAll('p').forEach(p => {
    if (p.innerHTML.includes('Answer:') && p.innerHTML.includes('[') && p.innerHTML.includes(']')) {
      console.log('Found answer field:', p.innerHTML);
      
      // Extract the answer value and unit
      const answerMatch = p.innerHTML.match(answerRegex);
      if (answerMatch) {
        const correctValue = answerMatch[1];
        const unit = answerMatch[2] ? answerMatch[2].trim() : '';
        
        console.log('Extracted answer:', correctValue, 'unit:', unit);
        
        // Replace the [number] pattern with an input field
        p.innerHTML = p.innerHTML.replace(
          /\[[\d\.]+\]/,
          '<input type="number" step="any" class="answer-field" name="numerical_answer" placeholder="Enter number">'
        );
        
        console.log('Replaced with input field');
      }
    }
  });
}

// Process unit selections
function processUnitSelections() {
  document.querySelectorAll('p').forEach(paragraph => {
    // Look for text content that matches our pattern, avoiding MathJax elements
    if (paragraph.textContent.includes('[') && paragraph.textContent.includes(']') && 
        paragraph.nextElementSibling && paragraph.nextElementSibling.tagName === 'UL') {
      
      console.log('Found unit selection:', paragraph.textContent);
      
      try {
        // Get the text content before processing
        const originalText = paragraph.textContent;
        // More permissive regex that allows spaces, symbols, and × character
        const unitMatch = originalText.match(/\[([^[\]]+)\]/);
        
        if (unitMatch) {
          const correctUnit = unitMatch[1];
          const unitList = paragraph.nextElementSibling;
          const units = Array.from(unitList.querySelectorAll('li')).map(li => li.textContent.trim());
          
          console.log('Extracted units:', units, 'correct:', correctUnit);
          
          // Create select element
          const select = document.createElement('select');
          select.name = 'unit_selection';
          select.className = 'unit-select';
          
          // Add options from the list
          units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit;
            select.appendChild(option);
          });
          
          // Create wrapper
          const wrapper = document.createElement('div');
          wrapper.className = 'unit-selection-field';
          wrapper.innerHTML = paragraph.innerHTML.replace(/\[([^[\]]+)\]/, '');
          wrapper.appendChild(select);
          
          // Replace original paragraph and list with our select
          paragraph.parentNode.replaceChild(wrapper, paragraph);
          unitList.remove();
          
          console.log('Replaced with select field');
        }
      } catch (error) {
        console.error('Error processing unit selection:', error);
      }
    }
  });
}

// Call init function when script is loaded
initAssessmentMd();
