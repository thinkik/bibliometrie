# Modul 9: Datenqualität & Disambiguierung: Autor:innen, Organisationen, Affiliations, Dubletten – plus reproduzierbare Workflows

## Lernziele
- Die wichtigsten Datenqualitäts-Probleme in bibliometrischen Datensätzen erkennen (Name ambiguity, Affiliations, Dubletten, Coverage).
- Autor:innen- und Organisations-Disambiguierung als eigenes Arbeitsfeld verstehen (warum es nie „perfekt“, aber besser wird).
- PIDs (ORCID, ROR, DOI) als robuste Anker für saubere Datensätze nutzen.
- Ein Cleaning- & QA-Protokoll aufsetzen (Checklisten, Stichproben, Edge-Cases, Logging).
- Einen bibliometrischen Workflow reproduzierbar dokumentieren (Stichtag/Snapshot/Versionierung/Parameter).

## Kurz erklärt
Bibliometrie steht und fällt mit Datenqualität. Schon kleine Zuordnungsfehler (falsche Autor:in, falsche Affiliation, Dublette) können Kennzahlen und Rankings stark verzerren. Disambiguierung ist daher kein „Nachputzen“, sondern ein Kernschritt. Gute Praxis kombiniert PIDs (ORCID/ROR/DOI), klar definierte Regeln (Counting, Zeitfenster, Dokumenttypen), QA-Checks (Stichproben/Edge-Cases) und reproduzierbare Dokumentation (Stichtag, Parameter, Versionierung).

## Schlüsselbegriffe
- **Data quality dimensions:** Typische Dimensionen: Vollständigkeit, Genauigkeit, Konsistenz, Aktualität, Provenienz/Traceability.
- **Name ambiguity:** Mehrdeutige Namen (z. B. Initialen, Namensänderungen, Transliteration) führen zu falscher Zuordnung von Publikationen.
- **Author disambiguation:** Algorithmische/kuratorische Zuordnung von Werken zu Personen (mit Unsicherheit, Konflikten und iterativer Verbesserung).
- **Organization disambiguation:** Vereinheitlichung von Organisationsnamen (Varianten, Sprachen, Fusions-/Reorg-Historie) zu stabilen Einheiten.
- **Affiliation:** Zuordnung einer Autor:in zu einer Organisation im Kontext eines bestimmten Works (zeit-/work-spezifisch).
- **Duplicate / near-duplicate:** Doppelte oder beinahe doppelte Records (Preprint vs. Version of Record; Importduplikate; Metadatenvarianten).
- **Persistent Identifier (PID):** Stabiler, eindeutiger Identifier (z. B. ORCID für Personen, ROR für Organisationen, DOI für Objekte).
- **ORCID iD:** Kostenloser, persistenter Personen-Identifier, der Name-Ambiguität reduziert und Beiträge/Outputs verknüpfen hilft.
- **ROR ID:** Offener, persistenter Identifier für Forschungseinrichtungen zur Disambiguierung von Organisationsnamen.
- **DOI:** Persistenter Identifier für digitale Objekte (z. B. Artikel, Daten, Preprints), inkl. Metadaten-Verknüpfung.
- **Snapshot / Stichtag:** Fixierter Stand der Daten (Zeitpunkt), der für Reproduzierbarkeit im Reporting zwingend dokumentiert werden sollte.

## Vertiefung: Wo Fehler typischerweise entstehen
**1) Personen:** Namensvarianten, Initialen, Namenswechsel, gleichnamige Personen.
**2) Organisationen:** Schreibvarianten (DE/EN/FR), Fakultäten/Institute vs. Gesamtuni, Fusionen/Reorganisation.
**3) Affiliations im Work-Kontext:** Mehrfachaffiliationen, fehlende oder veraltete Angaben.
**4) Werke:** Preprint vs. Journal-Artikel, Konferenzversionen, doppelte Importe.
**5) Datenbasis/Coverage:** Nicht alle Felder/Sprachen/Publikationstypen sind gleich gut abgedeckt.

## Vertiefung: Disambiguierung als Pipeline (statt „manuell irgendwo korrigieren“)
**Ziel:** Aus rohen Metadaten wird ein analysefähiger, auditierbarer Datensatz.

**Schrittfolge (Minimalstandard):**
1. **Identifier-Join zuerst** (ORCID/ROR/DOI), wo möglich.
2. **Normalisierung** (Casefolding, Unicode, Trimmen; Standardisierung von Ländern, Institutionssuffixen).
3. **Matching-Regeln** (exakt, dann fuzzy; immer mit Schwellen/Confidence).
4. **Konfliktregeln** (z. B. ORCID > Name-Match; ROR > Freitext).
5. **Deduplication** (DOI/PMID/ISBN; plus Near-Duplicate-Heuristiken).
6. **QA**: Stichprobe + gezielte Edge-Case-Tests; Logging aller Änderungen.

**Merksatz:** Jede Korrektur braucht eine Regel + einen Audit-Trail.

## PIDs als robuste Anker (ORCID, ROR, DOI)

### ORCID
**Use:** Personen eindeutig identifizieren; Profilpflege lohnt sich für Disambiguierung.

**Best Practices:**
- ORCID in Publikationssystemen und Repositorien erfassen.
- ORCID in Reports als Primäranker (falls vorhanden) nutzen.
- Bei Konflikten: ORCID-gestützte Zuordnung bevorzugen.

### ROR
**Use:** Organisationen konsistent benennen und über Systeme hinweg verbinden.

**Best Practices:**
- ROR als Master-Lookup für Organisationsnamen und Varianten nutzen.
- Sub-Units (Departemente/Institute) getrennt modellieren (Mapping-Tabelle).
- Reorg-Historie dokumentieren (ab wann gilt welche Struktur).

### DOI
**Use:** Werke stabil identifizieren; erleichtert Dedup und Metadaten-Abgleich (Crossref/DataCite).

**Best Practices:**
- DOI als primären Work-Key nutzen (wenn vorhanden).
- Preprint vs. VoR explizit modellieren (Relation/Version).
- Metadaten-Abgleich via APIs (z. B. Crossref) für Plausibilisierung.

## QA-Checkliste (für jede Analyse / jeden Report)
- Stichtag/Snapshot dokumentiert (Datum, Datenquelle, Exportparameter).
- Identifier-Quote: % Werke mit DOI, % Autor:innen mit ORCID, % Orgs mit ROR.
- Top-20 Autor:innen/Orgs manuell plausibilisiert (Fehlzuordnungen?).
- Dublettentest: DOI-Duplikate = 0; Near-Duplicates geprüft (Preprint/VoR).
- Affiliation-Qualität: fehlende Affiliationsquote; Multi-affiliation-Regel dokumentiert.
- Edge-Case-Liste: Konsortien/Hyperauthorship; Namenswechsel; transliterierte Namen.
- Audit-Trail: Welche Regeln/Overrides wurden angewendet? (mit Version)

## Template: Methodik-Kasten (Copy/Paste für Website & Reports)
Datenquelle(n): <…> | Stichtag/Export: <YYYY-MM-DD, Tool/Query> | Zeitraum: <…> | Dokumenttypen: <…> | Identifiers: DOI/ORCID/ROR (Prioritäten: <…>) | Disambiguierung: <Regeln, Fuzzy-Schwellen, Konfliktregeln> | Dedup: <Keys + Heuristiken> | Counting: <full/fractional + Details> | Limitationen: <Coverage, Missingness, Unsicherheit> | Reproduzierbarkeit: <Code/Notebook/Repo + Version>.

## Tool-Lab: Mini-Lab – 30-Minuten Cleaning Sprint (Author + Org)
1. Nimm ein Set von 200 Publikationen (z. B. 2022–2025) aus deiner Datenquelle.
2. Ermittle Identifier-Quoten (DOI/ORCID/ROR) und dokumentiere sie.
3. Wähle 10 häufigste Autor:innen und 10 häufigste Organisationen; prüfe Fehlzuordnungen (Stichprobe 5 Werke pro Einheit).
4. Lege ein Mapping-Sheet an: Org-Varianten -> ROR; Sub-Units -> Canonical Name.
5. Führe Dedup-Check (DOI) und Near-Dup-Check (Titel+Jahr+1. Autor:in) aus.
6. Erstelle am Ende einen Methodik-Kasten + eine Edge-Case-Liste (max. 10 Punkte).

## Responsible Metrics: Datenqualität zuerst
- Keine Kennzahl ohne Datenbasis- und Disambiguierungs-Transparenz.
- Wenn Datenqualität unklar ist: lieber robuste Indikatoren (z. B. Top-x%) und größere Aggregationseinheiten.
- Immer Missingness berichten (DOI/ORCID/ROR-Quote; Affiliation-Quote).
- Korrekturen müssen nachvollziehbar sein (Regel + Audit-Trail) – besonders bei Entscheidungen mit Konsequenzen.

## Übungen

### Level 1
1. **M09-L1-Q1:** Welche Reihenfolge ist als Minimalstandard am sinnvollsten?
   - Fuzzy-Matching zuerst, dann Identifier-Join.
   - Identifier-Join zuerst (ORCID/ROR/DOI), dann Matching für den Rest.
   - Nur manuelle Korrektur, keine Regeln.
   - **Lösung:** Identifier-Join zuerst (ORCID/ROR/DOI), dann Matching für den Rest.

2. **M09-L1-Q2:** Warum ist ein Stichtag/Snapshot wichtig?
   - Damit Zahlen größer wirken.
   - Damit Analysen reproduzierbar sind und Änderungen über Zeit erklärbar bleiben.
   - Weil APIs sonst nicht funktionieren.
   - **Lösung:** Damit Analysen reproduzierbar sind und Änderungen über Zeit erklärbar bleiben.

3. **M09-L1-Q3:** Welche Aussage ist am defensibelsten?
   - Disambiguierung ist immer 100% korrekt.
   - Disambiguierung ist ein iterativer Prozess mit Unsicherheit, der dokumentiert werden muss.
   - PIDs sind unwichtig, weil Namen reichen.
   - **Lösung:** Disambiguierung ist ein iterativer Prozess mit Unsicherheit, der dokumentiert werden muss.

### Level 2
1. **M09-L2-CLEAN-1:** Du bekommst 6 Organisationsnamen aus Publikationen. Erstelle eine Mapping-Tabelle (Original -> Canonical -> ROR-ID (falls auffindbar) -> Notes).
   - **Datensnippet:**
     - University of Lucerne
     - Univ. Luzern
     - Université de Lucerne
     - Dept. of Economics, Univ. of Lucerne
     - Universität Luzern, Wirtschaftswissenschaftliches Institut
     - U. Lucerne
   - **Lösungsrahmen:**
     - Canonical Name: einheitlich (z. B. University of Lucerne / Universität Luzern).
     - Sub-Units separat als unit_label modellieren (Departement/Institut).
     - ROR-ID am besten auf Gesamtinstitution anwenden; Sub-Units via internes Mapping.
   - **Bewertung:** 2 Punkte: klare Canonical-Strategie + Sub-Unit-Trennung. 1 Punkt: plausible Notes (Reorg/Sprachvarianten).

2. **M09-L2-DEDUPE-1:** Dedup-Regeln: Formuliere 3 Regeln (priorisiert), um Dubletten zu erkennen (DOI, dann Identifier-ähnliche, dann Near-Dup).
   - **Lösungsrahmen:**
     1. DOI exakt gleich => Dublette.
     2. (Titel normalisiert + Jahr + erster Autor) sehr ähnlich => Near-duplicate; manuelle Prüfung.
     3. Preprint/VoR: Relationen/Versionen explizit kennzeichnen statt „löschen“.
   - **Bewertung:** 1 Punkt: DOI-Regel korrekt. 1 Punkt: Near-Dup-Regel mit Normalisierung. 1 Punkt: Versionierungs-Hinweis (Preprint/VoR).

3. **M09-L2-METHODBOX-1:** Schreibe einen Methodik-Kasten (5–8 Sätze) für einen Departements-Report. Muss enthalten: Quelle, Stichtag, Zeitraum, Identifier-Priorität (DOI/ORCID/ROR), Dedup, Disambiguierung, Limitationen.
   - **Lösungsrahmen:** Quelle+Stichtag; Zeitraum+Dokumenttypen; Identifier-Priorität (ORCID/ROR/DOI); Dedup + Disambiguierung kurz; 2–3 Limitationen (Coverage/Missingness/Unsicherheit).
   - **Bewertung:** 2 Punkte: alle Pflichtfelder enthalten. 1 Punkt: Limitationen konkret (nicht generisch).

### Level 3
1. **M09-L3-CASE:** Mini-Case: Du sollst ein Uni-Dashboard bauen, das monatlich aktualisiert wird. Entwirf (a) einen reproduzierbaren Workflow (5–7 Schritte) und (b) eine QA-Strategie (mind. 8 Checks), die bei jedem Lauf automatisch oder halbautomatisch geprüft wird.
   - **Deliverable:** Workflow + QA-Strategie (Bulletpoints).
   - **Lösungsrahmen:** Workflow: Datenabruf (Query/Export) -> Snapshot speichern -> Cleaning/Mapping -> Dedup -> Disambiguierung -> Kennzahlen -> Outputs (CSV/JSON + Report) -> Versionieren/Changelog. QA: Identifier-Quoten, DOI-Duplikate, Missing affiliations, Top-Einheiten plausibilisieren, Ausreißer-Checks, Version/Parameter-Logging, Edge-Case-Set, Trend-Drift-Checks (Sprünge), Reorg-Mapping-Integrity.
   - **Bewertung:** Workflow ist reproduzierbar (Snapshot/Version/Parameter) (3 Punkte). QA ist konkret und überprüfbar (nicht nur allgemein) (4 Punkte). Transparenz/Responsible-Metrics-Logik sichtbar (2 Punkte).

## Quellen
- https://docs.openalex.org/api-entities/authors
- https://help.openalex.org/hc/en-us/articles/24347048891543-Author-disambiguation
- https://docs.openalex.org/api-entities/works/work-object/authorship-object
- https://docs.openalex.org/additional-help/faq
- https://orcid.org/
- https://support.orcid.org/hc/en-us/articles/360006897334-What-is-an-ORCID-iD-and-how-do-I-use-it
- https://ror.org/
- https://www.crossref.org/documentation/retrieve-metadata/rest-api/
- https://www.doi.org/
- https://www.iso.org/standard/81599.html
- https://support.datacite.org/docs/doi-basics
- https://www.elsevier.com/products/scopus/author-profiles
