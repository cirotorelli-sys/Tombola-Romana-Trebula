# 🏛️ TOMBOLA ROMANA - PROGETTO COMPLETO

**Progettato da Ciro Torelli**

---

## 📦 SISTEMA COMPLETO A 3 LIVELLI

Questo progetto include **tutto il necessario** per giocare alla Tombola Romana in qualsiasi modalità!

---

## 🎯 3 VERSIONI INTEGRATE

### 📱 **LIVELLO 1: App Mobile**
**File:** `mobile.html`

**Caratteristiche:**
- ✅ Interfaccia touch ottimizzata per smartphone
- ✅ Selezione cartella da 1 a 90
- ✅ Griglia 5×3 corretta (15 simboli)
- ✅ Segnatura simboli con tap
- ✅ Statistiche in tempo reale (segnati/mancanti)
- ✅ PWA installabile (funziona offline)
- ✅ Vibrazione feedback

**Per chi:** Giocatori con smartphone

**Come accedere:**
- Link diretto: `https://tuosito.netlify.app/mobile.html`
- Oppure: Apri dal cellulare il link principale → redirect automatico!

---

### 🖥️ **LIVELLO 2: Versione Web/Banco**
**File:** `web.html` (stesso di `banco.html`)

**Caratteristiche:**
- ✅ Sistema banco completo
- ✅ Registrazione giocatori (nome + numero cartella)
- ✅ Tabellone 90 simboli numerati
- ✅ Estrazione casuale simboli
- ✅ Visualizzazione cartelle attive
- ✅ Controllo automatico vittorie (Ambo, Terno, Quaterna, Cinquina, Tombola)
- ✅ Riepilogo finale premi
- ✅ Ottimizzata per PC/Tablet

**Per chi:** Organizzatore/Croupier

**Come accedere:**
- Link diretto: `https://tuosito.netlify.app/web.html`
- Oppure: Apri dal PC il link principale → menu con 3 opzioni

---

### 🖨️ **LIVELLO 3: Versione Stampabile**
**File:** `tombola_romana_stampabile.html`

**Caratteristiche:**
- ✅ **1 pagina:** Tabellone completo (griglia 10×10)
- ✅ **45 pagine:** 90 Cartelle (2 per foglio A4)
- ✅ **1 pagina:** 90 Tessere (TUTTE in 1 foglio, griglia 10×9!)
- ✅ **1 pagina:** Istruzioni complete
- ✅ **Stampa selettiva:** Scegli quali cartelle stampare
- ✅ **Tessere = Celle tabellone:** Stesse dimensioni, combaciano perfettamente
- ✅ **TOTALE: 48 pagine**

**Kit economici:**
- 10 giocatori: 8 fogli (1 tabellone + 5 cartelle + 1 tessere + 1 istruzioni)
- 30 giocatori: 18 fogli
- 90 giocatori: 48 fogli

**Per chi:** Chi preferisce il gioco tradizionale fisico

**Come accedere:**
- Link diretto: `https://tuosito.netlify.app/tombola_romana_stampabile.html`
- Oppure: Menu principale → clicca "Stampabile"

---

## 🧠 REDIRECT INTELLIGENTE

Il file `index.html` rileva automaticamente il dispositivo:

### Da Smartphone:
```
Utente apre: https://tuosito.netlify.app
     ↓
Redirect automatico → mobile.html
     ↓
App giocatore si apre subito! ✨
```

### Da PC/Tablet:
```
Utente apre: https://tuosito.netlify.app
     ↓
Mostra menu con 3 opzioni:
📱 App Mobile | 🖥️ Versione Web | 🖨️ Stampabile
```

---

## 📂 STRUTTURA FILE (102 file totali)

```
TOMBOLA-ROMANA-COMPLETA.zip
│
├── index.html                      ← Menu principale (redirect intelligente)
│
├── mobile.html                     ← App mobile giocatori
├── manifest-mobile.json            ← Config PWA mobile
├── service-worker-mobile.js        ← Offline mobile
│
├── web.html                        ← Versione banco PC
├── banco.html                      ← (stesso di web.html)
├── manifest.json                   ← Config PWA generale
├── service-worker.js               ← Offline generale
│
├── tombola_romana_stampabile.html  ← Versione stampabile
│
├── icon-192.png                    ← Icona app piccola
├── icon-512.png                    ← Icona app grande
│
├── cartella_1.html                 ← Cartella individuale 1
├── cartella_2.html                 ← Cartella individuale 2
├── ...                             ← (90 file)
├── cartella_90.html                ← Cartella individuale 90
│
└── GUIDA_INSTALLAZIONE_APP.md      ← Questa guida
```

---

## 🚀 PUBBLICAZIONE SU NETLIFY

### **PASSO 1: Preparazione**
1. Scarica `TOMBOLA-ROMANA-COMPLETA.zip`
2. Estrai **tutti i 102 file** in una cartella

### **PASSO 2: Caricamento**
1. Vai su https://www.netlify.com
2. Registrati (gratis) o fai login
3. Trascina **TUTTI i 102 file** nell'area upload
4. Aspetta 60-90 secondi

### **PASSO 3: Personalizzazione**
1. Netlify genera: `https://random-name-123.netlify.app`
2. Vai su "Site settings" → "Change site name"
3. Scegli nome: es. `tombola-romana`
4. Link finale: `https://tombola-romana.netlify.app`

### **PASSO 4: Condivisione**
Condividi **UN SOLO LINK** con tutti:

```
🏛️ TOMBOLA ROMANA

Link: https://tombola-romana.netlify.app

📱 Da smartphone: si apre l'app giocatore
💻 Da PC: scegli cosa fare (giocatore/banco/stampa)
```

---

## 🎮 SCENARI D'USO

### **Scenario 1: Serata in Famiglia**
**Setup:**
- Banco: PC apre `web.html`
- Giocatori: Tutti aprono `mobile.html` da cellulare

**Flusso:**
1. Giocatori scelgono numero cartella (es. 1-10)
2. Comunicano al banco il numero scelto
3. Banco registra: "Mario - Cartella 5"
4. Banco estrae simboli
5. Giocatori segnano sui loro cellulari
6. Banco controlla vittorie automaticamente

### **Scenario 2: Classe Scolastica**
**Setup:**
- Stampa 30 cartelle (15 fogli)
- Stampa 1 foglio tessere
- Stampa 1 tabellone

**Flusso:**
1. Distribuisci cartelle stampate
2. Estrai tessere dal sacchetto
3. Posizionale sul tabellone
4. Bambini segnano con fagioli/bottoni
5. Gioco tradizionale + valore educativo

### **Scenario 3: Evento Grande (50+ persone)**
**Setup:**
- Banco: PC con proiettore/TV (mostra `web.html`)
- Giocatori: Tutti con app mobile installata

**Flusso:**
1. Tutti vedono tabellone grande proiettato
2. Ognuno gioca dal proprio smartphone
3. Banco gestisce tutto automaticamente
4. Nessun foglio, tutto digitale!

---

## 📱 INSTALLAZIONE APP MOBILE

### Su Android (Chrome):
1. Apri `https://tuosito.netlify.app/mobile.html`
2. Appare banner verde "Installa Tombola Romana"
3. Tap "Installa"
4. Icona appare nella home!

### Su iPhone (Safari):
1. Apri `https://tuosito.netlify.app/mobile.html` con **Safari**
2. Tap pulsante "Condividi" (quadrato con freccia)
3. Scorri → "Aggiungi a Home"
4. Tap "Aggiungi"
5. Icona appare nella home!

---

## 🖨️ STAMPA SELETTIVA

La versione stampabile permette di stampare solo ciò che serve:

**Esempio 1: Solo 10 cartelle**
1. Apri versione stampabile
2. Imposta: Dalla 1 Alla 10
3. Clicca "Stampa Cartelle Selezionate"
4. Stampa solo 5 fogli invece di 45!

**Esempio 2: Solo la cartella 23**
1. Imposta: Dalla 23 Alla 23
2. Stampa solo metà foglio!

**Esempio 3: Tutto**
1. Clicca "Stampa Tutto"
2. 48 pagine totali

---

## 💡 CARATTERISTICHE UNICHE

### ✅ **Tessere = Celle Tabellone**
Le tessere stampabili hanno **esattamente** le stesse dimensioni delle celle del tabellone:
- Stesso layout
- Stesso font
- Stesse dimensioni
- Combaciano perfettamente quando ritagliate!

### ✅ **Tutte le 90 Tessere in 1 Foglio**
Griglia 10×9 = 90 tessere in 1 SOLO foglio A4!
- Risparmio 8 fogli rispetto ad altre versioni
- Più economico
- Più pratico

### ✅ **Redirect Intelligente**
Il sistema riconosce automaticamente:
- Smartphone → App mobile
- Tablet → Menu completo
- PC → Menu completo

### ✅ **Offline Completo**
Dopo la prima installazione, tutto funziona senza internet:
- App mobile
- Versione web
- Tutto in cache!

---

## 🏆 PREMI E REGOLE

### Premi (in ordine):
1. **AMBO:** 2 simboli stessa riga
2. **TERNO:** 3 simboli stessa riga
3. **QUATERNA:** 4 simboli stessa riga
4. **CINQUINA:** riga completa (5 simboli)
5. **TOMBOLA:** tutti i 15 simboli

### Regole:
- Ogni premio si vince **una sola volta**
- Chi fa un premio deve dichiararlo ad alta voce
- Il banco verifica la vittoria
- Dopo ogni premio si continua a giocare
- Con la TOMBOLA la partita termina

---

## 🎓 VALORE EDUCATIVO

La Tombola Romana insegna:
- 90 termini della vita nell'Antica Roma
- Divinità (Giove, Marte, Venere...)
- Edifici (Foro, Colosseo, Terme...)
- Personaggi (Cesare, Cicerone...)
- Oggetti quotidiani (Toga, Galea, Stilo...)
- Memoria visiva con emoji

**Perfetta per:**
- Scuole (educazione classica)
- Famiglie (cultura divertente)
- Eventi culturali
- Feste a tema romano

---

## 🔧 RISOLUZIONE PROBLEMI

### **Banner "Installa" non appare su mobile**
- Aspetta 5 secondi
- Ricarica la pagina
- Su iPhone usa SAFARI (non Chrome!)

### **App mobile mostra griglia sbagliata**
- Ruota il telefono in verticale
- Se persiste, ricarica la pagina
- Griglia corretta: 5 colonne × 3 righe

### **Tabellone stampabile esce fuori dal foglio**
- Assicurati di stampare su A4
- Margini: 5mm
- Scala: 100% (non "Adatta alla pagina")

### **Tessere non combaciano con tabellone**
- Assicurati di stampare entrambi con stessa scala
- Non modificare le impostazioni di stampa
- Devono essere identici!

---

## 📊 STATISTICHE PROGETTO

- **File totali:** 102
- **Dimensione ZIP:** 235 KB
- **Cartelle disponibili:** 90
- **Simboli romani:** 90
- **Versioni:** 3 (Mobile, Web, Stampabile)
- **Lingue:** Italiano
- **Tecnologie:** HTML5, CSS3, JavaScript, PWA
- **Compatibilità:** Android, iOS, Windows, Mac, Linux
- **Requisiti:** Nessuno (funziona offline dopo prima visita)

---

## 🌟 FUNZIONALITÀ AVANZATE

### **Sistema Banco:**
- Registrazione illimitata giocatori
- Tabellone interattivo
- Estrazione casuale garantita
- Controllo automatico vittorie
- Visualizzazione cartelle attive
- Riepilogo finale con tutti i vincitori

### **App Mobile:**
- Installabile come app nativa
- Icona personalizzata
- Apertura senza browser
- Vibrazione feedback
- Statistiche tempo reale
- Reset rapido

### **Versione Stampabile:**
- Stampa selettiva cartelle
- Separazione componenti (tabellone/cartelle/tessere)
- Istruzioni integrate
- Layout ottimizzato A4
- Risparmio carta massimo

---

## 📞 SUPPORTO

Per problemi o domande:
1. Controlla questa guida
2. Verifica di aver caricato TUTTI i 102 file su Netlify
3. Controlla che il sito usi HTTPS (Netlify lo fa automaticamente)
4. Prova con un browser diverso
5. Cancella cache e ricarica

---

## 🎉 BUON DIVERTIMENTO!

**Il sistema è completo, ottimizzato e pronto all'uso!**

Hai:
- ✅ App mobile professionale
- ✅ Sistema banco completo
- ✅ Kit stampabile economico
- ✅ Redirect intelligente
- ✅ Funzionamento offline
- ✅ 90 tessere in 1 foglio
- ✅ Nome progettista in tutti i file

**Carica su Netlify e inizia a giocare! 🏛️✨**

---

*Progettato da **Ciro Torelli** con passione per l'educazione e la cultura romana* 🏛️
