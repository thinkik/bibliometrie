# Modul 7: Collaboration & Co-Authorship: Indikatoren, Fractional Counting und Co-Authorship Networks

## Lernziele
- Co-Authorship als Messkonzept erklären (und seine Grenzen benennen).
- Wichtige Kollaborationsindikatoren korrekt berechnen (domestic/international/industry; Anteile/Quoten).
- Full vs. fractional counting unterscheiden und die Auswirkungen auf Output-, Impact- und Netzwerk-Analysen verstehen.
- Hyperauthorship als Sonderfall erkennen und methodisch sauber behandeln.
- Einen Collaboration-Report transparent dokumentieren (Datenquelle, Regeln, Counting, Limitationen).

## Kurz erklärt
Kollaboration wird in der Bibliometrie häufig über Co-Authorship gemessen. Das ist praktisch, weil es aus Metadaten ableitbar ist – aber nicht identisch mit „echter Zusammenarbeit“. Für institutionelle Vergleiche ist entscheidend, wie du zählst: Full counting erhöht Output bei Kooperationen; fractional counting verteilt Kredit und reduziert Mehrfachzählungen. In Netzwerken (Co-Authorship Networks) wirken Counting-Regeln und Hyperauthorship besonders stark – daher braucht es klare Methodik und transparente Berichte.

## Begriffe
- **Co-authorship:** Gemeinsame Autorschaft als Proxy für Zusammenarbeit; gemessen über Publikationen mit mehreren Autor:innen/Organisationen.
- **International collaboration:** Publikationen mit Co-Autor:innen bzw. Institutionen aus mehr als einem Land.
- **Domestic collaboration:** Publikationen mit mehreren Institutionen im selben Land (keine internationalen Co-Autor:innen).
- **Industry collaboration:** Publikationen mit mindestens einer Corporate-/Industry-Affiliation (Definition je Plattform/Unification-Status).
- **Collaboration rate:** Anteil kollaborativer Publikationen (z. B. % International Collab = International collab papers / total papers).
- **Full counting:** Jede beteiligte Einheit erhält volle Zählung (1.0) pro Publikation; führt bei Kooperationen zu Mehrfachzählungen.
- **Fractional counting:** Kredit wird auf Einheiten aufgeteilt (z. B. nach Autor:innen, Adressen oder Organisationen), um Mehrfachzählungen zu reduzieren.
- **Binary collaboration counting:** Pro Einheit gilt: kollaboriert (1) oder nicht (0); eine Publikation zählt maximal einmal pro Einheit/Pairing.
- **Co-authorship network:** Netzwerk aus Knoten (z. B. Autor:innen/Orgs/Länder) und Kanten (Co-Authorship-Links), meist gewichtet nach Anzahl gemeinsamer Publikationen.
- **Link strength:** Stärke einer Kante im Netzwerk (z. B. Anzahl gemeinsamer Publikationen; ggf. fractionally gewichtet).
- **Hyperauthorship:** Publikationen mit ungewöhnlich vielen Autor:innen (z. B. Konsortien), die Kennzahlen und Netzwerke stark verzerren können.

## Vertiefung: Indikatoren – was wird gezählt?
Typische Indikatoren sind Anteile kollaborativer Publikationen (z. B. % International Collaboration), domestic vs. international, sowie Industry Collaboration. Wichtig: Plattformen definieren diese Kategorien unterschiedlich (z. B. über Adressen/Organisationen, Unification-Status, Corporate-Typen). Zusätzlich gibt es zwei verbreitete Zähllogiken: (a) Anteile/Quoten auf Basis von Publikationsmengen und (b) Paar-bezogene Kollaborationszählungen (z. B. Land A–B), oft als binär gezählt (kollaboriert ja/nein), um Doppelzählung zu reduzieren.

## Vertiefung: Counting – full vs. fractional (und warum das nicht nur „Reporting-Style“ ist)
**Full counting:** Jede beteiligte Einheit bekommt 1.0 pro Publikation. Das macht Kooperationen „größer“ und kann Rankings/Benchmarks verzerren.

**Fractional counting:** Kredit wird geteilt (z. B. 1/N nach Autor:innen oder anteilig nach Organisationen/Adressen). Dadurch wird Output bei großen Kooperationen nicht automatisch überproportional aufgeblasen.

Für viele Zwecke (z. B. institutionelle Vergleiche) ist fractional counting methodisch attraktiver, weil es systematische Verzerrungen durch unterschiedliche Kooperationskulturen reduziert.

## Vertiefung: Co-Authorship Networks – was zeigen sie (und was nicht)?
Ein Co-Authorship Network hat Knoten (z. B. Autor:innen, Organisationen, Länder) und Kanten (gemeinsame Publikationen). Die Kanten können gewichtet sein (z. B. Anzahl gemeinsamer Publikationen) und lassen sich mit Tools wie VOSviewer visualisieren. Wichtig: Hyperauthored papers können zentrale Netzwerkmetriken stark aufblasen. Zwei typische Gegenmaßnahmen sind (a) definierte Cutoffs/Filter und/oder (b) fractional weighting.

## Typische Fallen & Fehlinterpretationen
- **„Co-Authorship = echte Zusammenarbeit.“** Co-Authorship ist ein Proxy: Er misst gemeinsame Autorschaft, nicht zwingend Intensität, Rollen oder tatsächliche Arbeitsanteile.
- **„Mehr International Collab heißt automatisch bessere Forschung.“** Internationalität kann Sichtbarkeit erhöhen, ist aber feld-, projekt- und förderlogikabhängig; es ist kein Qualitätsbeweis.
- **„Full und fractional liefern ähnliche Ergebnisse.“** Gerade bei großen Kooperationen unterscheiden sich Output, Impact und Netzwerkstrukturen stark.
- **„Netzwerkzentralität zeigt die wichtigsten Forschenden.“** Zentralität ist sensibel gegenüber Hyperauthorship, Datenbereinigung und Zählregeln; interpretierbar nur mit Kontext.

## Praxis-Workflow: Collaboration-Analyse sauber aufsetzen
1. Zweck klären: Monitoring, Strategie, Reporting oder Evaluation? (High-stakes -> besonders vorsichtig).
2. Einheit definieren: Autor:in, Organisation, Land, Departement; und Ebenen trennen (nicht mischen).
3. Datenquelle + Exportregeln dokumentieren (Coverage, Dokumenttypen, Zeitraum, Stichtag).
4. Kollaborationsdefinition festlegen: international/domestic/industry; Regeln zu Multi-Affiliations.
5. Counting-Regel festlegen: full vs. fractional (und welche Fractional-Variante: nach Autor:innen, Adressen, Organisationen).
6. Hyperauthorship-Policy: Cutoff/Filter oder fractional weighting (und im Report begründen).
7. Netzwerk-Analyse (optional): Knotenebene wählen, Linkdefinition (co-authored papers), Gewichtung, Thresholds.
8. Plausibilisieren: Disambiguierung (Orgs), Dubletten, Konsortien, Multi-Affiliations, Feldmix.
9. Report schreiben: Methodik-Kasten + Limitationen + Responsible-Metrics-Hinweis.

## Tool-Lab: Co-Authorship Network in VOSviewer (15 Minuten)
1. Export: Aus WoS/Scopus/Dimensions/Lens/OpenAlex eine Publikationsliste exportieren (inkl. Autor:innen + Affiliations).
2. VOSviewer: Create Map -> Bibliographic data -> Co-authorship.
3. Item type wählen: Authors ODER Organizations ODER Countries (nicht mischen).
4. Counting: Full vs. Fractional (falls angeboten) bzw. Gewichtung/Thresholds so einstellen, dass die Karte lesbar bleibt.
5. Cleaning: Thesaurus/Name-Variants (z. B. Organisationsnamen vereinheitlichen).
6. Interpretation: Cluster = dichte Kollaborationsgruppen; Overlay/Density nutzen, aber mit Vorsicht (Hyperauthorship beachten).

## Responsible Metrics: Kollaboration
- Immer dokumentieren: Definition von „international/domestic/industry“, Datenquelle, Zeitraum, Counting-Regel, Hyperauthorship-Policy.
- Für Vergleiche: gleiche Regeln für alle Einheiten; Feldmix und Output-Mix explizit benennen.
- Keine mechanischen Schlüsse: Kollaboration ist Strategie-/Strukturindikator, nicht automatisch Qualitätsindikator.
- Netzwerkmetriken nur als explorative Evidenz nutzen, nicht als Ranking-Automat.

## Übungen

### Level 1
1. **M07-L1-Q1:** Was ist der wichtigste Unterschied zwischen full und fractional counting?
   - Full counting ist nur für Zitationen, fractional nur für Publikationen.
   - Full counting gibt jeder Einheit volle Zählung; fractional verteilt Kredit auf Einheiten.
   - Fractional counting zählt nur internationale Kooperationen.
   - **Lösung:** Full counting gibt jeder Einheit volle Zählung; fractional verteilt Kredit auf Einheiten.

2. **M07-L1-Q2:** Welche Aussage ist am vorsichtigsten?
   - Internationale Kollaboration beweist hohe Qualität.
   - Internationale Kollaboration ist ein Strukturindikator, der kontextabhängig ist.
   - Ohne Kollaboration ist Forschung weniger wertvoll.
   - **Lösung:** Internationale Kollaboration ist ein Strukturindikator, der kontextabhängig ist.

3. **M07-L1-Q3:** Hyperauthorship ist problematisch, weil …
   - es Zitationen komplett verhindert.
   - es Kennzahlen/Netzwerkmetriken stark verzerren kann.
   - es nur in den Geisteswissenschaften vorkommt.
   - **Lösung:** es Kennzahlen/Netzwerkmetriken stark verzerren kann.

### Level 2
1. **M07-L2-CALC-1:** Berechne Kollaborationsraten (Publikations-Set mit 10 Publikationen): 6 sind multi-institutionell im selben Land (domestic), 2 sind multi-country (international), 2 sind single-institution. Wie groß sind % domestic, % international, % no-collaboration?
   - **Lösung:** % domestic = 6/10 = 60%; % international = 2/10 = 20%; % no-collaboration = 2/10 = 20%
   - **Bewertung:** 1 Punkt: alle drei korrekt.

2. **M07-L2-CALC-2:** Full vs. Fractional (vereinfachtes Autorenmodell): Eine Publikation hat 5 Autor:innen: 2 von Uni A, 3 von Uni B. Wie viel Output bekommt Uni A (a) bei full counting, (b) bei fractional counting nach Autor:innen?
   - **Lösung:** (a) Full: 1.0; (b) Fractional: 2/5 = 0.4
   - **Bewertung:** 1 Punkt: full korrekt. 1 Punkt: fractional korrekt.

3. **M07-L2-NET-1:** Netzwerk-Kante (Publikationszählung): Autor A und B haben 3 gemeinsame Papers, A und C haben 1 gemeinsames Paper. Welche Link Strength ist stärker? Um wie viel?
   - **Lösung:** A–B ist stärker (3 vs. 1), also um Faktor 3 bzw. Differenz 2.
   - **Bewertung:** 1 Punkt: korrekt.

4. **M07-L2-INTERPRET:** Interpretation: Ein Departement hat % international = 45% (5 Jahre), aber der Wert sprang im letzten Jahr auf 70%. Nenne 2 plausible, nicht-wertende Erklärungen.
   - **Lösung:** Beispiele: (1) Start/Ende eines großen, internationalen Projekts oder Konsortiums. (2) Änderung in Publikationsmix (z. B. mehr Multi-Center-Studien) oder bessere Affiliation-Erfassung/Unification in der Datenquelle.
   - **Bewertung:** 1 Punkt: 1 plausible Erklärung. 1 Punkt: 2. plausible Erklärung.

### Level 3
1. **M07-L3-CASE:** Mini-Case: Du erstellst einen Uni-Report „Collaboration 2021–2025“. Liefere (a) einen Methodik-Kasten (Datenquelle, Zeitraum, Dokumenttypen, Definition international/domestic/industry, Counting, Hyperauthorship-Policy) und (b) 8 Limitationen/Warnhinweise.
   - **Deliverable:** Methodik-Kasten + 8 Limitationen (Bulletpoints).
   - **Lösungsrahmen:**
     - Methodik: Quelle+Stichtag; Zeitraum; Dokumenttypen; Kollaborationsdefinitionen; Counting (full vs fractional + Variante); Hyperauthorship (Cutoff oder fractional weighting); Disambiguierung/Unification.
     - Limitationen: Coverage-Bias; Feldmix; Multi-affiliations; Unification-Fehler; Konsortien/Hyperauthorship; Namensvarianten; Zitations-/Output-Fenster-Effekte; Vergleichsgruppenwahl; Unterschiede in Kollaborationskultur.
   - **Bewertung:**
     - Methodik vollständig und nachvollziehbar: 4 Punkte.
     - Limitationen konkret (daten- & methodenspezifisch): 3 Punkte.
     - Responsible-Metrics-Logik sichtbar: 2 Punkte.

## Quellen
- https://traditional.leidenranking.com/information/indicators
- https://incites.zendesk.com/hc/en-gb/articles/25087437743889-Collaboration-Indicators
- https://oecd.ai/en/partner-data-methodological-note
- https://www.sciencedirect.com/science/article/abs/pii/S1751157716302036
- https://ideas.repec.org/a/eee/infome/v9y2015i4p872-894.html
- https://www.vosviewer.com/documentation/Manual_VOSviewer_1.6.18.pdf
- https://direct.mit.edu/qss/article/5/3/613/120830/Hyperauthored-papers-disproportionately-amplify

## Weiterführende Literatur
- https://www.vosviewer.com/download/f-x2.pdf
- https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0253397
