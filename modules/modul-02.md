<div class="module-role-panel">
  <p class="module-role-label">Wähle deine Rolle für passende Hinweise:</p>
  <div class="module-role-buttons" role="group" aria-label="Rolle auswählen">
    <button type="button" class="role-toggle-button" data-role="Bibliothek">Bibliothek</button>
    <button type="button" class="role-toggle-button" data-role="Research Office">Research Office</button>
    <button type="button" class="role-toggle-button" data-role="Forschende">Forschende</button>
  </div>
  <div class="module-role-hints">
    <div class="role-hint" data-role="Bibliothek" hidden>
      Hinweis: Baut ein internes Standardblatt: „Welche Datenquelle für welche Frage?“
    </div>
    <div class="role-hint" data-role="Bibliothek" hidden>
      Hinweis: Dokumentiert Coverage-Hinweise sichtbar im Report (z. B. als Methodik-Kasten).
    </div>
    <div class="role-hint" data-role="Bibliothek" hidden>
      Hinweis: Vermeidet Tool-Mix ohne Erklärung: Wenn mehrere Quellen kombiniert werden, müsst ihr Dubletten/IDs klären.
    </div>
    <div class="role-hint" data-role="Research Office" hidden>
      Hinweis: Definiert früh den Zweck: Monitoring ≠ Bewertung. Die Datenquelle hängt am Ziel.
    </div>
    <div class="role-hint" data-role="Research Office" hidden>
      Hinweis: Für Governance: verlangt Standardangaben (Quelle, Zeitraum, Dokumenttypen, Limitationen).
    </div>
    <div class="role-hint" data-role="Research Office" hidden>
      Hinweis: Wenn Ranking-Druck entsteht: nutzt Responsible-Metrics-Checks (Kontext + Multi-Indikator + qualitative Evidenz).
    </div>
    <div class="role-hint" data-role="Forschende" hidden>
      Hinweis: Wenn Zahlen nicht passen: prüfe zuerst Namensvarianten, Affiliations, Dokumenttypen und Zeitraum.
    </div>
    <div class="role-hint" data-role="Forschende" hidden>
      Hinweis: Nutze Kennzahlen in CVs nur mit kurzer Kontextzeile (Quelle + Zeitraum + Feld).
    </div>
    <div class="role-hint" data-role="Forschende" hidden>
      Hinweis: Für Themen-/Kooperationsanalysen können offene Quellen sehr nützlich sein – aber Ergebnisse immer plausibilisieren.
    </div>
  </div>
</div>
<script src="../role-toggle.js" defer></script>

# Modul 2: Datenquellen & Coverage: Woher kommen bibliometrische Zahlen?

## Lernziele
- Die wichtigsten bibliometrischen Datenquellen (z. B. WoS, Scopus, OpenAlex, Crossref, Dimensions, Google Scholar) unterscheiden.
- Verstehen, was „Coverage“ praktisch bedeutet (Disziplinen, Sprachen, Dokumenttypen, Jahre, Indexierungslogik).
- Erklären, warum Publikations- und Zitationszahlen je nach Datenquelle unterschiedlich ausfallen können.
- Eine passende Datenquelle für eine konkrete Fragestellung auswählen und Limitationen korrekt kommunizieren.

## Schlüsselbegriffe
- **Datenquelle:** Ein System/Index, aus dem bibliometrische Daten stammen (z. B. kuratierte Zitationsdatenbank oder offene Metadateninfrastruktur).
- **Coverage (Abdeckung):** Welche Inhalte eine Datenquelle enthält (Zeitschriften, Konferenzen, Bücher, Sprachen, Länder, Jahre, Dokumenttypen).
- **Indexierung:** Wie Inhalte aufgenommen, strukturiert und verknüpft werden (z. B. Zitationslinks, Autor:innen, Institutionen).
- **Kuratiert:** Inhalte werden nach definierten Kriterien ausgewählt und redaktionell betreut (typisch für kommerzielle Zitationsindizes).
- **Offene Infrastruktur:** Offene Daten/Metadaten (z. B. via API), die reproduzierbare Analysen ermöglichen, aber stark von Datenqualität abhängen.
- **Bias:** Systematische Verzerrung in Daten (z. B. Sprache, Region, Disziplin, Dokumenttyp), die Ergebnisse beeinflussen kann.

## Kurz erklärt
Bibliometrische Kennzahlen sind nur so gut wie ihre Datenbasis. Unterschiedliche Datenquellen erfassen unterschiedliche Publikationen, Sprachen und Dokumenttypen – und verknüpfen Zitationen nicht immer gleich. Deshalb können zwei seriöse Systeme für dieselbe Einheit verschiedene Publikations- und Zitierzahlen zeigen. In diesem Modul lernst du, welche Quellen es gibt, wie Coverage entsteht und wie du Ergebnisse transparent und verantwortungsvoll kommunizierst.

## Vertiefung: Die wichtigsten Datenquellen im Überblick
In der Bibliometrie gibt es grob drei Familien von Datenquellen:

**1) Kuratierte Zitationsdatenbanken (z. B. WoS, Scopus)**
- Vorteil: definierte Selektions- und Indexierungslogik, konsistente Metadaten, stabile Auswertungen.
- Risiko: nicht jede Disziplin, Sprache oder Publikationsform ist gleich gut abgedeckt.

**2) Offene Datenquellen (z. B. OpenAlex, Crossref)**
- Vorteil: offen zugänglich, API-basiert, reproduzierbar.
- Risiko: Metadatenqualität ist heterogen; Coverage kann je nach Bereich schwanken.

**3) Suchmaschinen/Plattformen (z. B. Google Scholar)**
- Vorteil: häufig sehr breite Abdeckung.
- Risiko: begrenzte Transparenz (was genau indexiert ist), schwierig für belastbare Evaluation.

**Warum unterscheiden sich Zahlen je nach Quelle?**
- Unterschiedliche Coverage (welche Journals/Konferenzen/Bücher enthalten sind)
- Unterschiedliche Dokumenttypen (z. B. Proceedings, Preprints)
- Unterschiedliche Indexierung (Zitationsverknüpfungen, Duplikate, Normalisierung)

**Merksatz:**
> Eine Kennzahl ohne Angabe der Datenquelle ist unvollständig.

**Mini-Checkliste für jeden Report:**
- Datenquelle(n): …
- Zeitraum: …
- Dokumenttypen: …
- Limitationen/Coverage-Hinweise: …
- Reproduzierbarkeit: Query/Datum dokumentiert: Ja/Nein

## Typische Fehlinterpretationen
- **Mythos:** „Wenn zwei Quellen unterschiedliche Zahlen liefern, ist eine falsch.“
  **Korrektur:** Unterschiede entstehen oft durch Coverage, Dokumenttypen und Indexierungslogik. Der erste Schritt ist die Klärung der Datenbasis.
- **Mythos:** „Mehr Coverage bedeutet automatisch bessere Bibliometrie.“
  **Korrektur:** Breite Abdeckung kann sinnvoll sein – aber Transparenz, Datenqualität und definierte Regeln sind für Evaluation entscheidend.
- **Mythos:** „Wir können jede Disziplin gleich vergleichen.“
  **Korrektur:** Coverage und Zitationskulturen unterscheiden sich stark. Faire Vergleiche brauchen Kontext und oft Normalisierung (späteres Modul).
- **Mythos:** „Tools liefern neutrale Wahrheit.“
  **Korrektur:** Tools spiegeln Entscheidungen über Indexierung, Selektion und Metadatenqualität wider.

## Hinweise nach Zielrolle
**Bibliothek**
- Baut ein internes Standardblatt: „Welche Datenquelle für welche Frage?“
- Dokumentiert Coverage-Hinweise sichtbar im Report (z. B. als Methodik-Kasten).
- Vermeidet Tool-Mix ohne Erklärung: Wenn mehrere Quellen kombiniert werden, müsst ihr Dubletten/IDs klären.

**Research Office**
- Definiert früh den Zweck: Monitoring ≠ Bewertung. Die Datenquelle hängt am Ziel.
- Für Governance: verlangt Standardangaben (Quelle, Zeitraum, Dokumenttypen, Limitationen).
- Wenn Ranking-Druck entsteht: nutzt Responsible-Metrics-Checks (Kontext + Multi-Indikator + qualitative Evidenz).

**Forschende**
- Wenn Zahlen nicht passen: prüfe zuerst Namensvarianten, Affiliations, Dokumenttypen und Zeitraum.
- Nutze Kennzahlen in CVs nur mit kurzer Kontextzeile (Quelle + Zeitraum + Feld).
- Für Themen-/Kooperationsanalysen können offene Quellen sehr nützlich sein – aber Ergebnisse immer plausibilisieren.

## Praxis-Workflow: Datenquelle auswählen
1. Frage klären: Monitoring, Reporting, Trendanalyse oder Evaluation?
2. Analyseobjekt definieren: Person/Institut/Thema + Zeitraum + Publikationstypen.
3. Kandidaten-Datenquellen auswählen (kuratierte DB vs. offen vs. Suchmaschine).
4. Coverage prüfen: Disziplin, Sprache, Bücher/Proceedings, regionale Literatur.
5. Testabfrage durchführen und plausibilisieren (Stichprobe gegen bekannte Publikationen).
6. Bereinigung planen: IDs, Dubletten, Affiliations, Namensvarianten.
7. Ergebnisbericht: immer mit Datenbasis + Limitationen + Datum der Abfrage.

## Responsible-Metrics-Box: Minimum-Transparenz für Datenquellen
- Nenne immer Datenquelle(n), Zeitraum und Dokumenttypen.
- Wenn Zahlen verglichen werden: erkläre Coverage-Unterschiede und warum der Vergleich trotzdem sinnvoll ist (oder nicht).
- Vermeide mechanische Entscheidungen anhand einer einzigen Quelle oder Kennzahl.
- Nutze Bibliometrie als Hinweis-System: Ergebnisse sollten plausibilisiert und kontextualisiert werden.

## Übungen
### Level 1
1. **M02-L1-Q1:** Was bedeutet „Coverage“ in einer bibliometrischen Datenquelle?
   - Wie viele Personen an einem Institut arbeiten.
   - Welche Publikationsarten, Disziplinen, Sprachen und Jahre in der Quelle enthalten sind.
   - Wie hoch der Journal Impact Factor ist.
   **Lösung:** Welche Publikationsarten, Disziplinen, Sprachen und Jahre in der Quelle enthalten sind.

2. **M02-L1-Q2:** Welche Aussage ist am besten im Sinne von Responsible Metrics?
   - Ein Report braucht keine Methodik, Hauptsache die Zahl ist klar.
   - Zu jeder Kennzahl gehören Datenquelle, Zeitraum und Limitationen.
   - Wenn zwei Tools verschieden zählen, nimmt man einfach den höheren Wert.
   **Lösung:** Zu jeder Kennzahl gehören Datenquelle, Zeitraum und Limitationen.

3. **M02-L1-Q3:** Wähle die defensibelste Erklärung: Warum zeigt Quelle A mehr Publikationen als Quelle B?
   - Quelle A hat wahrscheinlich mehr Dokumenttypen oder breitere Abdeckung indexiert.
   - Quelle B ist automatisch falsch.
   - Das Institut hat heimlich Publikationen gelöscht.
   **Lösung:** Quelle A hat wahrscheinlich mehr Dokumenttypen oder breitere Abdeckung indexiert.

4. **M02-L1-Q4:** Was ist ein sinnvoller erster Schritt, bevor du zwei Datenquellen vergleichst?
   - Sofort ein Ranking erstellen.
   - Dokumenttypen und Zeitraum angleichen und Coverage prüfen.
   - Nur nach Gefühl entscheiden, welche Quelle besser ist.
   **Lösung:** Dokumenttypen und Zeitraum angleichen und Coverage prüfen.

5. **M02-L1-Q5:** Warum ist die Datenquelle in jedem Bibliometrie-Report Pflichtangabe?
   - Weil Zahlen nur im Kontext der Coverage interpretierbar sind.
   - Weil sonst das Layout zu leer ist.
   - Weil Kennzahlen überall identisch sind.
   **Lösung:** Weil Zahlen nur im Kontext der Coverage interpretierbar sind.

### Level 2
1. **M02-L2-Q1:** Interpretation: Zwei Quellen liefern unterschiedliche Publikationszahlen. Was schreibst du in den Report (2–3 Sätze, defensiv formuliert)?

   Datensnippet:

   | Einheit | Zeitraum | Quelle | Publikationen |
   | --- | --- | --- | --- |
   | Institut A | 2021–2024 | Quelle 1 | 120 |
   | Institut A | 2021–2024 | Quelle 2 | 155 |

   **Lösung:** Die unterschiedlichen Werte sind wahrscheinlich durch abweichende Coverage (z. B. Dokumenttypen, Journals/Proceedings, Indexierungsregeln) erklärbar. Für die Interpretation ist entscheidend, welche Datenquelle zur Fragestellung passt. Im Report werden Datenquelle, Zeitraum, einbezogene Dokumenttypen und Limitationen transparent dokumentiert.

2. **M02-L2-Q2:** Quelle auswählen: Du brauchst ein reproduzierbares Monitoring-Dashboard ohne Paywall. Welche Datenquelle passt am ehesten und welche Einschränkung nennst du?
   **Lösung:** OpenAlex (API-basiert, offen, reproduzierbar) ist naheliegend. Einschränkung: Coverage und Metadatenqualität können je nach Fachgebiet variieren; deshalb braucht es Plausibilisierung und Dokumentation der Abfrageparameter.

3. **M02-L2-Q3:** Quality Check: Nenne 3 Prüfungen, die du bei einer Publikationsliste aus einer Datenquelle machst, bevor du Kennzahlen berichtest.
   **Lösung:** Beispiele: (1) Dublettenprüfung, (2) Namensvarianten/IDs plausibilisieren, (3) Affiliations prüfen (falsche Zuordnungen), (4) Dokumenttypen filtern (z. B. Editorials/Errata), (5) Zeitraum korrekt gesetzt.

### Level 3
1. **M02-L3-CASE:** Mini-Case: Du sollst für eine Fakultät einen Vergleich „Publikationsoutput 2020–2024“ erstellen. Definiere deine Datenbasis (Quelle(n), Dokumenttypen, Zeitraum) und formuliere 4 Limitationen/Warnhinweise, die du transparent kommunizierst.
   **Deliverable:** Methodik-Kasten (Quelle/Zeitraum/Dokumenttypen) + 4 Limitationen (Bulletpoints).

## Quellen & weiterführende Links
- Clarivate: Web of Science Core Collection – Content collection and indexing process: https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/web-of-science-core-collection/content-collection-and-indexing-process/
- Elsevier: Scopus Content Coverage Guide (PDF): https://assets.ctfassets.net/o78em1y1w4i4/EX1iy8VxBeQKf8aN2XzOp/c36f79db25484cb38a5972ad9a5472ec/Scopus_ContentCoverage_Guide_WEB.pdf
- OpenAlex Documentation: API Overview: https://docs.openalex.org/how-to-use-the-api/api-overview
- Crossref Documentation: Metadata Retrieval: https://www.crossref.org/documentation/retrieve-metadata/
- CWTS (Leiden): Bibliometrics for Research Management (PDF): https://www.cwts.nl/pdf/CWTS_bibliometrics.pdf
- Gusenbauer & Haddaway (2020): Suitable academic search systems (PubMed): https://pubmed.ncbi.nlm.nih.gov/31614060/
- Gusenbauer (2024): Beyond Google Scholar, Scopus, and WoS: https://onlinelibrary.wiley.com/doi/full/10.1002/jrsm.1729

### Weiterführende Lektüre
- López-Cózar (2018): Google Scholar as bibliographic tool (arXiv PDF): https://arxiv.org/pdf/1806.06351
- Dimensions Support: What is covered in Publications?: https://plus.dimensions.ai/support/solutions/articles/23000018859-what-exactly-is-covered-in-the-publications-in-dimensions-
