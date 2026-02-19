#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "data", "search-index.json");

const SEARCHABLE_FILES = [
  "lehrgang.html",
  "uebungen.html",
  "glossar.html",
  "faq.html",
  "fallstudien.html",
  "tools-datenquellen.html",
  "responsible-metrics.html",
  "downloads-vorlagen.html",
  "index.html",
  ...Array.from({ length: 12 }, (_, index) => `modul${index + 1}.html`),
];

const CATEGORY_BY_FILE = [
  { regex: /^modul\d+\.html$/, category: "Module" },
  { regex: /^uebungen\.html$/, category: "Übungen" },
  { regex: /^glossar\.html$/, category: "Glossar" },
  { regex: /^faq\.html$/, category: "FAQ" },
];

const decodeHtmlEntities = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const stripHtml = (html) => {
  const withoutScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");

  return decodeHtmlEntities(withoutScripts.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
};

const getTitle = (html, fallback) => {
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (titleMatch) {
    return stripHtml(titleMatch[1]);
  }
  const documentTitleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return documentTitleMatch ? stripHtml(documentTitleMatch[1]) : fallback;
};

const getCategory = (filename) => {
  const match = CATEGORY_BY_FILE.find(({ regex }) => regex.test(filename));
  return match ? match.category : "Inhalte";
};

const entries = SEARCHABLE_FILES.filter((filename) => fs.existsSync(path.join(ROOT, filename))).map((filename) => {
  const absolutePath = path.join(ROOT, filename);
  const html = fs.readFileSync(absolutePath, "utf8");
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const body = mainMatch ? mainMatch[1] : html;

  return {
    url: filename,
    title: getTitle(html, filename),
    category: getCategory(filename),
    content: stripHtml(body),
  };
});

fs.writeFileSync(
  OUTPUT_PATH,
  JSON.stringify({ generatedAt: new Date().toISOString(), entries }, null, 2) + "\n",
  "utf8"
);

console.log(`Generated search index with ${entries.length} entries at ${path.relative(ROOT, OUTPUT_PATH)}`);
