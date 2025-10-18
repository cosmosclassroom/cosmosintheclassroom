/* public/website/src/assets/js/sticky-header.js */

document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    const mainContent = document.querySelector('.main-content');

    if (stickyHeader && mainContent) {
        const headerHeight = stickyHeader.offsetHeight;
        mainContent.style.paddingTop = `${headerHeight}px`;

        // Optional: Add a shadow when scrolling
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                stickyHeader.classList.add('scrolled');
            } else {
                stickyHeader.classList.remove('scrolled');
            }
        });
    }
});
