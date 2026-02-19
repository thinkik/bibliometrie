(() => {
  const table = document.querySelector('#source-table');
  if (!table) return;

  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const sortButtons = Array.from(document.querySelectorAll('.sort-button'));
  const filterCheckboxes = Array.from(document.querySelectorAll('.source-filters input[type="checkbox"]'));
  const noResultsMessage = document.querySelector('#no-results-message');

  let currentSortKey = null;
  let sortDirection = 'asc';

  function applyFilters() {
    const activeFilters = filterCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.dataset.filter);

    let visibleRows = 0;
    rows.forEach((row) => {
      const access = row.dataset.access;
      const isVisible = activeFilters.length === 0 || activeFilters.includes(access);
      row.hidden = !isVisible;
      if (isVisible) visibleRows += 1;
    });

    if (noResultsMessage) {
      noResultsMessage.hidden = visibleRows > 0;
    }
  }

  function sortRowsByKey(sortKey) {
    const visibleRows = rows.filter((row) => !row.hidden);
    const sortedRows = [...visibleRows].sort((rowA, rowB) => {
      const valueA = Number(rowA.dataset[sortKey]);
      const valueB = Number(rowB.dataset[sortKey]);
      return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    });

    sortedRows.forEach((row) => tbody.appendChild(row));
  }

  function updateSortButtonState(activeButton) {
    sortButtons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle('is-active', isActive);
      if (!isActive) {
        button.removeAttribute('data-direction');
      }
    });

    activeButton.dataset.direction = sortDirection;
  }

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const sortKey = button.dataset.sortKey;
      if (!sortKey) return;

      if (currentSortKey === sortKey) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        currentSortKey = sortKey;
        sortDirection = 'asc';
      }

      sortRowsByKey(sortKey);
      updateSortButtonState(button);
    });
  });

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      applyFilters();
      if (currentSortKey) {
        sortRowsByKey(currentSortKey);
      }
    });
  });

  applyFilters();
})();
