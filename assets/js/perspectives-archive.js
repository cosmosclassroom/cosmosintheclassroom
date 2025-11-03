(function(){
  const PER_PAGE = 10;
  const container = document.querySelector('.insights-list .container');
  if(!container) return;
  const cards = Array.from(container.querySelectorAll('.insight-card'));
  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const btnOlder = document.getElementById('older-posts');
  const btnNewer = document.getElementById('newer-posts');
  const pageStatus = document.getElementById('page-status');

  let activeFilter = 'all';
  let currentPage = 1;
  let filtered = cards.slice();

  function applyFilter() {
    if (activeFilter === 'all') {
      filtered = cards.slice();
    } else {
      filtered = cards.filter(card => {
        const tags = (card.getAttribute('data-tags') || '').split(/\s+/);
        return tags.includes(activeFilter);
      });
    }
    currentPage = 1;
    render();
  }

  function render(){
    // Hide all
    cards.forEach(c => c.style.display = 'none');
    // Pagination calculations
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    const pageItems = filtered.slice(start, end);

    pageItems.forEach(c => c.style.display = 'block');

    // Controls
    if (pageStatus) {
      pageStatus.textContent = `Page ${currentPage} of ${totalPages}`;
    }
    if (btnNewer) btnNewer.disabled = currentPage <= 1;
    if (btnOlder) btnOlder.disabled = currentPage >= totalPages;
  }

  // Event handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = (btn.getAttribute('data-filter') || 'all').toLowerCase();
      applyFilter();
    });
  });

  if (btnOlder) btnOlder.addEventListener('click', () => {
    currentPage += 1;
    render();
  });

  if (btnNewer) btnNewer.addEventListener('click', () => {
    currentPage = Math.max(1, currentPage - 1);
    render();
  });

  // Initial render
  applyFilter();
})();
