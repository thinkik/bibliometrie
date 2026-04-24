# Modul 12: Forschungsbewertung in der Praxis: Reporting-Patterns, Dashboards, Use-Cases (Unit/Faculty/Person) + Do/Don’t-Katalog

## Lernziele
- Zwischen Monitoring, Learning/Improvement und High-stakes Evaluation unterscheiden (und passende Methoden wählen).
- Responsible-Metrics-Leitplanken (DORA/Leiden/Metric Tide/CoARA/HKP) in konkrete Reporting- und Dashboard-Designs übersetzen.
- Dashboards so spezifizieren, dass sie transparent, auditierbar und fair sind (Quelle, Stichtag, Coverage, Counting, Unsicherheit).
- Typische Fehlanreize und Governance-Risiken erkennen und vermeiden (Gaming, Goodhart, Field-bias, Ranking-Falle).
- Für drei Ebenen (Institution/Unit, Faculty/Group, Person) passende Indikator-Sets und Narrative-Elemente entwerfen.

## Kurz erklärt
Dashboards und Reports sind nie neutral: Sie formen Entscheidungen. Gute bibliometrische Praxis beginnt daher mit dem Use-Case (Monitoring vs. High-stakes), arbeitet mit einem kleinen, ausgewogenen Indikatorenset, ergänzt qualitative Beurteilung (Peer Review/Narrative Evidence) und dokumentiert die Methodik vollständig (Quelle, Stichtag, Coverage, Counting, Limitationen).

## Schlüsselbegriffe
- **Low-stakes monitoring:** Monitoring zur Orientierung/Verbesserung (z. B. Portfolio-Entwicklung, OA-Anteile), ohne direkte Konsequenzen für Einzelpersonen.
- **High-stakes assessment:** Bewertung mit direkten Konsequenzen (Hiring/Promotion, Mittelzuweisung, Ranking-Entscheide). Erfordert besonders strenge Leitplanken.
- **Responsible metrics:** Rahmen, der Metriken als unterstützende Evidenz versteht und Transparenz, Kontext, Fairness, Expertise und Reproduzierbarkeit verlangt.
- **Goodhart’s law (in der Praxis):** Wenn ein Indikator zum Ziel wird, verliert er Informationsgehalt (Gaming/Optimierung auf Zahl statt Qualität).
- **Source disclosure / Methodikbox:** Standardisierte Offenlegung von Datenquelle, Stichtag, Query/Exportregeln, Counting, Limitationen und Reproduzierbarkeit.
- **Narrative CV:** Narratives Format (z. B. UKRI R4RI), um Beiträge, Rollen, Open Science, Team Science, Mentoring etc. sichtbar zu machen – als Ergänzung zu Zahlen.

## Assessment-Spektrum: Wähle das passende Instrument
**A — Monitoring & Learning (low-stakes)**
- **Typische Entscheidungen:** Portfolio-Entwicklung, OA-Strategie, Kooperationsanalyse, Feld-/Themenmonitoring.
- **Empfohlene Evidenz:** Zeitreihen, feld-normalisierte Indikatoren auf Aggregat, Open Science/Output-Diversität, qualitative Kontextnotizen.
- **Strenge:** mittel.

**B — Priorisierung & Ressourcendialog (medium-stakes)**
- **Typische Entscheidungen:** Schwerpunktsetzung, Ressourcenargumentation, Programm-Review.
- **Empfohlene Evidenz:** Triangulation mehrerer Quellen, Benchmarks innerhalb Fachgruppen, Stichproben-QA + Audit-Trail, kurze Peer-Review-/Expert:innen-Notizen.
- **Strenge:** hoch.

**C — Hiring/Promotion/Funding (high-stakes)**
- **Typische Entscheidungen:** Berufungen, Tenure/Promotion, Projektförderung.
- **Empfohlene Evidenz:** primär qualitative Beurteilung (Peer Review), Narrative CV + Evidenz, kontextualisierte, sparsame Metriken (nicht mechanisch), strikte Fairness-/Bias-Checks.
- **Strenge:** maximal.

## Reporting-Patterns: 5 bewährte Muster
1. **Deskriptives Profil (What we do):** Transparente Bestandsaufnahme ohne Rankingdruck.
   - Widgets: Output-Mix (Artikel/Bücher/Datasets/Software), OA-Anteil, Collaboration (int./nat.), Top-Felder/Keywords (mapping-light).
2. **Kontextualisierte Benchmark (How we compare, responsibly):** Vergleich nur innerhalb sinnvoller Fachgruppen und mit Coverage-Hinweisen.
   - Widgets: Field-normalized impact (Aggregat), Top-x% Indikatoren (Aggregat), Produktivität pro FTE (nur wenn valide), Confidence-/Missingness-Box.
3. **Diagnose & QA (Why numbers differ):** Fehlerquellen sichtbar machen (Affiliations, Dubletten, Coverage).
   - Widgets: DOI/ORCID/ROR-Quote, Missing affiliations, Dublettenzahl, Quelle-Vergleich (Triangulation).
4. **Impact Storyboard (Evidence, not vibes):** Wirkung als belegte Story: Policy/Uptake/Use in Praxis + qualitative Evidenz.
   - Widgets: Policy mentions (mit Kontext), Usage (COUNTER), Selected case studies, Narrative evidence + Links.
5. **Improvement Loop (Measure → Learn → Adjust):** Indikatoren als Feedback für Prozesse (Open Science, Data sharing, reproducibility).
   - Widgets: OS-Praktiken (OA, Data availability), Narrative contributions (Mentoring, Team Science), jährliche Indikator-Review-Notiz.

## Dashboard-Blueprint (minimal, aber robust)
**Header / Disclosure**
- Datenquelle(n) + Stichtag + Query/Exportparameter.
- Zeitraum + Doc types + Counting (full/fractional).
- Coverage-Hinweis + Missingness/Unsicherheit.
- Kontakt/Feedback-Kanal (Korrekturen möglich).

**KPI-Kern (max. 8 KPIs)**
- Output-Mix (divers).
- OA-Anteil.
- Field-normalized citation indicator (nur Aggregat).
- Top-x% Indikator (nur Aggregat).
- Kooperationsindikator.
- Policy/Practice uptake (qualifiziert, nicht nur Zahl).
- Usage (COUNTER, wo verfügbar).
- Data quality: DOI/ORCID/ROR-Quote.

**Drill-down (mit Leitplanken)**
- Keine Einzelpersonen-Rankings im Default-View.
- Drill-down nur mit Kontext (Feld, Zeitraum, Rolle, Output-Typ).
- Jede Tabelle exportierbar + mit Methodik-Hinweisen.

## Do / Don’t-Katalog (für Website & Schulung)
**Do**
- Use-case zuerst, Indikatoren danach (Monitoring ≠ Evaluation).
- Immer Methodikbox + Stichtag + Quelle(n) offenlegen.
- Feldkontext nutzen (Vergleiche nur innerhalb sinnvoller Gruppen).
- Kleine, ausgewogene Indikator-Sets + qualitative Ergänzung.
- QA sichtbar machen (Missingness, Dubletten, Disambiguierung).
- Regelmäßige Indikator-Reviews (weiterentwickeln, nicht versteinern).

**Don’t**
- Mechanische Schwellen („JIF>…“, „h-index>…“) als harte Kriterien.
- Personen/Artikel mit Journalmetriken bewerten.
- Dashboards als Ranglistenmaschinen bauen (Goodhart/Gaming).
- Quellen mischen ohne Triangulation/Erklärung (Coverage-Fallen).
- Zahlen ohne Unsicherheit/Missingness präsentieren.
- „Impact“ behaupten ohne Evidenz (Fallbeispiele, Uptake-Nachweise).

## Governance-Check: Wer entscheidet was?
- Policy: Welche Entscheidungen sind high-stakes? (=> strengste Leitplanken)
- Roles: Wer ist Data Steward? Wer verantwortet Methodik/QA?
- Appeals: Korrekturweg für falsch zugeordnete Outputs/Affiliations.
- Transparency: Veröffentlichung von Methodik & Versionen.
- Fairness: Feld-/Karrierephase-/Rollen-Dimensionen explizit berücksichtigen.

## Responsible Metrics – Kurzrahmen (kombiniert, praxistauglich)
- Metriken unterstützen qualitative Beurteilung (Leiden).
- Klar, transparent, spezifisch, kontextualisiert, fair (DORA-Guidance).
- Reformpfad: Vielfalt der Beiträge anerkennen, qualitative Urteile zentral (CoARA).
- Integrität/Transparenz/Open Science belohnen (Hong Kong Principles/UNESCO OS).
- Framework „Responsible Metrics“ operationalisieren (Metric Tide).

## Übungen

### Level 1 Q1–Q5

**M12-L1-Q1 – High-stakes erkennen**  
Aufgabe: Welche Situation ist ein High-stakes-Use-Case?  
A) Berufungsentscheidung.  
B) Interne Lernanalyse ohne Konsequenzen.  
C) Themenmonitoring für eine Bibliotheksschulung.  
Lösung: A.

**M12-L1-Q2 – Monitoring vs. Evaluation**  
Aufgabe: Warum muss zwischen Monitoring und Evaluation unterschieden werden?  
Lösung: Weil die Anforderungen an Evidenz, Fairness, Transparenz und qualitative Beurteilung bei Entscheidungen mit Konsequenzen deutlich höher sind.

**M12-L1-Q3 – Goodhart’s Law**  
Aufgabe: Was beschreibt Goodhart’s Law im Kontext von Forschungsbewertung?  
Lösung: Wenn eine Kennzahl zum Ziel wird, kann sie ihren Informationsgehalt verlieren, weil Verhalten auf die Optimierung der Kennzahl ausgerichtet wird.

**M12-L1-Q4 – Dashboard-Leitplanke**  
Aufgabe: Welche Designentscheidung ist verantwortungsvoll?  
A) Keine Personenrankings im Default-View.  
B) Automatisches Ranking aller Forschenden nach h-Index.  
C) Journal Impact Factor als Personenmetrik.  
Lösung: A.

**M12-L1-Q5 – Narrative Evidence**  
Aufgabe: Wozu dient Narrative Evidence?  
Lösung: Sie ergänzt Kennzahlen durch qualitative Beiträge, Rollen, Open-Science-Aktivitäten, Teamarbeit, Mentoring und Wirkungskontexte.

### Level 2 Q1–Q3

**M12-L2-Q1 – Dashboard-Spezifikation**  
Aufgabe: Entwirf ein Dashboard für ein Institut mit maximal acht KPIs. Die KPIs dürfen keine Personenrankings erzeugen.  
Lösungsskizze: Output-Mix, OA-Anteil, feldnormalisierter Impact auf Aggregatsebene, PP(top 10%), internationale Kooperation, Policy/Practice Uptake, COUNTER Usage, Datenqualität (DOI/ORCID/ROR-Quote).  
Bewertung: 4 Punkte für geeignete KPIs, 2 Punkte für Aggregatlogik, 2 Punkte für Responsible-Metrics-Hinweise.

**M12-L2-Q2 – Ranking kritisch prüfen**  
Aufgabe: Ein internes Dashboard zeigt eine Rangliste aller Forschenden nach h-Index. Nenne fünf Probleme und drei Verbesserungen.  
Lösung:
Probleme: Feldbias; Karrierelängenbias; Datenquellenabhängigkeit; Fehlanreiz/Gaming; Personenranking ohne Kontext; ignoriert Rollen/Beiträge; Benachteiligung von Early-Career-Forschenden.  
Verbesserungen: keine Default-Rankings; qualitative Narrative ergänzen; Vergleichsgruppen nach Feld/Karrierephase; Methodikbox; Datenqualitätsanzeige; Peer Review zentral halten.  
Bewertung: 5 Punkte Probleme, 3 Punkte Verbesserungen.

**M12-L2-Q3 – Governance-Check**  
Aufgabe: Erstelle einen Governance-Check für ein Forschungsdashboard mit mindestens sechs Fragen.  
Lösungsvorschlag:
- Welche Entscheidungen werden mit dem Dashboard unterstützt?
- Sind Entscheidungen low-, medium- oder high-stakes?
- Wer verantwortet Datenquelle und Methodik?
- Gibt es einen Korrekturprozess für falsch zugeordnete Publikationen?
- Werden Datenquelle, Stichtag, Coverage und Counting offengelegt?
- Gibt es Fairness-Checks nach Feld, Karrierephase und Rolle?
- Werden Indikatoren regelmäßig überprüft?
- Wird qualitative Evidenz einbezogen?
Bewertung: 1 Punkt pro sinnvoller Frage, maximal 6 Punkte.

### Level 3

**M12-L3-CASE – Bewertungs-Set für Berufungskommission**  
Aufgabe: Eine Berufungskommission möchte bibliometrische Informationen nutzen. Entwirf ein verantwortungsvolles Bewertungs-Set.

Deliverable:
- Zweck und Grenzen der Kennzahlen
- qualitative Hauptkriterien
- kleine Auswahl kontextualisierter Metriken
- Narrative-CV-Elemente
- Fairness-Checks
- Methodikbox
- Do/Don’t-Liste für die Kommission

Lösungsskizze:
- Zweck: Kennzahlen nur als Kontext, nicht als Entscheidungsautomat.
- Qualitative Hauptkriterien: wissenschaftliche Qualität, Originalität, methodische Solidität, Beitrag zur Fachcommunity, Lehre/Mentoring, Open Science, Team Science.
- Metriken: feldnormalisierte Aggregatsignale, ausgewählte Publikationsliste, ggf. Top-x%-Anteil, keine Journalmetrik für Einzelartikel.
- Narrative-CV-Elemente: wichtigste Beiträge, Rolle in Teamarbeiten, Daten/Software, Open-Science-Beiträge, Wirkung in Praxis/Policy.
- Fairness: Fach, Karrierephase, Unterbrüche, Teilzeit, Publikationstypen, Sprache, Datenquellen-Coverage.
- Methodikbox: Quelle, Stichtag, Zeitraum, Dokumenttypen, Counting, Disambiguierung, Limitationen.
- Don’t: kein JIF-Filter, kein h-Index-Ranking, keine mechanischen Schwellen.

Bewertung:
- 3 Punkte qualitative Kriterien.
- 2 Punkte passende Metriken.
- 2 Punkte Fairness/Responsible Metrics.
- 2 Punkte Methodikbox.
- 1 Punkt klare Don’ts.



## Quellen & weiterführende Links
- https://www.ukri.org/wp-content/uploads/2021/12/RE-151221-TheMetricTideFullReport2015.pdf
- https://sfdora.org/wp-content/uploads/2024/05/DORA_indicators_guidance.pdf
- https://www.nature.com/articles/520429a
- https://www.coara.org/wp-content/uploads/2025/11/2022_07_19_rra_agreement_final.pdf-3.pdf
- https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000737
- https://www.ukri.org/apply-for-funding/develop-your-application/resume-for-research-and-innovation-r4ri-guidance/
- https://www.unesco.it/wp-content/uploads/2023/11/RECOMMENDATION-ON-OPEN-SCIENCE-2021-Certified.pdf
