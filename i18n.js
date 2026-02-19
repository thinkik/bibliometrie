const I18N_STORAGE_KEY = "bibliometrie-language";
const DEFAULT_LANGUAGE = "de";

const getNestedValue = (object, path) =>
  path.split(".").reduce((value, segment) => (value && value[segment] ? value[segment] : null), object);

const applyUiTranslations = (translations, language) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getNestedValue(translations.ui?.[language], key);

    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = getNestedValue(translations.ui?.[language], key);

    if (value) {
      element.setAttribute("aria-label", value);
    }
  });
};

const applyContentTranslations = (translations, language) => {
  const textMap = translations.textMap || {};
  const reverseMap = Object.fromEntries(Object.entries(textMap).map(([de, en]) => [en, de]));

  document
    .querySelectorAll("main h1, main h2, main h3, main p, main li, main th, main td, main figcaption, main summary, main .btn")
    .forEach((element) => {
      if (element.children.length > 0) {
        return;
      }

      const original = element.dataset.originalText || element.textContent.trim();
      element.dataset.originalText = original;

      if (language === "en" && textMap[original]) {
        element.textContent = textMap[original];
      }

      if (language === "de") {
        if (textMap[original]) {
          element.textContent = original;
        } else if (reverseMap[original]) {
          element.textContent = reverseMap[original];
        }
      }
    });
};

const setLanguage = (translations, language) => {
  const normalizedLanguage = language === "en" ? "en" : "de";

  document.documentElement.lang = normalizedLanguage;
  localStorage.setItem(I18N_STORAGE_KEY, normalizedLanguage);
  applyUiTranslations(translations, normalizedLanguage);
  applyContentTranslations(translations, normalizedLanguage);
};

const initializeLanguageToggle = (translations) => {
  const languageToggle = document.querySelector(".language-toggle");
  const initialLanguage = localStorage.getItem(I18N_STORAGE_KEY) || DEFAULT_LANGUAGE;

  setLanguage(translations, initialLanguage);

  if (!languageToggle) {
    return;
  }

  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "de" ? "en" : "de";
    setLanguage(translations, nextLanguage);
  });
};

fetch("data/translations.json")
  .then((response) => response.json())
  .then((translations) => {
    initializeLanguageToggle(translations);
  })
  .catch((error) => {
    console.error("Translations could not be loaded", error);
  });
