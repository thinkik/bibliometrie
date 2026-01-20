# Modul 4: Metriken für Autor:innen: h-Index, g-Index, i10 & m-Quotient – sinnvoll nutzen, sauber erklären

**Schwierigkeit:** 2  
**Geschätzte Lesezeit:** 25 Minuten  
**Zielgruppen:** Bibliothek, Forschungsreferat, Forschende  
**Voraussetzungen:** Modul 1, Modul 2, Modul 3

## Lernziele
- Die Logik von h-Index, g-Index, i10-Index und m-Quotient erklären (inkl. was sie NICHT messen).
- Einfache Metriken aus einer Zitationsliste korrekt berechnen.
- Typische Verzerrungen erkennen (Karrierelänge, Dokumenttyp, Datenquelle, Autor:innen-Identität, Selbstzitate).
- Metriken report-tauglich kommunizieren (Quelle, Stichtag, Zeitraum/Fenster, Regeln, Limitationen).

## Schlüsselbegriffe
- **h-Index:** h = Anzahl Publikationen, die jeweils mindestens h Zitationen haben (bei absteigend sortierter Zitationsliste).
- **g-Index:** g = größte Zahl, sodass die Top-g Publikationen zusammen mindestens g² Zitationen haben (gewichtet sehr stark zitierte Arbeiten stärker).
- **i10-Index:** Anzahl Publikationen mit mindestens 10 Zitationen (vor allem in Google Scholar genutzt).
- **m-Quotient (m-Index):** Karrierezeit-Korrektur: häufig h geteilt durch Anzahl Jahre seit der ersten Publikation (vereinfachte Senioritäts-Normalisierung).
- **Autor:innen-Disambiguierung:** Saubere Zuordnung von Publikationen zu einer Person (Namensvarianten, Affiliations, Doppelprofile).
- **Datenquelle:** Woher die Zitations-/Publikationsdaten stammen (z. B. WoS, Scopus, Google Scholar, OpenAlex).

## Kurz erklärt
Autor:innenmetriken (h, g, i10, m) sollen ein kompaktes Signal für Publikations- und Zitationsmuster liefern. Sie sind hilfreich für Überblick und Monitoring – aber riskant als alleinige Bewertungsgrundlage. Die Werte hängen stark von Datenquelle, Karrierelänge, Dokumenttyp (z. B. Reviews) und sauberer Autor:innen-Zuordnung ab. Gute Praxis: nie nur eine Kennzahl, sondern immer Kontext, Regeln und Limitationen mitliefern.

## Die 4 wichtigsten Metriken (mit Interpretation)

### h-Index
- **Was er abbildet:** Breite, anhaltende Resonanz (nicht nur ein einzelner „Hit“).
- **Berechnung:** Sortiere Zitationen absteigend. Finde die größte Position h, an der gilt: Zitationen(h) ≥ h.
- **Stärken:**
  - Robust gegen einzelne extreme Ausreißer.
  - Einfach erklärbar.
- **Grenzen:**
  - Bevorzugt längere Karrieren.
  - Unfair zwischen Feldern.
  - Ignoriert Kontext von Zitationen.
  - Quelle/Abdeckung beeinflusst Wert.

### g-Index
- **Was er abbildet:** Gewichtet sehr stark zitierte Arbeiten stärker als der h-Index.
- **Berechnung:** Sortiere absteigend. Berechne kumulierte Zitationen. g ist die größte Zahl mit: Summe(top g) ≥ g².
- **Stärken:**
  - Reagiert auf „Big Hits“.
  - Unterscheidet Profile mit gleichen h-Werten besser.
- **Grenzen:**
  - Noch stärker von Datenquelle/Abdeckung abhängig.
  - Kann durch wenige sehr stark zitierte Arbeiten dominieren.

### i10-Index
- **Was er abbildet:** Sehr einfache Produktivitäts-/Resonanz-Schwelle (≥10 Zitationen).
- **Berechnung:** Zähle Publikationen mit mindestens 10 Zitationen.
- **Stärken:**
  - Sehr leicht zu erklären.
  - Schneller Überblick.
- **Grenzen:**
  - Grob und feldabhängig.
  - Stark datenquellenabhängig.
  - Nicht überall etabliert.

### m-Quotient (m-Index)
- **Was er abbildet:** Grobe Karrierezeit-Korrektur (h pro Jahr).
- **Berechnung:** m = h / (Jahre seit erster Publikation).
- **Stärken:**
  - Hilft beim Vergleich unterschiedlicher Seniorität (grobe Näherung).
- **Grenzen:**
  - Sehr grob (Karrieren sind nicht linear).
  - Feld-/Dokumenttyp-Effekte bleiben.
  - Jahresdefinition muss festgelegt werden.

## Typische Fallen & Fehlinterpretationen
- **„Eine Zahl reicht, um Leistung zu bewerten.“**  
  Metriken sind Kontextsignale. Responsible Metrics verlangt mehrere Indikatoren plus qualitative Evidenz.
- **„h-Index aus Quelle A = h-Index aus Quelle B.“**  
  Datenquellen unterscheiden sich in Coverage und Zitationsverknüpfung. Werte sind nicht automatisch vergleichbar.
- **„Ein niedriger h bedeutet schlechte Forschung.“**  
  Karrierelänge, Feld, Dokumenttyp, Sprache/Region und Datenbasis beeinflussen den Wert stark.
- **„Autor:innenprofile stimmen schon.“**  
  Namensvarianten und Doppelprofile sind häufig. Ohne Bereinigung ist jede Kennzahl wacklig.

## Praxis-Workflow: Autor:innenmetriken sauber erheben
1. Zweck klären: Monitoring, CV-Kontext, Bericht oder Evaluation?
2. Datenquelle(n) festlegen und dokumentieren (inkl. Stichtag der Abfrage).
3. Autor:innenprofil bereinigen (Namensvarianten, Dubletten, falsche Zuordnung).
4. Regeln definieren: Zeitraum/Zitationsfenster? Dokumenttypen? Umgang mit Selbstzitaten?
5. Metriken berechnen (h, g, i10, optional m).
6. Plausibilisieren: Ausreißer prüfen (Reviews, Leitlinien, kontroverse Paper), Stichprobe gegen bekannte Publikationen.
7. Report schreiben: Methodik-Kasten + Limitationen + verantwortungsvolle Interpretation.

## Responsible Metrics: Mindeststandard für Autor:innenmetriken
- Nie eine Kennzahl alleine verwenden; immer Kontext + mehrere Signale.
- Immer angeben: Datenquelle, Stichtag, Zeitraum/Fenster, Dokumenttypen, Regeln (z. B. Selbstzitate ja/nein).
- Vergleiche nur in sinnvollen Gruppen (Fach, Karrierestufe, Dokumenttypen).
- Wenn Entscheidungen betroffen sind: quantitative Indikatoren nur zusammen mit qualitativer Begutachtung.

## Übungen

### Level 1
1. **M04-L1-Q1:** Welche Definition trifft den h-Index am besten?
   - Anzahl Publikationen insgesamt.
   - h Publikationen haben jeweils mindestens h Zitationen.
   - Durchschnittliche Zitationen pro Publikation.
   - **Lösung:** h Publikationen haben jeweils mindestens h Zitationen.
   - **Bewertung:** 1 Punkt: richtige Antwort.

2. **M04-L1-Q2:** Was misst der i10-Index?
   - Durchschnittliche Zitationen pro Jahr.
   - Anzahl Publikationen mit mindestens 10 Zitationen.
   - Anzahl Zitationen im letzten Jahr.
   - **Lösung:** Anzahl Publikationen mit mindestens 10 Zitationen.
   - **Bewertung:** 1 Punkt: richtige Antwort.

3. **M04-L1-Q3:** Welche Aussage ist verantwortungsvoll?
   - Wir ranken Forschende nur nach h-Index.
   - Wir nennen Quelle, Stichtag und Regeln und interpretieren im Kontext.
   - Wenn zwei Datenbanken abweichen, nehmen wir den höheren Wert.
   - **Lösung:** Wir nennen Quelle, Stichtag und Regeln und interpretieren im Kontext.
   - **Bewertung:** 1 Punkt: richtige Antwort.
