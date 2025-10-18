/* public/website/assets/js/focus-mode.js */

document.addEventListener('DOMContentLoaded', function() {
    const focusToggle = document.getElementById('focus-mode-toggle');
    const body = document.body;

    if (focusToggle) {
        // Check for saved state in localStorage
        if (localStorage.getItem('focusMode') === 'true') {
            body.classList.add('focus-mode-active');
            focusToggle.checked = true;
        }

        focusToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('focus-mode-active');
                localStorage.setItem('focusMode', 'true');
            } else {
                body.classList.remove('focus-mode-active');
                localStorage.setItem('focusMode', 'false');
            }
        });
    }
});
