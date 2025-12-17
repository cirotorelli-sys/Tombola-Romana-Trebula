# 🏛️ Tombola Romana - Trebula Mutuesca

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-enabled-orange)](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/mobile.html)

> Un progetto educativo interattivo che unisce il gioco della tombola tradizionale con la storia e la cultura dell'antica Roma, dedicato al sito archeologico di Trebula Mutuesca.

**🌐 [Gioca Ora](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/)** | **📱 [App Mobile](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/mobile.html)** | **🖥️ [Versione Banco](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/web.html)**

---

## 📖 Indice

- [Descrizione](#-descrizione)
- [Caratteristiche](#-caratteristiche)
- [Demo e Link](#-demo-e-link)
- [Come Giocare](#-come-giocare)
- [Installazione App](#-installazione-app)
- [Versione Stampabile](#-versione-stampabile)
- [Valore Educativo](#-valore-educativo)
- [Tecnologie](#-tecnologie)
- [Struttura Progetto](#-struttura-progetto)
- [Licenza](#-licenza)
- [Crediti](#-crediti)

---

## 🎯 Descrizione

**Tombola Romana** è un sistema completo a 3 livelli che trasforma il tradizionale gioco della tombola in un'esperienza educativa dedicata alla civiltà romana. Invece dei classici numeri 1-90, utilizza **90 simboli rappresentativi** della vita nell'antica Roma: divinità, edifici, personaggi storici, oggetti quotidiani e molto altro.

Il progetto è stato creato per valorizzare e diffondere la conoscenza del sito archeologico di **Trebula Mutuesca**, importante centro della Sabina romana.

---

## ✨ Caratteristiche

### 🎮 Sistema Completo a 3 Livelli

#### 📱 **Livello 1: App Mobile (Giocatori)**
- Interfaccia touch ottimizzata per smartphone
- Selezione cartella da 1 a 90
- Griglia 5×3 con 15 simboli romani
- Segnatura rapida con tap
- Statistiche in tempo reale
- **PWA installabile** - Funziona offline come app nativa
- Supporto orientamento verticale e orizzontale

#### 🖥️ **Livello 2: Versione Web/Banco (Organizzatore)**
- Sistema completo di gestione partita
- Registrazione illimitata giocatori
- Tabellone interattivo con 90 simboli numerati
- Estrazione casuale automatica
- Controllo automatico vittorie (Ambo, Terno, Quaterna, Cinquina, Tombola)
- Visualizzazione cartelle attive
- Cronologia estrazioni
- Riepilogo finale con tutti i vincitori

#### 🖨️ **Livello 3: Versione Stampabile**
- **48 pagine totali** ottimizzate per stampa A4
- 1 pagina: Tabellone completo 10×10
- 45 pagine: 90 Cartelle (2 per foglio)
- **1 pagina: 90 Tessere** (TUTTE in un solo foglio!)
- 1 pagina: Istruzioni complete
- **Stampa selettiva**: Scegli quante cartelle stampare
- Tessere con dimensioni identiche alle celle del tabellone

### 🎨 Design e UX

- ✅ **Numeri ovunque**: Ogni simbolo è numerato (1-90) per facile identificazione
- ✅ **Responsive design**: Ottimizzato per smartphone, tablet e PC
- ✅ **Redirect intelligente**: Rileva il dispositivo e mostra la versione appropriata
- ✅ **Tema romano coerente**: Colori imperiali (rosso, oro, marrone)
- ✅ **Emoji visuali**: Ogni simbolo ha un'emoji per migliore riconoscimento
- ✅ **Accessibilità**: Font leggibili, contrasti ottimali

### 🚀 Tecnologia PWA

- Installabile come app nativa su Android e iOS
- Funziona offline dopo la prima visita
- Icone personalizzate
- Esperienza fullscreen
- Nessun app store necessario

---

## 🌐 Demo e Link

### Link Principali

**🏠 Pagina Principale (Menu):**
```
https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/
```
Da smartphone → redirect automatico a mobile  
Da PC/Tablet → menu con 3 opzioni

**📱 App Mobile Diretta:**
```
https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/mobile.html
```

**🖥️ Versione Banco:**
```
https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/web.html
```

**🖨️ Versione Stampabile:**
```
https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/tombola_romana_stampabile.html
```

**🎴 Cartelle Individuali (es. cartella 23):**
```
https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/cartella_23.html
```

---

## 🎮 Come Giocare

### Scenario 1: Partita Digitale

**Setup:**
- **Banco/Organizzatore**: Apre `web.html` da PC o tablet
- **Giocatori**: Aprono `mobile.html` da smartphone e scelgono numero cartella

**Flusso di gioco:**
1. Ogni giocatore comunica al banco quale cartella ha scelto (es. "Mario - Cartella 15")
2. Il banco registra tutti i giocatori nel sistema
3. Il banco clicca "Inizia Partita"
4. Il banco estrae i simboli uno alla volta
5. I giocatori segnano automaticamente sul loro smartphone
6. Il sistema controlla automaticamente le vittorie e annuncia i premi
7. Si continua fino alla Tombola!

### Scenario 2: Partita Fisica (Stampata)

**Setup:**
- Stampa il tabellone, le cartelle necessarie e le 90 tessere
- Ritaglia le tessere lungo i bordi tratteggiati
- Prepara un sacchetto per l'estrazione

**Flusso di gioco:**
1. Distribuisci le cartelle stampate ai giocatori
2. Estrai una tessera dal sacchetto
3. Annuncia ad alta voce: "Numero 23 - Giove!"
4. Posiziona la tessera sulla casella corrispondente del tabellone
5. I giocatori segnano con fagioli, bottoni o pennarello
6. Continua fino alla vittoria!

### Premi (in ordine)

1. **AMBO** → 2 simboli sulla stessa riga
2. **TERNO** → 3 simboli sulla stessa riga
3. **QUATERNA** → 4 simboli sulla stessa riga
4. **CINQUINA** → Riga completa (5 simboli)
5. **TOMBOLA** → Tutti i 15 simboli ✨

---

## 📱 Installazione App

### Su Android (Chrome)

1. Apri il link dell'app mobile da Chrome
2. Vedrai un banner "Aggiungi a schermata Home" o "Installa"
3. Tap su "Installa"
4. L'icona apparirà nella home del telefono
5. Apri l'app installata - funziona anche offline!

### Su iPhone/iPad (Safari)

1. Apri il link dell'app mobile da **Safari** (non Chrome!)
2. Tap sul bottone "Condividi" (quadrato con freccia ↑)
3. Scorri e seleziona "Aggiungi a Home"
4. Tap "Aggiungi"
5. L'icona apparirà nella home
6. Apri l'app installata - funziona anche offline!

---

## 🖨️ Versione Stampabile

### Kit Economici

**Base (10 giocatori):**
- 1 tabellone + 5 fogli cartelle (1-10) + 1 foglio tessere + 1 istruzioni
- **Totale: 8 fogli**

**Medio (30 giocatori):**
- 1 tabellone + 15 fogli cartelle (1-30) + 1 foglio tessere + 1 istruzioni
- **Totale: 18 fogli**

**Completo (90 giocatori):**
- 1 tabellone + 45 fogli cartelle (1-90) + 1 foglio tessere + 1 istruzioni
- **Totale: 48 fogli**

### Stampa Selettiva

La versione stampabile include una funzionalità di **stampa selettiva**:
- Scegli quali cartelle stampare (es. solo 1-10, o solo cartella 23)
- Risparmia carta stampando solo ciò che serve
- Perfetto per gruppi di diverse dimensioni

### Innovazione: 90 Tessere in 1 Foglio

A differenza delle tombole tradizionali che richiedono 9-15 fogli per le tessere, questo progetto include **TUTTE le 90 tessere in un UNICO foglio A4** grazie a una griglia ottimizzata 10×9.

Le tessere hanno le **stesse identiche dimensioni** delle celle del tabellone, garantendo perfetta compatibilità quando ritagliate.

---

## 🎓 Valore Educativo

### Cosa Insegna

La Tombola Romana introduce bambini e ragazzi a **90 termini della vita nell'antica Roma**:

**🏛️ Architettura e Luoghi:**
- Foro, Colosseo, Circo Massimo, Terme, Acquedotto...

**⚡ Divinità:**
- Giove, Marte, Venere, Minerva, Apollo...

**👑 Personaggi Storici:**
- Cesare, Augusto, Cicerone, Nerone, Traiano...

**🗡️ Vita Militare:**
- Legione, Gladio, Scudo, Corazza, Centurione...

**📜 Cultura e Vita Quotidiana:**
- Toga, Anfora, Stilo, Papiro, Villa...

### Ideale Per

- 🏫 **Scuole**: Didattica della storia romana
- 👨‍👩‍👧‍👦 **Famiglie**: Apprendimento divertente
- 🏛️ **Musei**: Attività educativa interattiva
- 🎭 **Eventi culturali**: Animazione a tema storico
- 📚 **Biblioteche**: Laboratori per bambini

### Fascia d'Età

**Consigliata: 6-99 anni**
- Bambini 6-12: Apprendimento giocoso
- Ragazzi 13-18: Consolidamento cultura classica
- Adulti: Intrattenimento culturale
- Anziani: Stimolazione cognitiva + cultura

---

## 🛠️ Tecnologie

### Frontend

- **HTML5** - Struttura semantica
- **CSS3** - Design responsive e animazioni
- **JavaScript (Vanilla)** - Logica del gioco, nessuna dipendenza esterna

### PWA (Progressive Web App)

- **Service Worker** - Cache offline e funzionalità app-like
- **Web App Manifest** - Metadati per installazione
- **Cache API** - Storage locale per funzionamento offline

### Hosting

- **GitHub Pages** - Hosting gratuito e affidabile
- **Git** - Controllo versione
- **GitHub Actions** - Deploy automatico

### Design

- **Mobile-First** - Progettato prima per mobile
- **Responsive Design** - Adattamento automatico a tutti i dispositivi
- **CSS Grid & Flexbox** - Layout moderni e flessibili
- **Media Queries** - Ottimizzazione per diverse dimensioni schermo

---

## 📂 Struttura Progetto

```
Tombola-Romana-Trebula/
│
├── index.html                          # Menu principale con redirect
├── mobile.html                         # App mobile giocatori
├── web.html                           # Versione banco organizzatore
├── banco.html                         # Alias di web.html
├── tombola_romana_stampabile.html     # Versione stampabile
│
├── manifest-mobile.json               # Config PWA mobile
├── manifest.json                      # Config PWA generale
├── service-worker-mobile.js           # Service worker mobile
├── service-worker.js                  # Service worker generale
│
├── icon-192.png                       # Icona app 192x192
├── icon-512.png                       # Icona app 512x512
│
├── cartella_1.html                    # Cartella individuale 1
├── cartella_2.html                    # Cartella individuale 2
├── ...                                # (90 file cartelle)
├── cartella_90.html                   # Cartella individuale 90
│
├── README.md                          # Questo file
├── README-COMPLETO.md                 # Documentazione dettagliata
├── GUIDA_INSTALLAZIONE_APP.md         # Guida installazione PWA
└── LICENSE                            # Licenza MIT
```

**Totale: 103 file**

---

## 📊 Statistiche

- **Simboli romani**: 90
- **Cartelle disponibili**: 90
- **Simboli per cartella**: 15
- **Dimensione progetto**: ~240 KB (ZIP completo)
- **Pagine stampabili**: 48 (con tutte le cartelle)
- **Lingue**: Italiano
- **Browser supportati**: Chrome, Firefox, Safari, Edge (tutti moderni)
- **Dispositivi supportati**: Android, iOS, Windows, Mac, Linux

---

## 🤝 Contributi

Questo progetto è open source! Contributi, segnalazioni bug e suggerimenti sono benvenuti.

### Come Contribuire

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

### Segnala un Bug

Apri una [Issue](https://github.com/cirotorelli-sys/Tombola-Romana-Trebula/issues) descrivendo:
- Il problema riscontrato
- Come riprodurlo
- Screenshot (se possibile)
- Dispositivo e browser utilizzati

---

## 📄 Licenza

Questo progetto è distribuito sotto licenza **MIT** - vedi il file [LICENSE](LICENSE) per dettagli.

Sei libero di:
- ✅ Usare il progetto per scopi personali e commerciali
- ✅ Modificare il codice
- ✅ Distribuire copie
- ✅ Usare in progetti privati

Con l'unico obbligo di:
- 📝 Mantenere l'attribuzione dell'autore originale

---

## 👨‍💻 Crediti

**Progettato e Sviluppato da: Ciro Torelli**

### Riconoscimenti

- **Trebula Mutuesca**: Sito archeologico che ha ispirato il progetto
- **Cultura Romana**: Per la ricchezza storica e culturale
- **Comunità Open Source**: Per gli strumenti e le librerie utilizzate

---

## 🔗 Link Utili

- **🌐 Sito Web**: [tombola-romana.github.io](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/)
- **📦 Repository**: [GitHub](https://github.com/cirotorelli-sys/Tombola-Romana-Trebula)
- **🏛️ Trebula Mutuesca**: [Informazioni sul sito archeologico](https://www.trebulamutuesca.it/)

---

## 📬 Contatti

Per domande, suggerimenti o collaborazioni, apri una [Issue](https://github.com/cirotorelli-sys/Tombola-Romana-Trebula/issues) sul repository.

---

## ⭐ Sostieni il Progetto

Se ti piace questo progetto:
- ⭐ Lascia una stella su GitHub
- 🔄 Condividi con amici e insegnanti
- 💬 Lascia un feedback
- 🐛 Segnala bug o suggerisci miglioramenti

---

<div align="center">

**🏛️ Tombola Romana - Trebula Mutuesca 🏛️**

*Dove la storia romana diventa gioco*

**[Gioca Ora](https://cirotorelli-sys.github.io/Tombola-Romana-Trebula/)** • **[Documentazione](README-COMPLETO.md)** • **[Guida App](GUIDA_INSTALLAZIONE_APP.md)**

---

Fatto con ❤️ da Ciro Torelli

</div>
