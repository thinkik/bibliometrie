#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const MODULE_DIR = path.join(ROOT, "modules");

const NAV = `      <nav class="site-nav" id="primary-navigation" aria-label="Hauptnavigation">
        <a href="index.html">Start</a>
        <a class="active" href="lehrgang.html">Lehrgang</a>
        <a href="uebungen.html">Übungen</a>
        <a href="fallstudien.html">Fallstudien</a>
        <a href="tools-datenquellen.html">Tools &amp; Datenquellen</a>
        <a href="responsible-metrics.html">Responsible Metrics</a>
        <a href="glossar.html">Glossar</a>
        <a href="downloads-vorlagen.html">Downloads &amp; Vorlagen</a>
        <a href="faq.html">FAQ</a>
      </nav>`;

const TEMPLATE = ({ title, moduleId, moduleSlug, metaList, contentHtml }) => `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Einführung Bibliometrie – ${title}</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="navigation.js" defer></script>
  </head>
  <body>
    <header class="site-header">
      <div class="brand">Einführung Bibliometrie</div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span class="nav-toggle-label">Menü</span>
        <span class="nav-toggle-icon" aria-hidden="true">
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </span>
      </button>
${NAV}
    </header>
    <main class="content">
      <div class="module-progress" data-module-progress data-module-id="${moduleSlug}">
        <span class="module-progress-label">Fortschritt:</span>
        <progress id="module-progress-bar" max="100" value="0">0%</progress>
        <span class="module-progress-value" data-module-progress-value>0%</span>
      </div>
      <h1>${title}</h1>

      <section class="module-section" id="modul-${moduleId}" aria-labelledby="heading-modul-${moduleId}">
        <h2 id="heading-modul-${moduleId}">${title}</h2>
        ${metaList}
${contentHtml}
      </section>
    </main>
    <script src="role-toggle.js" defer></script>
    <script src="module-progress.js" defer></script>
  </body>
</html>
`;

const INLINE_BOLD = /\*\*(.+?)\*\*/g;
const INLINE_URL = /(https?:\/\/[^\s)<>]+)/g;
const TABLE_DIVIDER = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/;

const renderInline = (text) => {
  const withStrong = text.replace(INLINE_BOLD, "<strong>$1</strong>");
  return withStrong.replace(INLINE_URL, '<a href="$1">$1</a>');
};

const closeBlocks = (state, html) => {
  if (state.paragraph) {
    html.push(`        <p>${renderInline(state.paragraph.join(" "))}</p>`);
    state.paragraph = null;
  }
  if (state.list) {
    html.push(`        </${state.list}>`);
    state.list = null;
  }
};

const markdownToHtml = (lines) => {
  const html = [];
  const state = { list: null, paragraph: null };

  const splitTableRow = (row) => {
    const normalized = row.trim().replace(/^\|/, "").replace(/\|$/, "");
    return normalized.split("|").map((cell) => cell.trim());
  };

  const flushParagraph = () => {
    if (state.paragraph) {
      html.push(`        <p>${renderInline(state.paragraph.join(" "))}</p>`);
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

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();
    if (!trimmed) {
      closeBlocks(state, html);
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
        html.push(`              <th>${renderInline(cell)}</th>`);
      });
      html.push("            </tr>");
      html.push("          </thead>");
      if (bodyRows.length > 0) {
        html.push("          <tbody>");
        bodyRows.forEach((row) => {
          html.push("            <tr>");
          row.forEach((cell) => {
            html.push(`              <td>${renderInline(cell)}</td>`);
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
      html.push(`        <h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      ensureList("ol");
      html.push(`          <li>${renderInline(orderedMatch[1])}</li>`);
      continue;
    }

    const unorderedMatch = trimmed.match(/^-\s+(.*)$/);
    if (unorderedMatch) {
      flushParagraph();
      ensureList("ul");
      html.push(`          <li>${renderInline(unorderedMatch[1])}</li>`);
      continue;
    }

    if (state.list && html.length > 0) {
      const lastIndex = html.length - 1;
      if (html[lastIndex].includes("<li>")) {
        html[lastIndex] = html[lastIndex].replace(
          "</li>",
          ` <p>${renderInline(trimmed)}</p></li>`
        );
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
    ["Schwierigkeit", meta["Schwierigkeit"]],
    ["Geschätzte Lesezeit", meta["Geschätzte Lesezeit"]],
    ["Zielgruppen", meta["Zielgruppen"]],
    ["Voraussetzungen", meta["Voraussetzungen"]],
  ].filter(([, value]) => value);

  if (rows.length === 0) {
    return "";
  }

  const items = rows
    .map(([label, value]) => `          <li><strong>${label}:</strong> ${renderInline(value)}</li>`)
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
  .filter((file) => /^modul-0[4-9]\.md$/.test(file) || /^modul-(1[0-2])\.md$/.test(file))
  .sort();

if (modulesToBuild.length === 0) {
  console.error("No module markdown files found.");
  process.exit(1);
}

const outputs = modulesToBuild.map((file) => buildModulePage(file));
console.log(`Generated ${outputs.length} module pages: ${outputs.join(", ")}`);


execFileSync(process.execPath, [path.join(__dirname, "build-search-index.js")], { stdio: "inherit" });
