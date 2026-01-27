document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-dialog]");
  const closeButtons = document.querySelectorAll("[data-dialog-close]");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dialogId = button.dataset.dialog;
      const dialog = document.getElementById(dialogId);
      if (!dialog) {
        return;
      }
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (!dialog) {
        return;
      }
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    });
  });

  document.querySelectorAll("dialog.exercise-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        if (typeof dialog.close === "function") {
          dialog.close();
        } else {
          dialog.removeAttribute("open");
        }
      }
    });
  });
});
