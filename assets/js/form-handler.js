document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('consultation-form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          form.style.display = 'none';
          var confirmation = document.getElementById('confirmation-message');
          if (confirmation) {
            confirmation.style.display = 'block';
          }
          if (window.gtag) {
            gtag('event', 'consultation_requested');
          }
        }
      } catch (error) {
        console.error('Form submission error:', error);
      }
    });
  }

  var consultBtn = document.getElementById('request-consult-btn');
  if (consultBtn) {
    consultBtn.addEventListener('click', function() {
      if (window.gtag) {
        gtag('event', 'consultation_started');
      }
    });
  }
});
