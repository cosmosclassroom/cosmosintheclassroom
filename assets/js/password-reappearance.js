// Password Screen Reappearance for Assessment Submissions

// Hook into the submitAssessment function to show password screen after submission
(function() {
  // Keep reference to the original submitAssessment function
  const originalSubmitAssessment = window.submitAssessment;
  
  // Override with our function that will call the original but add password reappearance
  window.submitAssessment = async function(formData) {
    // Call the original function and get its result
    const result = await originalSubmitAssessment(formData);
    
    // After successful submission, show password screen
    if (result.success && typeof window.showPasswordAfterSubmission === 'function') {
      console.log("Setting up password reappearance after submission");
      setTimeout(function() {
        console.log("Showing password screen");
        window.showPasswordAfterSubmission();
      }, 2000);
    }
    
    // Return the original result
    return result;
  };
  
  console.log("Password reappearance extension loaded");
})();