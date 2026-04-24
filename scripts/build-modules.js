#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const MODULE_DIR = path.join(ROOT, "modules");

const NAV = `      <nav class="site-nav" id="primary-navigation" aria-label="Hauptnavigation" data-i18n-aria-label="nav.aria">
        <a href="index.html" data-i18n="nav.home">Start</a>
        <a class="active" href="lehrgang.html" data-i18n="nav.course">Lehrgang</a>
        <a href="uebungen.html" data-i18n="nav.exercises">Übungen</a>
        <a href="fallstudien.html" data-i18n="nav.cases">Fallstudien</a>
        <a href="tools-datenquellen.html" data-i18n="nav.tools">Tools &amp; Datenquellen</a>
        <a href="responsible-metrics.html" data-i18n="nav.responsible">Responsible Metrics</a>
        <a href="glossar.html" data-i18n="nav.glossary">Glossar</a>
        <a href="downloads-vorlagen.html" data-i18n="nav.downloads">Downloads &amp; Vorlagen</a>
        <a href="faq.html" data-i18n="nav.faq">FAQ</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="impressum.html">Impressum</a>
      </nav>`;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");

const withOriginalText = (tag, text, attrs = "") => {
  const cleanText = text.trim();
  const originalTextAttribute = cleanText ? ` data-original-text="${escapeHtml(cleanText)}"` : "";
  return `<${tag}${attrs}${originalTextAttribute}>${renderInline(text)}</${tag}>`;
};

const TEMPLATE = ({ title, moduleId, moduleSlug, metaList, contentHtml }) => {
  const pageTitle = `Einführung Bibliometrie – ${title}`;

  return `<!doctype html>
<html lang="de" data-original-text="${escapeHtml(pageTitle)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${pageTitle}</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="navigation.js" defer></script>
    <script src="i18n.js" defer></script>
  </head>
  <body>
    <header class="site-header">
      <div class="brand" data-i18n="site.brand" data-original-text="Einführung Bibliometrie">Einführung Bibliometrie</div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span class="nav-toggle-label" data-i18n="nav.menu" data-original-text="Menü">Menü</span>
        <span class="nav-toggle-icon" aria-hidden="true">
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </span>
      </button>
${NAV}
      <button class="language-toggle" type="button" aria-label="Sprache wechseln" data-i18n="language.toggle" data-i18n-aria-label="language.aria" data-original-text="DE/EN">DE/EN</button>
    </header>
    <main class="content">
      <div class="module-progress" data-module-progress data-module-id="${moduleSlug}">
        <span class="module-progress-label" data-original-text="Fortschritt:">Fortschritt:</span>
        <progress id="module-progress-bar" max="100" value="0">0%</progress>
        <span class="module-progress-value" data-module-progress-value data-original-text="0%">0%</span>
      </div>
      ${withOriginalText("h1", title, ` id="heading-modul-${moduleId}"`)}

      <section class="module-section" id="modul-${moduleId}" aria-labelledby="heading-modul-${moduleId}">
${metaList}
${contentHtml}
      </section>
    </main>
    <script src="role-toggle.js" defer></script>
    <script src="module-progress.js" defer></script>
    <script src="details-accordion.js" defer></script>
  </body>
</html>
`;
};

const INLINE_BOLD = /\*\*(.+?)\*\*/g;
const INLINE_URL = /(https?:\/\/[^\s)<>]+)/g;
const TABLE_DIVIDER = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/;

const renderInline = (text) => {
  const withStrong = text.replace(INLINE_BOLD, "<strong>$1</strong>");
  return withStrong.replace(INLINE_URL, '<a href="$1">$1</a>');
};

const closeBlocks = (state, html) => {
  if (state.paragraph) {
    html.push(`        ${withOriginalText("p", state.paragraph.join(" "))}`);
    state.paragraph = null;
  }
  if (state.list) {
    html.push(`        </${state.list}>`);
    state.list = null;
  }
};

const renderRoleHintBlock = (options) => {
  const roles = options.map((option) => option.role);
  const roleButtons = roles
    .map(
      (role) =>
        `            <button type="button" class="role-toggle-button" data-role="${escapeHtml(role)}" data-original-text="${escapeHtml(role)}">${role}</button>`
    )
    .join("\n");

  const roleHints = options
    .map(
      (option) =>
        `            <div class="role-hint" data-role="${escapeHtml(option.role)}" data-original-text="${escapeHtml(option.text)}" hidden>${renderInline(
          option.text
        )}</div>`
    )
    .join("\n");

  return [
    '        <div class="module-role-panel">',
    `          ${withOriginalText("p", "Wähle deine Rolle für passende Hinweise:", ' class="module-role-label"')}`,
    '          <div class="module-role-buttons" role="group" aria-label="Rolle auswählen">',
    roleButtons,
    "          </div>",
    '          <div class="module-role-hints">',
    roleHints,
    "          </div>",
    "        </div>",
  ].join("\n");
};

const markdownToHtml = (lines) => {
  const html = [];
  const state = { list: null, paragraph: null };
  const rawHtmlStack = [];

  const updateRawHtmlStack = (line) => {
    const tags = [...line.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>/g)];
    tags.forEach((tag) => {
      const fullTag = tag[0];
      const name = tag[1].toLowerCase();
      if (fullTag.startsWith("</")) {
        const index = rawHtmlStack.lastIndexOf(name);
        if (index !== -1) {
          rawHtmlStack.splice(index, 1);
        }
        return;
      }
      const selfClosing = /\/>$/.test(fullTag) || ["br", "hr", "img", "input", "meta", "link"].includes(name);
      if (!selfClosing) {
        rawHtmlStack.push(name);
      }
    });
  };

  const splitTableRow = (row) => {
    const normalized = row.trim().replace(/^\|/, "").replace(/\|$/, "");
    return normalized.split("|").map((cell) => cell.trim());
  };

  const flushParagraph = () => {
    if (state.paragraph) {
      html.push(`        ${withOriginalText("p", state.paragraph.join(" "))}`);
      state.paragraph = null;
    }
  };

  const ensureList = (type) => {
    if (state.list && state.list !== type) {
      html.push(`        </${state.list}>`);
      state.list = null;
    }
    if (!state.list) {
      html.push(`        <${type}>`);
      state.list = type;
    }
  };

  const parseRoleHints = (startIndex) => {
    const options = [];
    let index = startIndex + 1;

    while (index < lines.length) {
      const candidate = lines[index].trim();
      if (candidate === ":::") {
        break;
      }

      const match = candidate.match(/^\[([^\]]+)\]:\s*(.+)$/);
      if (match) {
        options.push({ role: match[1].trim(), text: match[2].trim() });
      }
      index += 1;
    }

    if (index >= lines.length || lines[index].trim() !== ":::") {
      throw new Error("Unclosed :::role-hint block");
    }

    return { options, endIndex: index };
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      closeBlocks(state, html);
      continue;
    }

    if (trimmed === ":::role-hint") {
      closeBlocks(state, html);
      const { options, endIndex } = parseRoleHints(index);
      if (options.length > 0) {
        html.push(renderRoleHintBlock(options));
      }
      index = endIndex;
      continue;
    }

    if (rawHtmlStack.length > 0 || (trimmed.startsWith("<") && !trimmed.startsWith("<#"))) {
      closeBlocks(state, html);
      html.push(`        ${line}`);
      updateRawHtmlStack(line);
      continue;
    }

    const nextLine = lines[index + 1] ? lines[index + 1].trim() : "";
    if (trimmed.startsWith("|") && TABLE_DIVIDER.test(nextLine)) {
      closeBlocks(state, html);
      const headerCells = splitTableRow(trimmed);
      const bodyRows = [];
      index += 2;
      while (index < lines.length) {
        const candidate = lines[index].trim();
        if (!candidate.startsWith("|")) {
          index -= 1;
          break;
        }
        bodyRows.push(splitTableRow(candidate));
        index += 1;
      }

      html.push("        <table>");
      html.push("          <thead>");
      html.push("            <tr>");
      headerCells.forEach((cell) => {
        html.push(`              ${withOriginalText("th", cell)}`);
      });
      html.push("            </tr>");
      html.push("          </thead>");
      if (bodyRows.length > 0) {
        html.push("          <tbody>");
        bodyRows.forEach((row) => {
          html.push("            <tr>");
          row.forEach((cell) => {
            html.push(`              ${withOriginalText("td", cell)}`);
          });
          html.push("            </tr>");
        });
        html.push("          </tbody>");
      }
      html.push("        </table>");
      continue;
    }

    const headingMatch = trimmed.match(/^(#{2,6})\s+(.*)$/);
    if (headingMatch) {
      closeBlocks(state, html);
      const level = Math.min(6, headingMatch[1].length + 1);
      html.push(`        ${withOriginalText(`h${level}`, headingMatch[2])}`);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      ensureList("ol");
      html.push(`          ${withOriginalText("li", orderedMatch[1])}`);
      continue;
    }

    const unorderedMatch = trimmed.match(/^-\s+(.*)$/);
    if (unorderedMatch) {
      flushParagraph();
      ensureList("ul");
      html.push(`          ${withOriginalText("li", unorderedMatch[1])}`);
      continue;
    }

    if (state.list && html.length > 0) {
      const lastIndex = html.length - 1;
      if (html[lastIndex].includes("<li")) {
        html[lastIndex] = html[lastIndex].replace("</li>", ` <p data-original-text="${escapeHtml(trimmed)}">${renderInline(trimmed)}</p></li>`);
        continue;
      }
    }

    if (!state.paragraph) {
      state.paragraph = [];
    }
    state.paragraph.push(trimmed);
  }

  closeBlocks(state, html);

  return html.join("\n");
};

const parseModule = (content) => {
  const lines = content.split(/\r?\n/);
  const titleLine = lines.find((line) => line.startsWith("# "));
  if (!titleLine) {
    throw new Error("Missing module title");
  }
  const title = titleLine.replace(/^#\s+/, "").trim();

  const meta = {};
  const bodyLines = [];
  let inMeta = false;

  lines.forEach((line) => {
    if (line.startsWith("# ")) {
      inMeta = true;
      return;
    }
    if (inMeta) {
      const metaMatch = line.match(/^\*\*(.+?):\*\*\s*(.+)$/);
      if (metaMatch) {
        meta[metaMatch[1].trim()] = metaMatch[2].trim();
        return;
      }
      if (line.trim().startsWith("## ")) {
        inMeta = false;
      } else if (line.trim() && !line.trim().startsWith("---")) {
        inMeta = false;
        bodyLines.push(line);
        return;
      }
    }
    if (!inMeta) {
      bodyLines.push(line);
    }
  });

  return { title, meta, bodyLines };
};

const buildMetaList = (meta) => {
  const rows = [
    ["Schwierigkeit", meta.Schwierigkeit || meta.Eigenschaft],
    ["Geschätzte Lesezeit", meta["Geschätzte Lesezeit"] || meta.Lesezeit],
    ["Zielgruppen", meta.Zielgruppen],
    ["Voraussetzungen", meta.Voraussetzungen],
  ].filter(([, value]) => value);

  if (rows.length === 0) {
    return "";
  }

  const items = rows
    .map(([label, value]) => `          <li data-original-text="${escapeHtml(`${label}: ${value}`)}"><strong>${label}:</strong> ${renderInline(value)}</li>`)
    .join("\n");

  return `        <ul class="module-meta">\n${items}\n        </ul>`;
};

const buildModulePage = (filename) => {
  const modulePath = path.join(MODULE_DIR, filename);
  const content = fs.readFileSync(modulePath, "utf8");
  const { title, meta, bodyLines } = parseModule(content);
  const moduleId = filename.match(/modul-(\d+)\.md/)[1];
  const moduleNumber = parseInt(moduleId, 10);
  const moduleSlug = `modul${moduleNumber}`;
  const metaList = buildMetaList(meta);
  const contentHtml = markdownToHtml(bodyLines);
  const html = TEMPLATE({ title, moduleId: moduleNumber, moduleSlug, metaList, contentHtml });
  const outputName = `modul${moduleNumber}.html`;
  const outputPath = path.join(ROOT, outputName);
  fs.writeFileSync(outputPath, html, "utf8");
  return outputName;
};

const modulesToBuild = fs
  .readdirSync(MODULE_DIR)
  .filter((file) => /^modul-(0[1-9]|1[0-2])\.md$/.test(file))
  .sort();

if (modulesToBuild.length === 0) {
  console.error("No module markdown files found.");
  process.exit(1);
}

const outputs = modulesToBuild.map((file) => buildModulePage(file));
console.log(`Generated ${outputs.length} module pages: ${outputs.join(", ")}`);

execFileSync(process.execPath, [path.join(__dirname, "build-search-index.js")], { stdio: "inherit" });
