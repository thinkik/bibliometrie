const MODULE_TABLE_SELECTOR = ".module-table tbody";

const stripModulePrefix = (title) => {
  const match = title.match(/^Modul\s+\d+:\s*(.+)$/i);
  return match ? match[1] : title;
};

const titleToModuleNumber = (title, fallbackIndex) => {
  const match = title.match(/^Modul\s+(\d+):/i);
  if (match) {
    return Number.parseInt(match[1], 10);
  }

  return fallbackIndex + 1;
};

const toModulePath = (path, moduleNumber) => {
  if (/^modul-\d{2}\.html$/i.test(path || "")) {
    return path;
  }

  return `modul-${String(moduleNumber).padStart(2, "0")}.html`;
};

const renderModules = (modules) => {
  const tableBody = document.querySelector(MODULE_TABLE_SELECTOR);
  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = "";

  modules.forEach((module, index) => {
    const moduleNumber = titleToModuleNumber(module.title, index);
    const moduleName = stripModulePrefix(module.title);
    const description = module.summary || module.learningGoals?.[0] || "";
    const difficulty = module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1);
    const readingTime = `${module.readingTimeMinutes} Minuten`;
    const modulePath = toModulePath(module.path, moduleNumber);

    const row = document.createElement("tr");

    const numberCell = document.createElement("th");
    numberCell.scope = "row";
    numberCell.dataset.label = "Modul";
    numberCell.dataset.originalText = String(moduleNumber);
    numberCell.textContent = String(moduleNumber);
    row.appendChild(numberCell);

    const titleCell = document.createElement("td");
    titleCell.dataset.label = "Modulname";
    titleCell.dataset.originalText = moduleName;
    titleCell.textContent = moduleName;
    row.appendChild(titleCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.dataset.label = "Kurzbeschreibung";
    descriptionCell.dataset.originalText = description;
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);

    const difficultyCell = document.createElement("td");
    difficultyCell.dataset.label = "Schwierigkeit";
    difficultyCell.dataset.originalText = difficulty;
    difficultyCell.textContent = difficulty;
    row.appendChild(difficultyCell);

    const readingTimeCell = document.createElement("td");
    readingTimeCell.dataset.label = "Lesezeit";
    readingTimeCell.dataset.originalText = readingTime;
    readingTimeCell.textContent = readingTime;
    row.appendChild(readingTimeCell);

    const startCell = document.createElement("td");
    startCell.dataset.label = "Start";

    const startLink = document.createElement("a");
    startLink.className = "start-button";
    startLink.href = modulePath;
    startLink.setAttribute("aria-label", `Modul ${moduleNumber} starten`);
    startLink.dataset.originalText = "Start";
    startLink.textContent = "Start";
    startCell.appendChild(startLink);

    row.appendChild(startCell);
    tableBody.appendChild(row);
  });

  if (typeof window.refreshTranslations === "function") {
    window.refreshTranslations();
  }
};

fetch("./data/course.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  })
  .then((courseData) => {
    renderModules(courseData.modules || []);
  })
  .catch((error) => {
    console.error("Modules could not be loaded", error);
  });
