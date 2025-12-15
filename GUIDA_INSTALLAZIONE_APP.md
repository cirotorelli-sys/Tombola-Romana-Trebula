# 📱 TOMBOLA ROMANA - Guida Installazione App

## 🎯 Cosa Hai

La Tombola Romana è ora una **Progressive Web App (PWA)** che può essere installata su qualsiasi dispositivo come un'app nativa!

---

## 📲 INSTALLAZIONE SU ANDROID

### Metodo 1: Da Browser (CONSIGLIATO)

1. **Carica i file su un server web**
   - Puoi usare servizi gratuiti come:
     - GitHub Pages (gratuito)
     - Netlify (gratuito)
     - Vercel (gratuito)
     - Firebase Hosting (gratuito)

2. **Apri il sito dal browser del telefono**
   - Usa Chrome o Firefox
   - Vai all'indirizzo del tuo sito

3. **Installa l'app**
   - Apparirà automaticamente un banner: "Installa Tombola Romana"
   - Clicca su "Installa"
   - OPPURE:
     - Chrome: Menu (⋮) → "Installa app" o "Aggiungi a schermata Home"
     - Firefox: Menu (⋮) → "Installa"

4. **Usa l'app**
   - L'icona apparirà nella home del telefono
   - Funziona completamente OFFLINE
   - Si apre come un'app nativa

---

## 🍎 INSTALLAZIONE SU iOS (iPhone/iPad)

1. **Carica i file su un server web** (come sopra)

2. **Apri con Safari** (IMPORTANTE: deve essere Safari, non Chrome)

3. **Aggiungi alla Home**
   - Tap sul pulsante "Condividi" (quadrato con freccia)
   - Scorri e tap su "Aggiungi a Home"
   - Personalizza il nome se vuoi
   - Tap "Aggiungi"

4. **Usa l'app**
   - L'icona apparirà nella home
   - Funziona offline

---

## 💻 INSTALLAZIONE SU PC (Windows/Mac/Linux)

1. **Apri il sito con Chrome, Edge o Brave**

2. **Installa l'app**
   - Vedrai un'icona "Installa" nella barra degli indirizzi
   - Clicca e conferma
   - OPPURE: Menu → "Installa Tombola Romana"

3. **Usa l'app**
   - Si apre come finestra separata
   - Funziona offline

---

## 🌐 OPZIONE 1: Hosting Gratuito con GitHub Pages

### Passo 1: Crea un account GitHub
- Vai su [github.com](https://github.com)
- Clicca "Sign up" (è gratuito)

### Passo 2: Crea un nuovo repository
- Clicca il pulsante "+" in alto → "New repository"
- Nome: `tombola-romana`
- Seleziona "Public"
- Clicca "Create repository"

### Passo 3: Carica i file
- Clicca "uploading an existing file"
- Trascina TUTTI i file della tombola:
  - index.html
  - banco.html
  - manifest.json
  - service-worker.js
  - icon-192.png
  - icon-512.png
  - cartella_1.html ... cartella_90.html
- Clicca "Commit changes"

### Passo 4: Attiva GitHub Pages
- Vai su "Settings" del repository
- Scorri fino a "Pages" (nella sidebar sinistra)
- In "Source" seleziona "main" o "master"
- Clicca "Save"
- Aspetta 1-2 minuti

### Passo 5: Ottieni il link
- Tornerai alla pagina "Pages"
- Vedrai: "Your site is published at https://tuonome.github.io/tombola-romana"
- Questo è il tuo link!

### Passo 6: Usa l'app
- Apri il link dal cellulare
- Installa come descritto sopra

---

## 🌐 OPZIONE 2: Hosting Gratuito con Netlify (PIÙ FACILE)

### Passo 1: Vai su Netlify
- Apri [netlify.com](https://netlify.com)
- Clicca "Sign up" (puoi usare email o GitHub)

### Passo 2: Deploy semplice
- Dopo il login, vedrai "Want to deploy a new site without connecting to Git?"
- Clicca "Deploy manually"
- OPPURE trascina la cartella con tutti i file nell'area indicata

### Passo 3: Carica i file
- Seleziona TUTTI i file della Tombola Romana
- Trascina nell'area di upload
- Netlify caricherà automaticamente

### Passo 4: Ottieni il link
- Netlify genererà un link tipo: `https://random-name-123.netlify.app`
- Puoi personalizzare il nome: Settings → Domain management → Change site name

### Passo 5: Usa l'app
- Apri il link dal cellulare
- Installa come descritto sopra

---

## 🚀 OPZIONE 3: Server Locale (Solo per Test)

Se vuoi solo testare in locale senza pubblicare online:

### Su Windows:
```
1. Scarica Python da python.org
2. Apri il Prompt dei comandi nella cartella dei file
3. Esegui: python -m http.server 8000
4. Apri: http://localhost:8000
```

### Su Mac/Linux:
```
1. Apri il Terminale nella cartella dei file
2. Esegui: python3 -m http.server 8000
3. Apri: http://localhost:8000
```

⚠️ **ATTENZIONE**: Con il server locale:
- Funziona solo sul tuo computer
- Altri dispositivi nella stessa rete WiFi possono accedere usando l'IP del computer
- NON funzionerà offline come PWA (serve HTTPS per questo)

---

## ✅ VERIFICA CHE FUNZIONI

Dopo l'installazione, verifica:

1. ✅ L'icona appare nella home del dispositivo
2. ✅ Cliccando l'icona si apre l'app (non il browser)
3. ✅ Funziona anche in modalità aereo (offline)
4. ✅ L'interfaccia è come un'app nativa (senza barra del browser)

---

## 🎮 COME GIOCARE

### Setup:
1. **Banco** apre l'app e sceglie "Apri il Banco"
2. **Giocatori** aprono l'app e scelgono la loro cartella (1-90)
3. I giocatori comunicano al banco: nome + numero cartella
4. Il banco registra tutti e clicca "Inizia Partita"

### Durante il gioco:
1. Banco estrae e annuncia: "GIOVE!" ⚡
2. Giocatori segnano sulla loro cartella mobile
3. Il banco vede automaticamente tutte le cartelle
4. Quando qualcuno vince, il banco lo annuncia

---

## 🛠️ RISOLUZIONE PROBLEMI

### "Il banner di installazione non appare"
- Assicurati di usare HTTPS (non HTTP)
- Prova a ricaricare la pagina
- Su iPhone, usa Safari (non Chrome)

### "L'app non funziona offline"
- Dopo la prima installazione, apri l'app almeno una volta online
- Il service worker deve scaricare tutti i file
- Poi funzionerà offline

### "Non riesco a caricare su GitHub Pages"
- Assicurati che il repository sia "Public"
- Controlla che Pages sia attivato in Settings
- Aspetta 2-3 minuti dopo l'attivazione

---

## 📞 SUPPORTO

Se hai problemi:
1. Controlla che tutti i file siano caricati correttamente
2. Verifica che il sito usi HTTPS
3. Prova con un browser diverso
4. Cancella cache e ricarica

---

## 🎉 BUON GIOCO!

La Tombola Romana è ora installabile come app su qualsiasi dispositivo!

Divertiti e... che vinca il migliore! 🏛️🎲
