document.addEventListener("DOMContentLoaded", () => {
  const exerciseItems = Array.from(document.querySelectorAll("details.exercise-item"));

  if (exerciseItems.length === 0) {
    return;
  }

  exerciseItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) {
        return;
      }

      exerciseItems.forEach((other) => {
        if (other !== item && other.open) {
          other.open = false;
        }
      });
    });
  });
});
