document.addEventListener("DOMContentLoaded", () => {
  const progressWrapper = document.querySelector("[data-module-progress]");

  if (!progressWrapper) {
    return;
  }

  const moduleId = progressWrapper.dataset.moduleId;
  const progressBar = progressWrapper.querySelector("progress");
  const progressValue = progressWrapper.querySelector("[data-module-progress-value]");
  const detailsItems = Array.from(document.querySelectorAll("main details[data-progress-id]"));

  if (!moduleId || !progressBar) {
    return;
  }

  const storageKey = `moduleProgress:${moduleId}`;
  const stored = localStorage.getItem(storageKey);
  const openedIds = new Set(stored ? JSON.parse(stored) : []);
  const totalSections = detailsItems.length;

  const updateProgress = () => {
    const percent = totalSections === 0 ? 0 : Math.round((openedIds.size / totalSections) * 100);
    progressBar.value = percent;
    progressBar.textContent = `${percent}%`;

    if (progressValue) {
      progressValue.textContent = `${percent}%`;
    }
  };

  updateProgress();

  detailsItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) {
        return;
      }

      const id = item.dataset.progressId;

      if (!id) {
        return;
      }

      if (!openedIds.has(id)) {
        openedIds.add(id);
        localStorage.setItem(storageKey, JSON.stringify(Array.from(openedIds)));
      }

      updateProgress();
    });
  });
});
