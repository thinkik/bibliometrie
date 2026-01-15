(() => {
  const STORAGE_KEY = "bibliometrie-role";
  const DEFAULT_ROLE = "Bibliothek";

  const getStoredRole = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  };

  const setStoredRole = (role) => {
    try {
      localStorage.setItem(STORAGE_KEY, role);
    } catch (error) {
      // Ignore storage errors (e.g. privacy mode)
    }
  };

  const updateHints = (container, role) => {
    const hints = container.querySelectorAll(".role-hint");
    hints.forEach((hint) => {
      const isMatch = hint.dataset.role === role;
      hint.hidden = !isMatch;
    });
  };

  const updateButtons = (container, role) => {
    const buttons = container.querySelectorAll(".role-toggle-button");
    buttons.forEach((button) => {
      const isActive = button.dataset.role === role;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive.toString());
    });
  };

  const initializeToggle = (container) => {
    const storedRole = getStoredRole();
    const initialRole = storedRole || DEFAULT_ROLE;

    updateButtons(container, initialRole);
    updateHints(container, initialRole);

    container.addEventListener("click", (event) => {
      const button = event.target.closest(".role-toggle-button");
      if (!button || !container.contains(button)) {
        return;
      }

      const role = button.dataset.role;
      if (!role) {
        return;
      }

      setStoredRole(role);
      updateButtons(container, role);
      updateHints(container, role);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".module-role-panel");
    containers.forEach((container) => initializeToggle(container));
  });
})();
