document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "bibliometrieExerciseProgress";
  const openButtons = document.querySelectorAll("[data-dialog]");
  const closeButtons = document.querySelectorAll("[data-dialog-close]");
  const taskButtons = Array.from(document.querySelectorAll('[data-dialog$="-task"]'));
  const progressText = document.getElementById("exercise-progress-text");
  const progressBar = document.getElementById("exercise-progress-bar");

  const progressState = loadProgress(storageKey);
  const totalTasks = taskButtons.length;

  taskButtons.forEach((button) => {
    const dialogId = button.dataset.dialog;
    const taskDialog = document.getElementById(dialogId);
    const solutionDialog = document.getElementById(dialogId.replace("-task", "-solution"));

    if (!taskDialog || !solutionDialog) {
      return;
    }

    const quizConfig = buildQuizConfig(dialogId, taskDialog, solutionDialog);
    attachQuiz(taskDialog, quizConfig, progressState, storageKey, () => {
      renderProgress(totalTasks, progressState, progressText, progressBar);
    });

    if (progressState.completed[dialogId]) {
      button.classList.add("exercise-link--done");
    }

    button.addEventListener("click", () => {
      const dialog = document.getElementById(dialogId);
      if (!dialog) {
        return;
      }
      showDialog(dialog);
    });
  });

  openButtons.forEach((button) => {
    if (button.dataset.dialog?.endsWith("-task")) {
      return;
    }

    button.addEventListener("click", () => {
      const dialogId = button.dataset.dialog;
      const dialog = document.getElementById(dialogId);
      if (!dialog) {
        return;
      }
      showDialog(dialog);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (!dialog) {
        return;
      }
      hideDialog(dialog);
    });
  });

  document.querySelectorAll("dialog.exercise-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        hideDialog(dialog);
      }
    });
  });

  renderProgress(totalTasks, progressState, progressText, progressBar);
});

function loadProgress(storageKey) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      completed: parsed.completed || {},
      correct: parsed.correct || {},
      score: Number.isFinite(parsed.score) ? parsed.score : 0,
    };
  } catch {
    return { completed: {}, correct: {}, score: 0 };
  }
}

function saveProgress(storageKey, state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderProgress(totalTasks, state, progressText, progressBar) {
  const completedCount = Object.keys(state.completed).length;
  const score = Object.values(state.correct).filter(Boolean).length;
  const completionPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  if (progressText) {
    progressText.textContent = `Bearbeitet: ${completedCount}/${totalTasks} · Punkte: ${score}/${totalTasks}`;
  }

  if (progressBar) {
    progressBar.max = 100;
    progressBar.value = completionPercent;
    progressBar.textContent = `${completionPercent}%`;
  }

  state.score = score;
}

function buildQuizConfig(dialogId, taskDialog, solutionDialog) {
  const options = Array.from(taskDialog.querySelectorAll(".exercise-dialog__body ul li"))
    .map((item) => item.textContent.trim())
    .filter(Boolean);
  const solutionText = extractSolutionText(solutionDialog);

  if (options.length > 0) {
    const correctOption = options.find((option) => textMatches(option, solutionText)) || solutionText;
    return {
      id: dialogId,
      type: "multiple-choice",
      solutionText,
      options,
      correctOption,
    };
  }

  return {
    id: dialogId,
    type: "free-text",
    solutionText,
    keywords: buildKeywords(solutionText),
  };
}

function attachQuiz(taskDialog, config, state, storageKey, onChange) {
  const body = taskDialog.querySelector(".exercise-dialog__body");
  if (!body || body.querySelector(".quiz-block")) {
    return;
  }

  const wrapper = document.createElement("section");
  wrapper.className = "quiz-block";
  wrapper.innerHTML = `<h4>Quiz</h4>`;

  const form = document.createElement("form");
  form.className = "quiz-form";

  if (config.type === "multiple-choice") {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Wähle die beste Antwort:";
    fieldset.appendChild(legend);

    config.options.forEach((option, index) => {
      const id = `${config.id}-option-${index}`;
      const label = document.createElement("label");
      label.className = "quiz-option";
      label.innerHTML = `<input type="radio" name="quiz-answer-${config.id}" id="${id}" value="${escapeHtml(option)}"> <span>${escapeHtml(option)}</span>`;
      fieldset.appendChild(label);
    });

    form.appendChild(fieldset);
  } else {
    const label = document.createElement("label");
    label.className = "quiz-free-text";
    label.innerHTML = `
      <span>Gib deine Antwort ein:</span>
      <textarea name="quiz-answer-${config.id}" rows="4" required></textarea>
    `;
    form.appendChild(label);
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "exercise-link";
  submitButton.textContent = "Antwort prüfen";
  form.appendChild(submitButton);

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const result = evaluateAnswer(form, config);
    if (result.missingAnswer) {
      feedback.textContent = "Bitte gib zuerst eine Antwort ein.";
      feedback.className = "quiz-feedback quiz-feedback--wrong";
      return;
    }

    feedback.textContent = result.correct
      ? "✅ Richtig! Gut gemacht."
      : `❌ Nicht ganz. Richtige Lösung: ${config.solutionText}`;
    feedback.className = result.correct ? "quiz-feedback quiz-feedback--correct" : "quiz-feedback quiz-feedback--wrong";

    state.completed[config.id] = true;
    state.correct[config.id] = result.correct;
    saveProgress(storageKey, state);

    const button = document.querySelector(`[data-dialog="${config.id}"]`);
    if (button) {
      button.classList.add("exercise-link--done");
    }

    onChange();
  });

  if (state.completed[config.id]) {
    feedback.textContent = state.correct[config.id]
      ? "Bereits korrekt gelöst."
      : `Bereits bearbeitet. Richtige Lösung: ${config.solutionText}`;
    feedback.className = state.correct[config.id] ? "quiz-feedback quiz-feedback--correct" : "quiz-feedback";
  }

  wrapper.appendChild(form);
  wrapper.appendChild(feedback);
  body.appendChild(wrapper);
}

function evaluateAnswer(form, config) {
  if (config.type === "multiple-choice") {
    const selected = form.querySelector('input[type="radio"]:checked');
    if (!selected) {
      return { missingAnswer: true, correct: false };
    }

    return { missingAnswer: false, correct: textMatches(selected.value, config.correctOption) };
  }

  const textarea = form.querySelector("textarea");
  const value = textarea?.value.trim() || "";
  if (!value) {
    return { missingAnswer: true, correct: false };
  }

  const normalized = normalizeText(value);
  const keywordHits = config.keywords.filter((keyword) => normalized.includes(keyword));
  const isCorrect = keywordHits.length >= Math.min(2, config.keywords.length) || textMatches(value, config.solutionText);

  return { missingAnswer: false, correct: isCorrect };
}

function extractSolutionText(solutionDialog) {
  const body = solutionDialog.querySelector(".exercise-dialog__body");
  if (!body) {
    return "";
  }

  const text = body.textContent.replace(/\s+/g, " ").trim();
  return text.replace(/^Lösung:\s*/i, "");
}

function buildKeywords(solutionText) {
  return normalizeText(solutionText)
    .split(" ")
    .filter((word) => word.length >= 5)
    .slice(0, 8);
}

function textMatches(firstText, secondText) {
  return normalizeText(firstText) === normalizeText(secondText);
}

function normalizeText(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function showDialog(dialog) {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function hideDialog(dialog) {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
