# Einführung in die Bibliometrie

Diese Website ist eine statische Lernplattform zur **Einführung in die Bibliometrie**. Sie vermittelt Grundlagen, Methoden und Anwendungsfälle bibliometrischer Analysen in didaktisch aufbereiteten Modulen, Übungen und Fallstudien.

## Zweck und Zielgruppen

Das Projekt unterstützt beim Aufbau von Bibliometrie-Kompetenzen für Forschung, Evaluation und Wissenschaftsmanagement.

Typische Zielgruppen sind:
- Studierende und Lehrende,
- Bibliotheks- und Informationsfachleute,
- Forschungsreferent:innen und Wissenschaftsmanager:innen,
- Forschende mit Interesse an Metriken und Science Mapping.

## Voraussetzungen

- **Node.js** (empfohlen: aktuelle LTS-Version), da die Build-Skripte in `scripts/` mit Node ausgeführt werden.
- Optional ein lokaler statischer Webserver (z. B. Python, `npx serve`, Live Server).

## Projektstruktur und Build-Pipeline

Alle Lehrgangsmodule werden aus Markdown-Dateien im Ordner `modules/` generiert.

### Module generieren + Suchindex aktualisieren

```bash
node scripts/build-modules.js
```

Dieses Skript:
1. verarbeitet **alle** `modul-01.md` bis `modul-12.md`,
2. generiert die Seiten `modul1.html` bis `modul12.html`,
3. startet anschließend automatisch `scripts/build-search-index.js`.

### Suchindex einzeln aktualisieren

```bash
node scripts/build-search-index.js
```

Der Suchindex landet in `data/search-index.json` und enthält statische Inhaltsseiten plus alle vorhandenen `modul*.html`.

## Übersetzungen (i18n)

- Das Frontend nutzt `i18n.js` für den Sprachwechsel DE/EN.
- UI-Texte (Navigation, Buttons, Labels) und Inhaltstexte werden aus `data/translations.json` geladen.
- Neue Übersetzungen werden unter `textMap` gepflegt (Schlüssel = deutscher Originaltext, Wert = englische Übersetzung).
- Für neue wiederverwendbare UI-Texte sollten zusätzlich passende `ui.de`/`ui.en`-Einträge ergänzt werden.

## Projekt lokal starten

Da es sich um eine statische Website handelt, reicht ein lokaler Webserver.

Beispiel mit Python:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

- http://localhost:8000/

Alternativ kann jeder andere statische Webserver verwendet werden (z. B. `npx serve` oder ein IDE-integrierter Live-Server).

## Qualitätssicherung / Deployment

Empfohlen ist eine CI-Pipeline (z. B. GitHub Actions), die bei Push:
- den Modul-Build ausführt,
- den Suchindex aktualisiert,
- automatische Tests startet,
- und anschließend nach GitHub Pages deployt.

## Datenpflege

Bibliometrische Daten und Best Practices verändern sich fortlaufend. Deshalb sollte mindestens **jährlich** eine inhaltliche Aktualisierung eingeplant werden (Datenquellen, Metriken, Beispiele, Responsible-Metrics-Hinweise).

## Externe Bibliothek: D3.js

Für einzelne Visualisierungen (z. B. in den Fallstudien) wird **D3.js** eingesetzt und über jsDelivr eingebunden.

- D3.js: https://d3js.org/
- Lizenz (BSD-3-Clause): https://github.com/d3/d3/blob/main/LICENSE

Hinweis: Beim Laden über ein CDN kann technisch bedingt eine Verbindung zum CDN-Anbieter aufgebaut werden (siehe auch `datenschutz.html`).

## Lizenzhinweise

- Alle Inhalte dieser Website stehen unter der **Creative Commons Attribution 4.0 International (CC BY 4.0)** Lizenz:  
  https://creativecommons.org/licenses/by/4.0/
- Mitgelieferte Bilder/Grafiken wurden entweder selbst erstellt oder unter einer mit CC BY 4.0 kompatiblen Lizenz eingebunden.

## Rechtliche Seiten

- Datenschutz: `datenschutz.html`
- Impressum: `impressum.html`

## Kontakt / verantwortliche Autor:innen

Kontakt- und Verantwortlichkeitsangaben sind im Impressum hinterlegt: `impressum.html`.
