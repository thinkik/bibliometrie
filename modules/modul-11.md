# Modul 11: Science Mapping & Wissensstrukturen: Co-Citation, Bibliographic Coupling, Co-Word (inkl. VOSviewer/bibliometrix)

## Lernziele
- Die drei klassischen Science-Mapping-Ansätze (co-citation, bibliographic coupling, co-word) definieren und für passende Fragestellungen auswählen.
- Verstehen, warum co-citation eher die "intellektuelle Basis" (Vergangenheit) und bibliographic coupling eher die "Forschungsfront" (Gegenwart) sichtbar macht.
- Grundbegriffe von Netzwerken (Knoten, Kanten, Gewicht, Normalisierung, Thresholds, Cluster) korrekt anwenden.
- Ein Mapping-Projekt reproduzierbar durchführen: Datenbasis, Parameter, Cleaning, Thresholds, Visualisierung, Interpretation.
- Typische Fehlinterpretationen (Cluster = "Schulen", Farben = "Qualität", Kanten = "Kausalität") vermeiden.

## Kurz erklärt
Science Mapping beschreibt Forschungsfelder als Netzwerke. Du kannst damit z. B. die intellektuellen Grundlagen (co-citation), die aktuelle Forschungsfront (bibliographic coupling) oder Themenlandschaften (co-word/co-occurrence) sichtbar machen. Die Qualität steht und fällt mit Datenbasis, Cleaning (Orgs/Keywords), Thresholds und transparenter Dokumentation.

## Schlüsselbegriffe
- **Co-citation:** Zwei Dokumente gelten als co-cited, wenn sie gemeinsam von anderen Dokumenten zitiert werden; Stärke = Häufigkeit des gemeinsamen Zitierens.
- **Bibliographic coupling:** Zwei Dokumente sind gekoppelt, wenn sie gemeinsame Referenzen haben; Stärke = Anzahl geteilter Referenzen.
- **Co-word analysis / Co-occurrence:** Analyse von gemeinsam auftretenden Begriffen/Keywords (oder Terms im Abstract/Title) zur Themen- und Strukturkartierung.
- **Node (Knoten):** Ein Element im Netzwerk (z. B. Paper, Autor:in, Journal, Keyword, Organisation).
- **Edge (Kante):** Verbindung zwischen zwei Knoten (z. B. co-citation link, coupling link, co-occurrence link).
- **Weight (Gewicht):** Stärke einer Kante (z. B. #co-citations, #shared references, #co-occurrences).
- **Normalization:** Skalierung/Anpassung der Gewichte, damit große Knoten/hochfrequente Items nicht alles dominieren.
- **Threshold:** Mindestkriterium, ab wann ein Item/Kante in die Karte aufgenommen wird (z. B. min. 20 Zitationen).
- **Clustering:** Algorithmische Gruppierung von Items in Cluster (dichte Teilnetze), oft als Themen-/Schul-Nähe interpretiert – aber nicht 1:1 identisch.
- **Overlay visualization:** Darstellung eines Zusatzmerkmals (z. B. mittleres Jahr, FWCI) als Farb-/Skalenlayer – interpretieren mit Vorsicht.

## Drei Ansätze – wann welcher passt
**1) Co-citation (Wissensbasis / "intellectual base")**
Nutze co-citation, wenn du verstehen willst, *welche klassischen Werke/Theorien* ein Feld zusammenhalten.

**2) Bibliographic coupling (Forschungsfront / "research front")**
Nutze coupling, wenn du sehen willst, *welche aktuellen Publikationen* auf ähnlichen Referenzfundamenten stehen (oft zeitnäher als co-citation).

**3) Co-word / Co-occurrence (Themen & Begriffe)**
Nutze co-word, wenn du Themencluster, Begriffsräume oder Trendbegriffe kartieren willst (Keywords oder Terms aus Titles/Abstracts).

## Interpretation: Was eine Karte zeigt (und was nicht)
Eine Karte zeigt Ähnlichkeit/Relatedness nach dem gewählten Link-Typ. Nähe bedeutet: „stärker verbunden“ – nicht automatisch „inhaltlich identisch“, nicht „besser“, nicht „kausal“. Cluster sind algorithmische Gruppen; ihre Benennung ist ein interpretativer Schritt (immer mit Stichprobenprüfung der Top-Items pro Cluster).

## Typische Fehlinterpretationen
- **„Ein Cluster ist eine objektive 'Schule'.“** Cluster hängen von Datenquelle, Thresholds, Normalisierung und Algorithmusparametern ab.
- **„Mehr Kanten = bessere Forschung.“** Netzwerkdichte misst Verbundenheit/Kommunikation, nicht Qualität.
- **„Farben im Overlay zeigen Impact/Qualität.“** Overlay zeigt das gewählte Merkmal (z. B. Jahr) und ist anfällig für Ausreißer/Selection-Bias.
- **„Die Karte ist 'die Wahrheit' über das Feld.“** Karten sind Modelle; seriöse Nutzung braucht Triangulation + methodische Transparenz.

## Praxis-Workflow: Science Mapping reproduzierbar
1. Fragestellung + Einheit definieren (Papers, Journals, Autor:innen, Keywords).
2. Datenquelle wählen (WoS/Scopus/OpenAlex) + Exportparameter fixieren (Zeitraum, Doc types, Query).
3. Cleaning: Dubletten entfernen; Orgs/Keywords vereinheitlichen (Thesaurus/Mappings).
4. Link-Typ wählen: co-citation vs coupling vs co-word (passend zur Frage).
5. Thresholds setzen (min. cites/occurrences) + Sensitivitätscheck (2–3 Varianten).
6. Normalisierung/Counting dokumentieren (Tool-defaults sind Teil der Methodik!).
7. Clustering + Labeling: pro Cluster Top-Items prüfen und beschriften.
8. Output: Karte + Tabellen (Top-Items/Top-links) + Methodik-Kasten + Limitationen.

## Mini-Lab: VOSviewer Karte (30–45 Minuten)
1. Export aus WoS/Scopus (oder OpenAlex->CSV) mit Referenzen/Keywords.
2. VOSviewer: Create map -> Bibliographic data.
3. Wähle Map-Typ: Co-citation (Cited References oder Sources) ODER Bibliographic coupling (Documents/Sources) ODER Co-occurrence (All keywords/Terms).
4. Setze Thresholds so, dass ~100–400 Items übrig bleiben (lesbar, aber aussagekräftig).
5. Nutze Thesaurus-Datei für Synonyme/Varianten (Keywords/Orgs).
6. Interpretation: Pro Cluster 10 Top-Items prüfen; Cluster benennen; 3 zentrale Knoten erklären.

## Mini-Lab (optional): bibliometrix (R) als reproduzierbare Pipeline
1. Import der Exportdatei (WoS/Scopus) in bibliometrix.
2. Erstelle (a) co-citation, (b) coupling, (c) co-word Netzwerke mit identischen Thresholds.
3. Vergleiche: Welche Cluster bleiben stabil? Wo ändern sich Grenzen?
4. Exportiere Results als CSV/JSON (Top-Items, Cluster assignments) für die Website.

## Responsible-Metrics-Box
- Karten sind explorativ: keine Ranking- oder Qualitätsautomatik.
- Immer offenlegen: Datenquelle, Query, Zeitraum, Doc types, Thresholds, Normalisierung, Tool-Version.
- Cluster-Benennung ist interpretativ: mit Stichprobenprüfung begründen.
- Bei Stakeholder-Reports: Karten mit Tabellen + Methodikbox + Limitationen kombinieren.

## Quellen & weiterführende Links
- https://asistdl.onlinelibrary.wiley.com/doi/10.1002/asi.4630240406
- https://onlinelibrary.wiley.com/doi/10.1002/asi.5090140103
- https://journals.sagepub.com/doi/10.1177/053901883022002003
- https://link.springer.com/article/10.1007/s11192-009-0146-3
- https://www.vosviewer.com/documentation/Manual_VOSviewer_1.6.18.pdf
- https://www.sciencedirect.com/science/article/pii/S1751157717300500
- https://arxiv.org/abs/1301.4655


## Übungen

### Level 1 Q1–Q5

**M11-L1-Q1 – Methode wählen**  
Aufgabe: Welche Methode eignet sich am besten, um die intellektuelle Basis eines Feldes sichtbar zu machen?  
A) Co-Citation  
B) Usage Counting  
C) JIF  
Lösung: A.

**M11-L1-Q2 – Forschungsfront**  
Aufgabe: Welche Methode eignet sich besonders für aktuelle Forschungsfronten?  
A) Bibliographic Coupling  
B) h-Index  
C) COUNTER  
Lösung: A.

**M11-L1-Q3 – Co-Word**  
Aufgabe: Was analysiert Co-Word-Analyse?  
A) Gemeinsam auftretende Begriffe, Keywords oder Terme.  
B) Durchschnittliche Downloads.  
C) Journalranglisten.  
Lösung: A.

**M11-L1-Q4 – Cluster**  
Aufgabe: Welche Aussage zu Clustern ist korrekt?  
A) Cluster sind algorithmische Gruppen und müssen interpretiert werden.  
B) Cluster sind objektive Schulen.  
C) Clusterfarben zeigen Qualität.  
Lösung: A.

**M11-L1-Q5 – Thresholds**  
Aufgabe: Warum sind Thresholds methodisch wichtig?  
Lösung: Sie bestimmen, welche Knoten oder Kanten in die Karte aufgenommen werden und beeinflussen dadurch Lesbarkeit, Struktur und Interpretation.

### Level 2 Q1–Q3

**M11-L2-Q1 – Methode zuordnen**  
Aufgabe: Ordne zu:  
1. Klassische Werke eines Feldes erkennen.  
2. Aktuelle Publikationen mit ähnlichem Referenzfundament gruppieren.  
3. Themenräume über Keywords kartieren.  
Lösung: 1 = Co-Citation; 2 = Bibliographic Coupling; 3 = Co-Word/Co-Occurrence.  
Bewertung: 3 Punkte.

**M11-L2-Q2 – Threshold-Entscheidung**  
Aufgabe: Eine Co-Word-Karte enthält 2’000 Keywords und ist unlesbar. Nenne drei methodische Schritte, um sie sinnvoll zu reduzieren.  
Lösung: Mindesthäufigkeit erhöhen; Synonyme/Varianten per Thesaurus zusammenführen; Stopwords/unspezifische Begriffe entfernen; nur Author Keywords oder kontrollierte Keywords nutzen; Sensitivitätscheck mit mehreren Thresholds.  
Bewertung: 3 Punkte für drei sinnvolle Schritte.

**M11-L2-Q3 – Karteninterpretation**  
Aufgabe: Eine Karte zeigt einen roten Cluster mit Begriffen zu „Open Science“, einen blauen Cluster zu „Research Evaluation“ und starke Kanten zwischen beiden. Formuliere eine vorsichtige Interpretation.  
Lösungsvorschlag: Die Begriffe treten im Datensatz häufig gemeinsam oder in eng verbundenen Publikationen auf. Dies kann auf eine thematische Verbindung zwischen Open Science und Forschungsbewertung hinweisen. Die Karte zeigt jedoch nur Relatedness nach gewählter Methode, keine Kausalität und keine Qualität.  
Bewertung: 1 Punkt Relatedness, 1 Punkt thematische Interpretation, 1 Punkt Limitation.

### Level 3

**M11-L3-CASE – Science-Mapping-Projekt planen**  
Aufgabe: Eine Fakultät möchte neue strategische Themenfelder identifizieren. Plane eine Science-Mapping-Analyse.

Deliverable:
- Fragestellung
- Datenquelle
- Zeitraum und Dokumenttypen
- Methode: Co-Citation, Bibliographic Coupling oder Co-Word
- Cleaning-Plan
- Thresholds
- Visualisierung
- Interpretation
- Limitationen
- Methodikbox

Lösungsskizze:
- Fragestellung: Welche Themencluster prägen die Publikationen der Fakultät 2020–2025?
- Datenquelle: Scopus/WoS oder OpenAlex, je nach Lizenz und Reproduzierbarkeitsziel.
- Methode: Co-Word für Themenlandschaft; zusätzlich Bibliographic Coupling für aktuelle Forschungsfront.
- Cleaning: Dubletten, Keyword-Varianten, Organisationsnamen, Stopwords.
- Thresholds: z. B. Keywords mit mindestens 5 Vorkommen, Sensitivitätscheck mit 3 und 10.
- Output: Karte, Clusterliste, Top-Keywords, Methodikbox.
- Limitationen: Coverage, Keyword-Qualität, Threshold-Abhängigkeit, algorithmische Cluster, Interpretationsspielraum.

Bewertung:
- 3 Punkte für passende Methode.
- 3 Punkte für reproduzierbare Methodik.
- 2 Punkte für Cleaning/Thresholds.
- 2 Punkte für Responsible-Metrics-Limitationen.
