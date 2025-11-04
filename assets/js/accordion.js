/**
 * Accordion Toggle Script
 * Handles collapsible sections on services page
 */

// Initialize expandable cards on page load
document.addEventListener('DOMContentLoaded', function() {
  const expandableCards = document.querySelectorAll('.expandable-card');
  
  expandableCards.forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.service-details-content');
    
    if (header && content) {
      header.addEventListener('click', function() {
        const isExpanded = card.getAttribute('data-expanded') === 'true';
        
        if (isExpanded) {
          card.setAttribute('data-expanded', 'false');
          content.style.maxHeight = '0';
        } else {
          card.setAttribute('data-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });
});

// Legacy function for old accordion structure (kept for compatibility)
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

