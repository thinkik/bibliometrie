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

  const initializeModuleTabs = () => {
    const tablist = document.querySelector(".module-tabs");
    if (!tablist) {
      return;
    }

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    if (tabs.length === 0) {
      return;
    }

    const panels = tabs
      .map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
      .filter(Boolean);

    const setActiveTab = (activeTab, { focus = true, updateHash = true } = {}) => {
      tabs.forEach((tab) => {
        const isActive = tab === activeTab;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive.toString());
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      panels.forEach((panel) => {
        const isActive = panel.id === activeTab.getAttribute("aria-controls");
        panel.hidden = !isActive;
      });

      if (focus) {
        activeTab.focus();
      }

      if (updateHash) {
        const targetId = activeTab.getAttribute("aria-controls");
        if (targetId) {
          history.replaceState(null, "", `#${targetId}`);
        }
      }
    };

    const activateById = (id, options) => {
      const match = tabs.find((tab) => tab.getAttribute("aria-controls") === id);
      if (match) {
        setActiveTab(match, options);
        return true;
      }
      return false;
    };

    const initialHash = window.location.hash.replace("#", "");
    if (!activateById(initialHash, { focus: false, updateHash: false })) {
      setActiveTab(tabs[0], { focus: false, updateHash: false });
    }

    tablist.addEventListener("click", (event) => {
      const tab = event.target.closest('[role="tab"]');
      if (!tab || !tablist.contains(tab)) {
        return;
      }
      setActiveTab(tab, { focus: false });
    });

    tablist.addEventListener("keydown", (event) => {
      const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
      if (currentIndex === -1) {
        return;
      }

      let nextIndex = null;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          nextIndex = (currentIndex + 1) % tabs.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      setActiveTab(tabs[nextIndex], { focus: true });
    });

    window.addEventListener("hashchange", () => {
      const targetId = window.location.hash.replace("#", "");
      activateById(targetId, { focus: false, updateHash: false });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".module-role-panel");
    containers.forEach((container) => initializeToggle(container));
    initializeModuleTabs();
  });
})();
