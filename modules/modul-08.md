# Modul 8: Alternative Metriken & Aufmerksamkeit: Altmetrics, Usage, Policy Mentions – sinnvoll nutzen

## Lernziele
- Erklären, was Altmetrics messen (und was nicht): Aufmerksamkeit, Nutzung, Saves, Mentions – nicht automatisch Qualität oder gesellschaftlicher Impact.
- Altmetric Attention Score, PlumX-Kategorien und COUNTER-Usage sauber unterscheiden und korrekt interpretieren.
- Policy Mentions/Policy Citations als Impact-Signal einordnen (Methodik, Limitationen, Kontext).
- Ein transparentes Reporting-Template für alternative Metriken erstellen (Quelle, Zeitraum, Abfragedatum, Regeln, Coverage, Bots/Spam).
- Responsible-Metrics-Leitplanken auf Altmetrics anwenden (klar, transparent, kontextualisiert, fair).

## Kurz erklärt
Altmetrics und Usage-Metriken ergänzen Zitationsmetriken: Sie zeigen, ob Forschung gelesen, gespeichert, diskutiert oder in Policy-Kontexten aufgegriffen wird. Das ist besonders nützlich für frühe Signale (z. B. „Captures“), für Outputs außerhalb klassischer Artikel (Datasets, Preprints) und für Kommunikation. Aber: Aufmerksamkeit ist nicht gleich Qualität. Gute Praxis heißt: Datenquelle, Zeitraum, Regeln, Coverage und mögliche Verzerrungen immer mitliefern – und Altmetrics nie als alleinigen Bewertungsmaßstab verwenden.

## Vertiefung: Altmetrics-Familien – 4 Signaltypen (mit typischen Use-Cases)
**1) Social & Media Attention** (News, Blogs, Social)
- Use-case: Kommunikationsreichweite, Themenresonanz, „public attention“.
- Risiko: Sensations-/Kontroversen-Bias, Bots/Amplification.

**2) Usage** (Views/Downloads)
- Use-case: Nutzung/Interesse an Content (insb. OA, Repositories, Lernressourcen).
- Good practice: Standardisierte COUNTER-Reports nutzen; klare Definitionen (View vs Download).

**3) Captures / Saves** (z. B. Mendeley Readers)
- Use-case: Frühes Signal von akademischem Interesse; kann Zitationen zeitlich vorauslaufen.
- Risiko: Plattformabhängigkeit, Fachbias.

**4) Mentions in Wissens-/Policy-Kontexten** (Wikipedia, Policy documents)
- Use-case: „Evidence uptake“ in Wissens- und Entscheidungskontexten.
- Risiko: Coverage/Indexing, heterogene Dokumenttypen, Zitierpraktiken.

## Vertiefung: Altmetric Attention Score – was steckt dahinter?
Der Altmetric Attention Score ist eine gewichtete Zählung von Aufmerksamkeit. Gewichte hängen von Quellentypen ab (z. B. News höher als einzelne Social-Mentions). Wichtig: Score = Aufmerksamkeit in erfassten Quellen, nicht „Impact“. Für Reporting: immer Score + Quellenaufschlüsselung + Zeitraum + auffällige Peaks (z. B. Medienereignis) dokumentieren.

## Vertiefung: PlumX – 5 Kategorien als saubere Struktur fürs Teaching
PlumX ordnet Metriken in fünf Kategorien: **Citations, Usage, Captures, Mentions, Social Media**. Das ist didaktisch stark: Lernende können bei jedem Output (Artikel, Dataset, Software, Buchkapitel) systematisch fragen, welche Kategorie überhaupt sinnvoll ist – und welche Verzerrungen zu erwarten sind.

## Vertiefung: Usage (COUNTER) – warum Standardisierung zählt
Nutzungsdaten sind nur dann vergleichbar, wenn sie nach einem Standard erzeugt werden. COUNTER liefert Definitionen, Reportstrukturen und Compliance-Regeln. Für Bibliotheken und Uni-Reporting ist das der solide Weg, um Views/Downloads nicht willkürlich zu interpretieren.

## Vertiefung: Policy Mentions – Impact-Signal mit Methodikpflicht
Policy-Mentions können zeigen, dass Forschung in Entscheidungs- oder Guidelines-Kontexten aufgegriffen wird. Tools wie Overton indexieren Policy-Dokumente und verknüpfen dort referenzierte Forschung. Für seriöse Nutzung braucht es: Definition des Policy-Korpus, Transparenz über Abdeckung, Duplikate, Dokumenttypen (Guidelines vs. Whitepaper) und qualitative Plausibilisierung (welche Rolle spielt die Quelle im Dokument?).

## Typische Fehlinterpretationen
- **„Altmetrics zeigen gesellschaftlichen Impact.“** Altmetrics zeigen oft Aufmerksamkeit oder Nutzung; Impact kann dazugehören, muss aber kontextualisiert und zusätzlich belegt werden.
- **„Ein hoher Attention Score = hohe wissenschaftliche Qualität.“** Der Score misst Aufmerksamkeit in erfassten Quellen. Er kann durch Kontroversen, Medienzyklen oder Bots verzerrt sein.
- **„Usage ist objektiver als Zitationen.“** Usage hängt von Plattform, OA-Status, UI/SEO, Kursnutzung und Messstandard ab. Ohne COUNTER/Regeln ist Vergleich riskant.
- **„Policy mentions sind ein harter Beweis für Wirkung.“** Policy-Zitationen sind ein starkes Signal, aber nur mit Korpus-/Dokumenttyp-Transparenz und Kontextanalyse sinnvoll.

## Praxis-Workflow: Alternative Metriken report-tauglich machen
1. Ziel klären: Kommunikation, Monitoring, Impact-Storytelling, Evaluation? (High-stakes => besonders restriktiv).
2. Output-Typ bestimmen: Artikel, Preprint, Dataset, Software, Buchkapitel (nicht jede Metrik passt überall).
3. Quelle(n) wählen und dokumentieren: Altmetric, PlumX, COUNTER-Reports, Overton etc.
4. Parameter fixieren: Abfragedatum, Zeitraum, Identifikatoren (DOI, PMID, ISBN), Versionen (Preprint vs Published).
5. Aufschlüsselung erfassen: Welche Quellen/Events treiben den Wert? (News vs Social vs Policy).
6. Qualitäts-/Risiko-Checks: Bots/Spam, Medienereignis, Duplikate, Fehlzuordnung (Identifier).
7. Report: Methodik-Kasten + Ergebnis (mit Breakdown) + Limitationen + verantwortungsvolle Interpretation.

## Tool-Lab (optional): Offene Event-Daten als Übungsdatensatz
1. Nutze Crossref Event Data als Beispiel für offene Event-Logs rund um DOIs (API-basiert).
2. Ziehe eine kleine Stichprobe (z. B. 50 Events) und klassifiziere sie nach Signaltyp (Attention/Usage/Capture/Mention).
3. Diskutiere Coverage: Welche Plattformen sind drin, welche fehlen? Welche Events sind interpretierbar, welche nicht?

## Responsible Metrics: Altmetrics & Usage
- Altmetrics/Usage nie als alleinige Bewertungsbasis nutzen – besonders nicht für Personenentscheidungen.
- Immer transparent: Quelle, Zeitraum, Abfragedatum, Identifier/Version, Coverage, Regeln (z. B. Gewichtung).
- Kontext liefern: warum gab es Aufmerksamkeit (Medienereignis, Pressemitteilung, Kontroverse)?
- Vergleiche nur mit kompatiblen Datengrundlagen (z. B. COUNTER-konforme Reports).
- Wenn Impact behauptet wird: zusätzliche Evidenz (qualitative Nachweise, Testimonials, konkrete Uptake-Beispiele).

## Übungen

### Level 1
1. **M08-L1-Q1:** Welche Aussage ist am defensibelsten?
   - Altmetrics messen wissenschaftliche Qualität.
   - Altmetrics messen Aufmerksamkeit/Nutzung und müssen kontextualisiert werden.
   - Altmetrics ersetzen Zitationsmetriken vollständig.
   - **Lösung:** Altmetrics messen Aufmerksamkeit/Nutzung und müssen kontextualisiert werden.

2. **M08-L1-Q2:** Welche Kategorie gehört bei PlumX zu "Captures"?
   - Downloads
   - Mendeley Readers
   - Journal Impact Factor
   - **Lösung:** Mendeley Readers

3. **M08-L1-Q3:** Wozu dient COUNTER primär?
   - Zur Berechnung des h-Index.
   - Zur Standardisierung von Nutzungsstatistiken (Usage) für Online-Content.
   - Zur Berechnung von Journalmetriken wie SNIP.
   - **Lösung:** Zur Standardisierung von Nutzungsstatistiken (Usage) für Online-Content.

### Level 2
1. **M08-L2-CLASSIFY-1:** Ordne die Ereignisse einem Signaltyp zu (Attention / Usage / Capture / Mention-Policy):
   - Ein Artikel wird in einem großen Online-News-Portal besprochen.
   - Ein Repository meldet 800 Downloads eines Datasets (COUNTER-konform).
   - 120 Mendeley Readers speichern eine Publikation.
   - Eine Leitlinie (Guideline) einer Behörde zitiert den Artikel.
   - **Lösung:** News-Portal -> Attention; Repository-Downloads -> Usage; Mendeley Readers -> Capture; Behördenleitlinie -> Mention-Policy.
   - **Bewertung:** 2 Punkte: alle 4 korrekt; 1 Punkt: 3 korrekt.

2. **M08-L2-REPORT-1:** Formuliere einen Methodik-Kasten (3–5 Sätze) für einen Altmetrics-Report zu einem Artikel: Quelle, Abfragedatum, Zeitraum, Score + Quellenaufschlüsselung, Limitation (Aufmerksamkeit ≠ Qualität).
   - **Lösungsrahmen:** Quelle (Altmetric/PlumX etc.) nennen; Abfragedatum + betrachteter Zeitraum; Ergebnis immer mit Breakdown (News/Blogs/Policy/Social) nennen; Hinweis: Score ist Aufmerksamkeit in erfassten Quellen; nicht Qualität/Impact-Beweis.
   - **Bewertung:** 1 Punkt: Quelle+Datum. 1 Punkt: Breakdown/Transparenz. 1 Punkt: korrekte Limitation.

3. **M08-L2-CHECK-1:** Plausibilitätscheck: Ein Paper hat plötzlich 3'000 Tweets in 24 Stunden. Nenne 3 Checks, bevor du das als „große Wirkung“ interpretierst.
   - **Lösung:** Beispiele: (1) Event-/Peaks prüfen (Pressemitteilung, kontroverse News, Influencer-Post). (2) Bot-/Spam-Indikatoren (auffällige Konten, Wiederholungsmuster, Koordination). (3) Quellenmix anschauen: nur Social oder auch News/Policy? (4) Identifier korrekt? (falsches Paper verlinkt?).
   - **Bewertung:** 1 Punkt: Bot/Spam-Check. 1 Punkt: Kontext/Peak-Check. 1 Punkt: Quellenmix oder Identifier-Check.

### Level 3
1. **M08-L3-CASE:** Mini-Case: Fakultät will Altmetrics für Leistungsbeurteilung nutzen. Schreibe (a) 6 Risiken und (b) 4 Alternativen, wie Altmetrics verantwortungsvoll eingesetzt werden können (Kommunikation, Impact-Narrative, Monitoring).
   - **Deliverable:** 6 Risiken + 4 Alternativen (Bulletpoints).
   - **Lösungsrahmen:** Risiken: Bots/Gaming, Medien-/Kontroversen-Bias, Coverage-Bias, Feldbias, OA/SEO-Effekte, Fehlanreize, Datenschutz/Plattformabhängigkeit. Alternativen: Altmetrics nur als Kommunikationsindikator; narrative Impact-Statements + Evidenz; Policy-Uptake qualitativ prüfen; COUNTER-Usage für Ressourcenplanung; klare Leitlinie (DORA/Leiden/NISO) und Transparenzpflicht.
   - **Bewertung:** Risiken sind daten- und governance-tauglich (3 Punkte). Alternativen sind praktikabel und verantwortungsvoll (3 Punkte). Responsible-Metrics-Logik sichtbar (Kontext+Transparenz+Fairness) (2 Punkte).

## Quellen
- https://zenodo.org/records/12684249
- https://www.niso.org/publications/rp-25-2016-altmetrics
- https://help.altmetric.com/support/solutions/articles/6000233311-how-is-the-altmetric-attention-score-calculated-
- https://www.altmetric.com/about-us/our-data/donut-and-altmetric-attention-score/
- https://www.elsevier.com/insights/metrics/plumx
- https://cop5.projectcounter.org/_/downloads/en/5.1/pdf/
- https://www.crossref.org/documentation/event-data/
- https://direct.mit.edu/qss/article/3/3/624/112760/Overton-A-bibliometric-database-of-policy-document
- https://sfdora.org/resource/guidance-on-the-responsible-use-of-quantitative-indicators-in-research-assessment/
- https://www.ucl.ac.uk/research/sites/research/files/responsible_use_of_new_and_alternative_metrics.pdf
