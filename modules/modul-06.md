# Modul 6: Feld- & Zeit-Normalisierung: CNCI, FWCI, MNCS, RCR und Top-10%-Indikatoren

## Lernziele
- Erklären, warum Feld- und Zeit-Normalisierung nötig ist (und was ohne Normalisierung schiefgeht).
- Die Logik von expected citations, NCS und Aggregationen (MNCS, Percentile/Top-x%) verstehen.
- CNCI, FWCI und RCR als unterschiedliche Normalisierungsansätze unterscheiden und korrekt interpretieren.
- Counting-Methoden (full vs. fractional) als relevanten Design-Entscheid für feld-normalisierte Analysen einordnen.
- Feld-normalisierte Kennzahlen transparent berichten (Quelle, Referenzset, Fenster, Dokumenttypen, Regeln, Limitationen).

## Kurz erklärt
Feld- und zeit-normalisierte Kennzahlen beantworten die Frage: „Wie wurde eine Publikation (oder ein Set) zitiert – im Vergleich zu dem, was für ähnliche Publikationen erwartbar ist?“ Ohne Normalisierung sind Vergleiche zwischen Feldern oder zwischen älteren und jüngeren Publikationen oft unfair. Normalisierung ist daher ein Kerninstrument für Monitoring und Benchmarking – aber nur, wenn Datenbasis, Referenzset und Regeln transparent dokumentiert sind.

## Begriffe
- **Expected citations (Erwartungswert):** Erwartete Zitierungen für eine Publikation basierend auf einem Referenzset (z. B. gleiche Fachkategorie, Publikationsjahr, Dokumenttyp).
- **NCS (Normalized Citation Score):** NCS = tatsächliche Zitierungen / erwartete Zitierungen. Werte >1 bedeuten über dem Erwartungswert, <1 darunter.
- **MNCS (Mean Normalized Citation Score):** Durchschnitt der NCS-Werte einer Publikationsmenge (z. B. Institut/Uni). Durchschnitt = 1 entspricht Referenzset/„Weltmittel“.
- **CNCI (Category Normalized Citation Impact):** Clarivate/InCites: tatsächliche Zitierungen dividiert durch erwartete Zitierungen für gleiche Fachkategorie(n), Jahr und Dokumenttyp.
- **FWCI (Field-Weighted Citation Impact):** Elsevier/SciVal: Zitierungen relativ zu erwarteten Zitierungen für „ähnliche“ Publikationen (Feld, Jahr, Dokumenttyp).
- **RCR (Relative Citation Ratio):** NIH/iCite: feld- und zeit-normalisierte Zitationsrate auf Artikelebene; Feld wird dynamisch über Co-Citation-Network definiert.
- **Top-x%-Indikator (z. B. PP(top 10%)):** Anteil der Publikationen, die im Vergleich zu ähnlichen Publikationen (gleiches Feld & Jahr) zu den top x% am häufigsten zitierten gehören.
- **Referenzset:** Die Vergleichsmenge, aus der erwartete Zitierungen/Percentiles abgeleitet werden (z. B. gesamte Datenbank, spezifische Felder, Dokumenttypen).
- **Full counting:** Jede Publikation zählt vollständig für jede beteiligte Einheit (z. B. jedes Institut erhält 1.0).
- **Fractional counting:** Publikationen werden anteilig verteilt (z. B. nach Autor:innen oder Adressen), um Verzerrungen in Aggregationen zu reduzieren.

## Vertiefung: Drei Normalisierungsfamilien
**1) Kategorie-/Feldbasierte Expected-Citation-Modelle (CNCI/FWCI, MNCS/NCS)**
- Du definierst „ähnlich“ über Fachkategorie(n), Jahr und Dokumenttyp.
- Dann: NCS = actual / expected.
- Aggregationen: MNCS (Mittel der NCS), oder Summen/Anteile.

**2) Dynamische Felder über Zitationsnetzwerke (RCR)**
- Feld wird pro Artikel aus dem Co-Citation-Network abgeleitet.
- Ergebnis ist artikelbasiert und zeit-normalisiert.

**3) Percentile-/Top-x%-Indikatoren (PP(top 10%))**
- Statt Durchschnittszitationen nutzt du die Frage: „Gehört die Publikation zu den top x% in Feld & Jahr?“
- Vorteil: robust gegen extreme Ausreißer; gut für institutionelle Reports.

**Wichtig: Counting-Methoden**
Bei institutionellen Vergleichen beeinflusst full vs. fractional counting die Feld-Normalisierung und kann systematische Verzerrungen erzeugen. Für feld-normalisierte Studien ist die Counting-Entscheidung deshalb methodisch relevant (nicht nur „Reporting-Style“).

## Typische Fehlinterpretationen
- **„Normalisiert = perfekt fair.“** Normalisierung reduziert Verzerrungen, ersetzt aber nicht Kontext (Feldabgrenzung, Dokumenttypen, Datenqualität, Output-Mix).
- **„CNCI/FWCI/RCR messen das Gleiche.“** Sie nutzen unterschiedliche Referenzsets und Felddefinitionen (Kategorien vs. dynamisches Netzwerk). Ergebnisse sind nicht 1:1 austauschbar.
- **„Ein Wert von 2.0 heißt: doppelt so gut.“** Es heißt: doppelt so hoch wie erwartet zitiert (bezogen auf das Referenzset). Es ist kein Qualitätsurteil.
- **„Counting ist egal.“** Bei multi-affiliierten Publikationen kann full counting Aggregationen verzerren; fractional counting kann fairere Vergleiche ermöglichen (je nach Ziel).

## Praxis-Workflow: Feld-normalisierten Impact berichten
1. Fragestellung klären: Artikel-/Autor:innen-/Institutslevel? Monitoring oder Evaluation?
2. Datenquelle + Referenzset festlegen (und im Report sichtbar machen).
3. „Ähnlichkeit“ definieren: Feld/Kategorien, Jahr, Dokumenttyp; Zitationsfenster festlegen.
4. Counting-Regel festlegen (full vs. fractional) – besonders bei institutionellen Vergleichen.
5. Kennzahl wählen: (a) NCS/MNCS, (b) CNCI/FWCI, (c) PP(top 10%), (d) RCR (artikelbasiert).
6. Plausibilisierung: Ausreißer, Dokumenttypen-Mix, Feldzuordnung, Dubletten/Disambiguierung.
7. Report: Methodik-Kasten + Limitationen + Responsible-Metrics-Hinweis.

## Responsible Metrics: Normalisierte Kennzahlen
- Immer angeben: Datenquelle, Referenzset, Jahr(e), Dokumenttypen, Zitationsfenster, Counting-Regel.
- Vergleiche nur innerhalb sinnvoller Gruppen (z. B. Karrierephase, Feldcluster, Output-Mix).
- Top-x%-Indikatoren sind oft robuster für Institutionen als reine Mittelwerte (Ausreißer-Effekt).
- Bei Entscheidungen mit Konsequenzen: Normalisierte Kennzahlen nur zusammen mit qualitativen Verfahren nutzen.

## Übungen

### Level 1
1. **M06-L1-Q1:** Was bedeutet ein normalisierter Wert von 1.0 (z. B. CNCI/FWCI/MNCS) am häufigsten?
   - Genau 1 Zitation.
   - Zitationen entsprechen dem Erwartungswert für ähnliche Publikationen im Referenzset.
   - Die Publikation ist im Top-1%.
   - **Lösung:** Zitationen entsprechen dem Erwartungswert für ähnliche Publikationen im Referenzset.

2. **M06-L1-Q2:** Welche Kennzahl ist ein Percentile-/Top-x%-Indikator?
   - MNCS
   - PP(top 10%)
   - NCS
   - **Lösung:** PP(top 10%)

3. **M06-L1-Q3:** Welche Aussage passt am besten zu RCR?
   - RCR normalisiert über starre Fachkategorien im Journal-Set.
   - RCR definiert Felder dynamisch über Co-Citation-Networks und ist artikelbasiert.
   - RCR ist eine Journalmetrik wie der JIF.
   - **Lösung:** RCR definiert Felder dynamisch über Co-Citation-Networks und ist artikelbasiert.

### Level 2
1. **M06-L2-CALC-1:** Berechne NCS: Eine Publikation hat 15 Zitationen. Erwartungswert (expected) für gleiche Kategorie, Jahr und Dokumenttyp ist 10. Wie groß ist NCS?
   - **Lösung:** NCS = 15 / 10 = 1.5
   - **Bewertung:** 1 Punkt: korrekte Rechnung und Ergebnis.

2. **M06-L2-CALC-2:** Berechne MNCS: Vier Publikationen haben NCS-Werte 0.8, 1.2, 2.0, 1.0. Wie groß ist MNCS?
   - **Lösung:** MNCS = (0.8 + 1.2 + 2.0 + 1.0) / 4 = 1.25
   - **Bewertung:** 1 Punkt: korrekter Wert. 1 Punkt: korrekte Rechnung.

3. **M06-L2-CALC-3:** PP(top 10%): In einem Set von 50 Publikationen sind 9 im Top-10% ihrer Feld&Jahr-Referenzsets. Wie groß ist PP(top 10%)?
   - **Lösung:** PP(top 10%) = 9 / 50 = 0.18 (= 18%)
   - **Bewertung:** 1 Punkt: korrekter Anteil. 1 Punkt: korrekte Prozentangabe.

4. **M06-L2-INTERPRET:** Interpretation: Ein Institut hat MNCS = 1.6 und PP(top 10%) = 14%. Nenne 2 vorsichtige Interpretationen (ohne Qualitätsurteil).
   - **Lösung:** Beispiele: (1) Die Publikationen werden im Mittel häufiger zitiert als im jeweiligen Feld&Jahr erwartet (MNCS>1). (2) Der Anteil sehr hochzitierter Publikationen liegt über der „Top-10%-Baseline“ von 10% (14% statt 10%), was auf überdurchschnittliche Sichtbarkeit/Resonanz hindeuten kann – abhängig von Datenbasis, Output-Mix und Counting-Regeln.
   - **Bewertung:** 1 Punkt: MNCS defensibel erklärt. 1 Punkt: PP(top10) defensibel erklärt.

### Level 3
1. **M06-L3-CASE:** Mini-Case: Du sollst zwei Departemente vergleichen (2020–2024). Liefere (a) einen Methodik-Kasten (Quelle, Referenzset, Dokumenttypen, Fenster, Counting-Regel) und (b) 6 Limitationen/Warnhinweise, die speziell für feld-normalisierte Vergleiche relevant sind.
   - **Deliverable:** Methodik-Kasten + 6 Limitationen (Bulletpoints).
   - **Lösungsrahmen:**
     - Methodik: Datenquelle(n), Abfragedatum, Zeitraum 2020–2024, Dokumenttypen (Article/Review getrennt), Zitationsfenster, Referenzset (Feld&Jahr), Kennzahlen (z. B. MNCS + PP(top10)), Counting (full vs. fractional).
     - Limitationen: Feldabgrenzung/Kategorien, Output-Mix (Reviews), Datenqualitätsprobleme (Disambiguierung/Affiliation), Coverage-Bias der Quelle, Zeitdynamiken (Fenster), counting-bedingte Verzerrungen, Ausreißer/Skewness, Interdisziplinarität (Mehrfachkategorien).
   - **Bewertung:**
     - Methodik ist vollständig (Quelle+Referenzset+Fenster+Dokumenttypen+Counting): 3 Punkte.
     - Limitationen sind konkret und feld-normalisierungsspezifisch: 3 Punkte.
     - Responsible-Metrics-Transparenz ist sichtbar: 2 Punkte.

## Quellen
- https://incites.zendesk.com/hc/en-gb/articles/25087312115601-Category-Normalized-Citation-Impact-CNCI
- https://supportcontent.elsevier.com/RightNow%20Next%20Gen/SciVal/ACAD_RL_ElsevierResearchMetricsBook_WEB.pdf
- https://traditional.leidenranking.com/information/indicators
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3081055/
- https://arxiv.org/abs/1501.04431
- https://support.icite.nih.gov/hc/en-us/articles/9105587565851-Relative-Citation-Ratio-RCR
- https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002541

## Weiterführende Literatur
- https://www.cwts.nl/blog?article=n-q2w274
- https://www.cwts.nl/TvR/documents/TonvR%281%29.pdf
