# Einführung in die Bibliometrie

Diese Website ist eine statische Lernplattform zur **Einführung in die Bibliometrie**. Sie vermittelt Grundlagen, Methoden und Anwendungsfälle bibliometrischer Analysen in didaktisch aufbereiteten Modulen, Übungen und Fallstudien.

## Zweck und Zielgruppen

Das Projekt unterstützt beim Aufbau von Bibliometrie-Kompetenzen für Forschung, Evaluation und Wissenschaftsmanagement.

Typische Zielgruppen sind:
- Studierende und Lehrende,
- Bibliotheks- und Informationsfachleute,
- Forschungsreferent:innen und Wissenschaftsmanager:innen,
- Forschende mit Interesse an Metriken und Science Mapping.

## Projektstruktur und lokale Entwicklung

Die Lernmodule werden aus Markdown-Quellen im Verzeichnis `modules/` erzeugt.

### Module aus Markdown-Dateien generieren

Das Skript `scripts/build-modules.js` konvertiert die Moduldateien nach HTML und aktualisiert zusätzlich den Suchindex.

Voraussetzungen:
- Node.js (empfohlen: aktuelle LTS-Version)

Ausführen:

```bash
node scripts/build-modules.js
```

Ergebnis:
- Generierte Modulseiten `modul*.html` im Projektroot (für die aktuell unterstützten Module),
- aktualisierter Suchindex in `data/search-index.json`.

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

> Aktuell enthält das Impressum Platzhalterdaten („Ihr Name / Ihre Organisation“). Diese sollten vor Veröffentlichung durch die realen Angaben des verantwortlichen Teams ersetzt werden.

## Projekt lokal starten

Da es sich um eine statische Website handelt, reicht ein lokaler Webserver.

Beispiel mit Python:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

- http://localhost:8000/

Alternativ kann jeder andere statische Webserver verwendet werden (z. B. `npx serve` oder ein IDE-integrierter Live-Server).
