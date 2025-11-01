/**
 * Accordion Toggle Script
 * Handles collapsible sections on services page
 */

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.accordion-icon');
  const item = button.closest('.accordion-item, .process-step-collapsible');
  
  // Toggle active state
  const isActive = item.classList.contains('active');
  
  if (isActive) {
    item.classList.remove('active');
    content.style.maxHeight = null;
    icon.style.transform = 'rotate(0deg)';
  } else {
    item.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}

// Optional: Open first service accordion by default
document.addEventListener('DOMContentLoaded', function() {
  const firstAccordion = document.querySelector('.services-accordion .accordion-header');
  if (firstAccordion) {
    toggleAccordion(firstAccordion);
  }
});
