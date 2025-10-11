// Accessible, resilient dropdown navigation with hover-intent and outside-click handling
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const dropdowns = Array.from(nav.querySelectorAll('.dropdown'));
  const hoverCloseDelayMs = 200; // small delay prevents accidental close during pointer travel
  const closeTimers = new WeakMap();

  const setExpanded = (btn, expanded) => {
    if (btn) btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  };

  const openDropdown = (dd) => {
    const btn = dd.querySelector('.dropbtn');
    if (!dd.classList.contains('active')) {
      dd.classList.add('active');
      setExpanded(btn, true);
    }
    // cancel any pending close
    const t = closeTimers.get(dd);
    if (t) {
      clearTimeout(t);
      closeTimers.delete(dd);
    }
  };

  const closeDropdown = (dd) => {
    const btn = dd.querySelector('.dropbtn');
    if (dd.classList.contains('active')) {
      dd.classList.remove('active');
      setExpanded(btn, false);
    }
    const t = closeTimers.get(dd);
    if (t) {
      clearTimeout(t);
      closeTimers.delete(dd);
    }
  };

  const scheduleClose = (dd) => {
    // don't schedule multiple timers
    if (closeTimers.get(dd)) return;
    const timer = setTimeout(() => {
      closeDropdown(dd);
    }, hoverCloseDelayMs);
    closeTimers.set(dd, timer);
  };

  const closeAll = (except = null) => {
    dropdowns.forEach((d) => {
      if (d !== except) closeDropdown(d);
    });
  };

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.dropdown-content');
    if (!btn || !content) return;

    // Click to toggle (mouse and touch)
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('active');
      if (isOpen) {
        closeDropdown(dropdown);
      } else {
        closeAll(dropdown); // ensure only one open at a time
        openDropdown(dropdown);
      }
    });

    // Keep open when interacting inside; don't bubble to document
    content.addEventListener('click', (e) => e.stopPropagation());

    // Hover/focus intent: open on enter, close shortly after leaving
    dropdown.addEventListener('mouseenter', () => openDropdown(dropdown));
    dropdown.addEventListener('mouseleave', () => scheduleClose(dropdown));

    // Keyboard focus management
    dropdown.addEventListener('focusin', () => openDropdown(dropdown));
    dropdown.addEventListener('focusout', (e) => {
      // Only schedule close if focus moved completely outside this dropdown
      const stillInside = dropdown.contains(e.relatedTarget);
      if (!stillInside) scheduleClose(dropdown);
    });
  });

  // Close when clicking/tapping outside any dropdown
  const handleOutside = (e) => {
    if (!e.target.closest('.site-nav .dropdown')) {
      closeAll();
    }
  };
  document.addEventListener('click', handleOutside);
  document.addEventListener('touchstart', handleOutside, { passive: true });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
});