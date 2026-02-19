const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const siteHeader = document.querySelector(".site-header");

const normalize = (value) =>
  value
    .toLocaleLowerCase("de-DE")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const snippetForQuery = (text, query) => {
  if (!text) {
    return "";
  }

  const normalizedText = normalize(text);
  const normalizedQuery = normalize(query);
  const index = normalizedText.indexOf(normalizedQuery);

  if (index < 0) {
    return `${text.slice(0, 140).trim()}…`;
  }

  const start = Math.max(0, index - 60);
  const end = Math.min(text.length, index + query.length + 80);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
};

const renderSearchResults = (list, results, query) => {
  list.innerHTML = "";

  if (!query) {
    list.hidden = true;
    return;
  }

  if (results.length === 0) {
    const empty = document.createElement("li");
    empty.className = "search-result-empty";
    empty.textContent = "Keine Treffer gefunden";
    list.append(empty);
    list.hidden = false;
    return;
  }

  results.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "search-result-item";

    const link = document.createElement("a");
    link.href = entry.url;

    const title = document.createElement("strong");
    title.textContent = `${entry.title} (${entry.category})`;

    const snippet = document.createElement("span");
    snippet.className = "search-result-snippet";
    snippet.textContent = snippetForQuery(entry.content, query);

    link.append(title, snippet);
    item.append(link);
    list.append(item);
  });

  list.hidden = false;
};

const initGlobalSearch = async () => {
  if (!siteHeader) {
    return;
  }

  const languageToggle = siteHeader.querySelector(".language-toggle");

  const container = document.createElement("div");
  container.className = "global-search";

  const input = document.createElement("input");
  input.type = "search";
  input.className = "global-search-input";
  input.placeholder = "Suche in Modulen, Übungen, Glossar, FAQ…";
  input.setAttribute("aria-label", "Globale Suche");
  input.autocomplete = "off";

  const results = document.createElement("ul");
  results.className = "global-search-results";
  results.hidden = true;

  container.append(input, results);
  if (languageToggle) {
    siteHeader.insertBefore(container, languageToggle);
  } else {
    siteHeader.append(container);
  }

  let indexEntries = [];
  try {
    const response = await fetch("data/search-index.json");
    if (!response.ok) {
      throw new Error("Search index could not be loaded");
    }
    const index = await response.json();
    indexEntries = Array.isArray(index.entries) ? index.entries : [];
  } catch (error) {
    input.disabled = true;
    input.placeholder = "Suche aktuell nicht verfügbar";
    return;
  }

  input.addEventListener("input", () => {
    const query = input.value.trim();
    if (query.length < 2) {
      renderSearchResults(results, [], "");
      return;
    }

    const normalizedQuery = normalize(query);
    const matches = indexEntries
      .filter((entry) => normalize(`${entry.title} ${entry.content}`).includes(normalizedQuery))
      .slice(0, 8);

    renderSearchResults(results, matches, query);
  });

  document.addEventListener("click", (event) => {
    if (!container.contains(event.target)) {
      results.hidden = true;
    }
  });
};

initGlobalSearch();
