const ROLE_STORAGE_KEY = 'bibliometrieRole';
const DEFAULT_ROLE = 'bibliothek';

const roleLabels = {
  bibliothek: 'Bibliothek',
  'research-office': 'Research Office',
  forschende: 'Forschende',
};

const loadRole = () => {
  const storedRole = window.localStorage.getItem(ROLE_STORAGE_KEY);
  return storedRole && roleLabels[storedRole] ? storedRole : DEFAULT_ROLE;
};

const saveRole = (role) => {
  window.localStorage.setItem(ROLE_STORAGE_KEY, role);
};

const updateToggle = (toggle, role) => {
  toggle.querySelectorAll('[data-role]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.role === role);
  });
};

const renderHints = (container, role, hints) => {
  const roleTitle = roleLabels[role] ?? role;
  const roleHints = hints?.[role] ?? [];

  container.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = `Hinweise für ${roleTitle}`;
  container.appendChild(heading);

  if (!roleHints.length) {
    const empty = document.createElement('p');
    empty.className = 'hint-empty';
    empty.textContent = 'Keine Hinweise für diese Rolle verfügbar.';
    container.appendChild(empty);
    return;
  }

  const list = document.createElement('ul');
  list.className = 'hint-list';
  roleHints.forEach((hint) => {
    const item = document.createElement('li');
    item.textContent = hint;
    list.appendChild(item);
  });
  container.appendChild(list);
};

const setupModulePage = () => {
  const toggle = document.querySelector('[data-role-toggle]');
  const hintsElement = document.querySelector('[data-role-hints]');

  if (!toggle || !hintsElement) {
    return;
  }

  const hints = JSON.parse(hintsElement.textContent ?? '{}');
  let currentRole = loadRole();

  updateToggle(toggle, currentRole);
  renderHints(hintsElement, currentRole, hints);

  toggle.addEventListener('click', (event) => {
    const button = event.target.closest('[data-role]');
    if (!button) {
      return;
    }

    const nextRole = button.dataset.role;
    if (!nextRole || nextRole === currentRole) {
      return;
    }

    currentRole = nextRole;
    saveRole(currentRole);
    updateToggle(toggle, currentRole);
    renderHints(hintsElement, currentRole, hints);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setupModulePage();
});
