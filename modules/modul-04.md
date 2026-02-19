# 🚀 Modul 4: Metriken für Autor:innen

### h-Index, g-Index, i10 & m-Quotient – sinnvoll nutzen, sauber erklären

## 📌 Auf einen Blick

| Eigenschaft | Details |
| --- | --- |
| **Schwierigkeit** | 🟡 Fortgeschritten (Intermediate) |
| **Lesezeit** | ⏱️ ca. 25 Minuten |
| **Zielgruppe** | 🏛️ Bibliothek, Forschungsreferat, Forschende |
| **Voraussetzungen** | 📚 Module 1, 2 und 3 |

---

## 🎯 Lernziele

Nach Abschluss dieses Moduls können Sie:

- Die Logik und die Grenzen von **h-Index, g-Index, i10-Index und m-Quotient** verständlich erklären (und wissen, was sie *nicht* messen).
- Einfache Metriken aus einer Zitationsliste **korrekt berechnen**.
- Typische **Verzerrungen erkennen** (z. B. durch Karrierelänge, Dokumenttyp, Datenquellen, Namensvarianten oder Selbstzitate).
- Metriken **report-tauglich kommunizieren** (inklusive Quelle, Stichtag, Zeitraum und Limitationen).

---

## 💡 Kurz erklärt: Autor:innenmetriken

Autor:innenmetriken sollen ein kompaktes Signal für Publikations- und Zitationsmuster liefern. Sie sind hilfreich, um sich einen Überblick zu verschaffen und Entwicklungen zu monitoren – jedoch **brandgefährlich als alleinige Bewertungsgrundlage**.

Die Werte hängen massiv von der jeweiligen Datenquelle, der Karrierelänge, dem Dokumenttyp (z. B. Reviews werden generell häufiger zitiert) und einer sauberen Autor:innen-Zuordnung ab.

> **Best Practice:** Verwenden Sie niemals nur eine einzelne Kennzahl. Liefern Sie stets den Kontext, die methodischen Spielregeln und die Limitationen mit!

### 🔑 Wichtige Schlüsselbegriffe vorab

- **Autor:innen-Disambiguierung:** Die saubere Zuordnung von Publikationen zu einer bestimmten Person (Bereinigung von Namensvarianten, unterschiedlichen Affiliations und Doppelprofilen).
- **Datenquelle:** Der Ursprung der Zitations- und Publikationsdaten (z. B. Web of Science, Scopus, Google Scholar, OpenAlex).

---

## 📊 Die 4 wichtigsten Metriken im Detail

### 1️⃣ h-Index

- **Was er abbildet:** Breite, anhaltende Resonanz (belohnt kontinuierliche Leistung, nicht nur ein einzelnes „One-Hit-Wonder“).
- **Berechnung:** Sortieren Sie alle Publikationen absteigend nach Zitationen. Der h-Index ist die größte Position *h*, an der gilt: Die Publikation hat mindestens *h* Zitationen.
- ✅ **Stärken:** Robust gegenüber einzelnen extremen Ausreißern; intuitiv und sehr einfach zu erklären.
- ⚠️ **Grenzen:** Bevorzugt längere Karrieren; unfair beim Vergleich unterschiedlicher Fachdisziplinen; ignoriert den Kontext der Zitationen; extrem abhängig von der Datenabdeckung der Quelle.

### 2️⃣ g-Index

- **Was er abbildet:** Im Gegensatz zum h-Index werden hier sehr stark zitierte Arbeiten (Top-Publikationen) stärker ins Gewicht geworfen.
- **Berechnung:** Sortieren Sie absteigend und bilden Sie die kumulierte Summe der Zitationen. Der g-Index ist die größte Zahl *g*, bei der die Top-*g* Publikationen zusammen mindestens *g²* Zitationen aufweisen.
- ✅ **Stärken:** Reagiert sensibel auf „Big Hits“; differenziert deutlich besser zwischen Profilen, die denselben h-Index aufweisen.
- ⚠️ **Grenzen:** Noch stärker von der Datenquelle abhängig als der h-Index; kann durch wenige extrem oft zitierte Arbeiten dominiert werden.

### 3️⃣ i10-Index

- **Was er abbildet:** Eine sehr einfache Schwelle für Produktivität und grundlegende Resonanz (wird vor allem in Google Scholar genutzt).
- **Berechnung:** Anzahl der Publikationen einer Person, die jeweils mindestens 10-mal zitiert wurden.
- ✅ **Stärken:** Extrem leicht zu erklären; bietet einen sehr schnellen Überblick.
- ⚠️ **Grenzen:** Sehr grobes Maß; stark feld- und datenquellenabhängig; außerhalb des Google-Universums wenig etabliert.

### 4️⃣ m-Quotient (m-Index)

- **Was er abbildet:** Eine grobe Normalisierung der Karrierezeit (h-Index pro Jahr).
- **Berechnung:** *m = h-Index ÷ (Jahre seit der allerersten Publikation)*.
- ✅ **Stärken:** Hilft als grobe Näherung beim Vergleich von Forschenden mit unterschiedlicher Seniorität (Karrierealter).
- ⚠️ **Grenzen:** Zu vereinfachend, da Karrieren und Zitationszyklen selten linear verlaufen; Feld- und Dokumenttyp-Effekte bleiben bestehen; die Definition des "Startjahres" muss klar definiert sein.

---

## 🛑 Typische Fallen & Fehlinterpretationen

- ❌ **„Eine Zahl reicht, um Leistung zu bewerten.“**
- *Realität:* Metriken sind reine Kontextsignale. „Responsible Metrics“ verlangen immer mehrere Indikatoren kombiniert mit qualitativer Evidenz.

- ❌ **„Der h-Index aus Quelle A ist identisch mit dem aus Quelle B.“**
- *Realität:* Datenbanken unterscheiden sich in ihrer Abdeckung (Coverage) und Zitationsverknüpfung erheblich. Werte aus verschiedenen Quellen sind **niemals** direkt vergleichbar.

- ❌ **„Ein niedriger h-Index bedeutet schlechte Forschung.“**
- *Realität:* Karrierelänge, Fachgebiet, Dokumenttyp, Publikationssprache und die gewählte Datenbasis beeinflussen den Wert massiv.

- ❌ **„Autor:innenprofile in Datenbanken stimmen automatisch.“**
- *Realität:* Namensvarianten und Doppelprofile sind der absolute Standard. Ohne manuelle Bereinigung ist jede darauf basierende Kennzahl völlig wacklig.

---

## 🛠️ Praxis-Workflow: Metriken sauber erheben

Um Metriken professionell und belastbar zu nutzen, folgen Sie diesem 7-Schritte-Plan:

1. **Zweck klären:** Dienen die Daten dem reinen Monitoring, als Kontext für einen CV, für einen offiziellen Bericht oder für eine Evaluation?
2. **Datenquelle festlegen:** Quelle(n) eindeutig bestimmen und dokumentieren (inklusive exaktem Stichtag der Abfrage!).
3. **Profil bereinigen:** Namensvarianten, Dubletten und falsche Zuordnungen korrigieren (Autor:innen-Disambiguierung).
4. **Regeln definieren:** Welcher Zeitraum / welches Zitationsfenster gilt? Welche Dokumenttypen werden mitgezählt? Wie wird mit Selbstzitaten umgegangen?
5. **Werte berechnen:** Metriken (h, g, i10, ggf. m) ermitteln.
6. **Plausibilisieren:** Ausreißer kritisch prüfen (z. B. stark zitierte Guidelines, stark umstrittene Paper) und Stichproben gegen die tatsächliche Publikationsliste abgleichen.
7. **Report erstellen:** Ergebnisse stets zusammen mit einem **Methodik-Kasten**, den **Limitationen** und einer **verantwortungsvollen Interpretation** präsentieren.

---

## ⚖️ Responsible Metrics: Der Mindeststandard

- **Kontext ist König:** Nutzen Sie niemals eine Kennzahl isoliert. Setzen Sie immer auf mehrere Signale.
- **Maximale Transparenz:** Geben Sie immer die genutzte Datenquelle, den Stichtag, den Zeitraum/das Fenster, die einbezogenen Dokumenttypen und die Berechnungsregeln an.
- **Sinnvolle Vergleiche:** Vergleichen Sie nur innerhalb plausibler Kohorten (gleiches Fachgebiet, identische Karrierestufe, gleiche Dokumenttypen).
- **Qualität vor Quantität:** Wenn weitreichende Entscheidungen anstehen (z. B. Berufungen, Fördermittel), dürfen quantitative Indikatoren nur unterstützend zur qualitativen Begutachtung (Peer Review) eingesetzt werden.

---

## 📝 Übungen (Level 1)

Testen Sie Ihr erworbenes Wissen mit diesen kurzen Kontrollfragen:

**Frage 1: Welche Definition trifft den h-Index am besten?**

- [ ] Anzahl der Publikationen insgesamt.
- [x] *h* Publikationen haben jeweils mindestens *h* Zitationen.
- [ ] Durchschnittliche Zitationen pro Publikation.

**Frage 2: Was misst der i10-Index?**

- [ ] Durchschnittliche Zitationen pro Jahr.
- [x] Anzahl der Publikationen mit mindestens 10 Zitationen.
- [ ] Anzahl der Zitationen im letzten Jahr.

**Frage 3: Welche Aussage entspricht den Grundsätzen von "Responsible Metrics"?**

- [ ] Wir ranken Forschende ausschließlich nach ihrem h-Index.
- [x] Wir nennen Quelle, Stichtag sowie Regeln und interpretieren den Wert im Kontext.
- [ ] Wenn zwei Datenbanken abweichen, nehmen wir einfach immer den höheren Wert.
