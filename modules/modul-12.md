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

## Übungen (Level 1–3)
- **Level 1:** High-stakes-Aussage identifizieren und die 5 DORA-Prinzipien benennen.
- **Level 2:** Dashboard-Spezifikation (max. 12 Bulletpoints) für ein Institut schreiben; kritische Review eines Rankings (5 Probleme + 3 Verbesserungen).
- **Level 3:** Bewertungs-Set für eine Berufungskommission entwerfen (qualitative Kriterien, kontextualisierte Metriken, Narrative Template).

## Quellen & weiterführende Links
- https://www.ukri.org/wp-content/uploads/2021/12/RE-151221-TheMetricTideFullReport2015.pdf
- https://sfdora.org/wp-content/uploads/2024/05/DORA_indicators_guidance.pdf
- https://www.nature.com/articles/520429a
- https://www.coara.org/wp-content/uploads/2025/11/2022_07_19_rra_agreement_final.pdf-3.pdf
- https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000737
- https://www.ukri.org/apply-for-funding/develop-your-application/resume-for-research-and-innovation-r4ri-guidance/
- https://www.unesco.it/wp-content/uploads/2023/11/RECOMMENDATION-ON-OPEN-SCIENCE-2021-Certified.pdf
