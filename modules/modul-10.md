# Modul 10: Datenquellen & Coverage

## Lernziele
- Die vier großen Quellenfamilien (WoS, Scopus, OpenAlex/Crossref, Google Scholar) nach Kurationsgrad, Coverage, Transparenz, APIs und Reproduzierbarkeit unterscheiden.
- Coverage-Bias (Feld/Region/Sprache/Publikationstyp) als Haupttreiber für unterschiedliche Ergebnisse erklären.
- Für konkrete Use-Cases eine passende Datenquelle (oder Quelle + Triangulation) auswählen und begründen.
- Einen „Source Disclosure“-Methodik-Kasten schreiben, der Quelle, Stichtag, Exportregeln, Limitationen und Reproduzierbarkeit abdeckt.

## Kurz erklärt
Die Wahl der Datenquelle ist eine methodische Entscheidung – nicht nur eine Tool-Frage. WoS/Scopus sind kuratierte, kostenpflichtige Zitationsindizes mit definierten Selektionsprozessen. OpenAlex ist offen und sehr breit (primär gespeist aus Crossref und weiteren Quellen). Google Scholar ist extrem breit, aber weniger transparent und schwieriger reproduzierbar. Für seriöse Bibliometrie gilt: Quelle offenlegen, Use-Case passend wählen, und bei heiklen Aussagen triangulieren.

## Vergleichsmatrix (didaktisch für die Website)

| Dimension | Web of Science (WoS Core Collection) | Scopus | OpenAlex (primär Crossref-basiert, offen) | Crossref (Metadata Registry, offen) | Google Scholar |
| --- | --- | --- | --- | --- | --- |
| Kosten/Zugang | Abo (institutionell). | Abo (institutionell). | Offen (API/Downloads). | Offen (REST API). | Kostenlos (Web). |
| Kuration/Selektion | Stark kuratiert, redaktioneller Selektionsprozess, Re-Evaluation. | Kuratiert durch Content Selection and Advisory Board (CSAB). | Keine Journal-Kuration im Sinne von „selektiv aufnehmen“; sehr breit, abhängig von Quellfeeds. | Registry-Logik (Publisher registrieren DOIs); keine „Qualitätsselektion“ wie WoS/Scopus. | Sehr breit, weitgehend automatisiert; weniger transparent. |
| Coverage (Feld/Region/Typ) | Selektiv; gute Zitierverknüpfung, je nach Collection/Feld unterschiedlich. | Breit, oft stärker in Proceedings/Internationalität; dennoch kuratiert. | Sehr breit; stark beeinflusst durch Crossref-Registrierung/Metadatenqualität; Typisierung kann Grenzen haben. | Breit für DOI-registrierte Inhalte; Referenzen/Metadaten je Publisher stark unterschiedlich. | Sehr groß (inkl. nicht-traditioneller Outputs); dadurch häufig höhere Zitationszahlen. |
| Transparenz (Regeln/Docs) | Dokumentiert (Selection/Indexing/Policies). | Relativ gut (Coverage Guides). | Sehr gut dokumentiert (Entities, FAQ, Quellen). | Sehr gut dokumentiert (REST API, Metadata). | Begrenzt; Reproduzierbarkeit und Coverage schwer exakt zu dokumentieren. |
| APIs/Export | Professionelle Exporte/Integrationen (abhängig von Lizenz). | APIs/Exports abhängig von Lizenz; breit genutzt in Research Intelligence. | Starke, offene API; gut für reproduzierbare Pipelines. | Sehr gut (REST API). | Keine offizielle offene API für systematische Analysen; Export/Harvesting eingeschränkt. |
| Reproduzierbarkeit | Gut, wenn Exportparameter und Stichtag dokumentiert werden. | Gut bei sauberer Dokumentation (Stichtag, Query, Dokumenttypen). | Sehr gut, wenn Snapshot/Stichtag und Query fixiert werden. | Sehr gut (DOI als Key, Stichtag dokumentieren). | Schwächer (Ranking/Indexing/Profiles ändern sich; Limitierungen beim systematischen Zugriff). |
| Stärken | Hohe Datenkonsistenz, kuratierte Collections, etablierte Evaluation-Workflows. | Breite Abdeckung, stabile Metadaten-Pipelines, viele Metriken/Produkte (z. B. CiteScore). | Open workflows, skalierbare Analysen, gute Lehr-/Demo-Umgebung, Integration mit offenen IDs. | Stabiler Work-Identifier-Backbone (DOI), Basis für Metadaten-Abgleich und offene Workflows. | Auffinden von grauer Literatur, lokalen/kleineren Outputs, breites Suchnetz. |
| Risiken/Limitations | Coverage-Bias (Feld/Region/Sprache), „Selektivität“ kann SSH/Local outputs benachteiligen. | Coverage-Unterschiede zu WoS/anderen; Backfill/Indexing-Regeln können Ergebnisse beeinflussen. | Abhängigkeit von Crossref & Metadatenqualität; Disambiguierung/Typen/Ref-Links nicht überall gleich stark wie kuratierte Zitationsindizes. | Zitations-/Referenzdaten nicht vollständig/uneinheitlich; nicht „Citation index“ im WoS/Scopus-Sinn. | Intransparenz, Dubletten/Fehlzuordnungen, schwierig auditierbar für institutionelles Reporting. |
| Typische Use-Cases | Formale Evaluation (mit Responsible-Metrics-Leitplanken), Zitationsanalysen, standardisierte Reports. | Forschungsmonitoring, Portfolios, Feld-/Themenanalysen, Kombination mit SciVal-Workflows. | Lehre, Prototyping, offene Dashboards, Triangulation, erste Feld-/Netzwerkanalysen. | Metadaten-Enrichment, Dedup/QA, DOI-basierte Datensätze, offene Pipelines. | Literatursuche, ergänzende Triangulation, individuelle Profile (mit QA), frühe Orientierung in Nischen. |

## Entscheidungshilfe nach Use-Case (praktisch)
- **Offizielles Uni-Reporting / evaluative Berichte:** Primär WoS oder Scopus (je nach Lizenz/Tradition), plus klare Responsible-Metrics-Policy und Transparenzbox; OpenAlex als Triangulation/QA möglich.
- **Lehre & Training (Bibliometrie-Einführung, Übungen, Reproduzierbarkeit):** OpenAlex + Crossref (offen, API, reproduzierbar). Ergänzend: Demo-Screenshots aus WoS/Scopus (wenn vorhanden) zur Diskussion von Kuration vs. Coverage.
- **Open Science / offene Dashboards / Prototyping:** OpenAlex/Crossref als Backbone; optional DataCite (für Daten/Software) – mit klarer Datenqualitätssektion.
- **SSH / lokale Sprachen / graue Literatur / Buchfokus:** Triangulation: Google Scholar (Discovery) + kuratierte Quellen (falls relevant) + offene Metadaten (Crossref/OpenAlex). Aussagekraft immer mit Coverage-Hinweisen begrenzen.
- **Affiliation- und Organisationsanalysen:** Quelle mit guter Affiliation-Qualität wählen; immer ORG-Disambiguierung/Mappings (ROR) + QA (Top-Units, Dubletten).

## Source Disclosure Box (Copy/Paste für Website & Reports)
Datenquelle(n): <WoS/Scopus/OpenAlex/Crossref/GS> | Stichtag: <YYYY-MM-DD> | Query/Export: <Suchstrategie, Felder, Filter> | Zeitraum: <…> | Dokumenttypen: <…> | Zitationsfenster: <…> | Counting: <full/fractional> | Disambiguierung: <ORCID/ROR/Regeln> | Coverage-Hinweis: <Feld/Region/Sprache/Typ> | Reproduzierbarkeit: <Snapshot/Version/Parameter/Repo>.

## Typische Fehler bei Source-Vergleichen
- **„Die Datenbank mit mehr Records ist automatisch besser.“** Mehr Coverage kann mehr Rauschen und weniger Auditierbarkeit bedeuten. „Besser“ hängt vom Use-Case ab.
- **„Zitationszahlen sind zwischen Quellen direkt vergleichbar.“** Coverage, Referenzverknüpfung, Dokumenttypen und Indexing-Regeln unterscheiden sich – daher sind Zahlen nicht 1:1 austauschbar.
- **„Google Scholar ist für institutionelle Bibliometrie genauso auditierbar wie WoS/Scopus.“** Ohne stabile Export-/API-Workflows und klare Coverage-Regeln ist reproduzierbares, prüfbares Reporting schwieriger.

## Responsible-Metrics-Box
- Quelle ist Teil der Methodik: immer offenlegen (inkl. Stichtag/Exportregeln).
- Bei heiklen Aussagen triangulieren (mindestens zweite Quelle / Plausibilisierung).
- Coverage-Bias sichtbar machen (Feld/Region/Sprache/Publikationstyp).
- Reproduzierbarkeit priorisieren: Snapshots/Parameter/Versionierung.

## Mini-Übungen (Level 1–3)
- **Level 1:**
  - Welche Kombination passt am besten?
    - WoS = offen und unkuratierte Universalindexierung
    - OpenAlex = offen, primär aus Crossref gespeist, keine selektive Journal-Kuration
    - Google Scholar = stark kuratiert durch in-house Editors
  - Warum unterscheiden sich Zitationszahlen zwischen Datenquellen am häufigsten?
    - Weil Mathematik falsch ist.
    - Weil Coverage/Indexing/Regeln (Dokumenttypen, Referenzen) unterschiedlich sind.
    - Weil nur eine Quelle echte Zitationen zählt.
- **Level 2:**
  - Du baust einen Lehrgangs-Datensatz für Übungen ohne Paywall. Welche Quelle(n) wählst du und wie begründest du das in 3 Bulletpoints?
  - Triangulation: Du findest 20 % mehr Publikationen in Source A als in Source B für dasselbe Departement. Nenne 4 plausible Gründe.
- **Level 3:**
  - Mini-Case: Die Uni will ein jährliches Forschungsdashboard. Entwirf (a) eine Source-Strategie (1–2 Hauptquellen + Triangulation) und (b) eine Source Disclosure Box (vollständig) für die Website.

## Quellen & weiterführende Links
- https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/web-of-science-core-collection/content-collection-and-indexing-process/
- https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/web-of-science-core-collection/editorial-selection-process/
- https://assets.ctfassets.net/o78em1y1w4i4/EX1iy8VxBeQKf8aN2XzOp/c36f79db25484cb38a5972ad9a5472ec/Scopus_ContentCoverage_Guide_WEB.pdf
- https://docs.openalex.org/additional-help/faq
- https://docs.openalex.org/api-entities/sources
- https://www.crossref.org/documentation/retrieve-metadata/rest-api/
- https://onlinelibrary.wiley.com/doi/full/10.1002/jrsm.1729
- https://blogs.lse.ac.uk/impactofsocialsciences/2019/12/03/google-scholar-web-of-science-and-scopus-which-is-best-for-me/
