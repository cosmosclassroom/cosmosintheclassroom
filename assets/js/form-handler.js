document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('consultation-form');
  var consultBtn = document.getElementById('request-consult-btn');
  var confirmation = document.getElementById('confirmation-message');

  if (form && consultBtn) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Provide immediate feedback to the user
      consultBtn.disabled = true;
      consultBtn.textContent = 'Submitting...';

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          form.style.display = 'none';
          if (confirmation) {
            confirmation.style.display = 'block';
          }
          if (window.gtag) {
            gtag('event', 'consultation_requested');
          }
        } else {
          // Handle server errors (e.g., 500)
          consultBtn.disabled = false;
          consultBtn.textContent = 'Schedule Consultation';
          alert('There was a problem with your submission. Please try again.');
        }
      } catch (error) {
        // Handle network errors
        console.error('Form submission error:', error);
        consultBtn.disabled = false;
        consultBtn.textContent = 'Schedule Consultation';
        alert('A network error occurred. Please check your connection and try again.');
      }
    });
  }

  if (consultBtn) {
    consultBtn.addEventListener('click', function() {
      if (window.gtag) {
        gtag('event', 'consultation_started');
      }
    });
  }
});
