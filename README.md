# Lennert Bikes

Een website/platform om Lennert's fietstocht van Thessaloniki naar Ararat te volgen en te sponsoren. Voor elke 100 km die Lennert fietst, kunnen mensen een bedrag doneren om de Koerden te helpen heropbouwen na de aardbeving.

## Project Overzicht

- Reis: Thessaloniki → Ararat (ongeveer 2500 km)
- Duur: Ongeveer 1 maand
- Doel: Sponsorgeld ophalen voor Koerdische heropbouw na de aardbeving

## Technische Stack

- **Frontend**: Vue 3 + Vite + Pinia
- **Backend**: Node.js + Express + PostgreSQL (gepland voor Fase 2)
- **Hosting**: GitHub Pages (frontend), Heroku/Vercel (backend, gepland)
- **Integraties**: Polarsteps, Google Forms, (later: Mollie, PayPal)

## Features en Status

### Fase 1: ✅ Voltooid
- ✅ Responsive website met moderne UI
- ✅ Projectinformatie en reis details
- ✅ Polarsteps integratie voor routetracking
- ✅ Google Forms integratie voor sponsoring
- ✅ Basisstatistieken over afgelegde afstand en sponsoring
- ✅ GitHub Pages deployment met geautomatiseerde workflow

### Fase 2: 🏗️ Gepland
- 🔧 PostgreSQL database implementatie
- 🔧 Node.js + Express backend API
- 🔧 Admin authenticatie en beveiligd dashboard
- 🔧 Blog/updates systeem met foto's
- 🔧 Kilometerstand tracking

### Fase 3: 📅 Later
- Directe betalingsintegratie (Mollie, PayPal)
- Geavanceerde kaartintegratie met Leaflet
- Automatische route updates

## Ontwikkeling

### Setup

```bash
# Kloon de repository
git clone https://github.com/tijsvandenheuvel/lennert-bikes.git
cd lennert-bikes

# Installeer dependencies
npm install

# Start de development server
npm run dev
```

### Projectstructuur

```
lennert-bikes/
├── docs/               # Projectdocumentatie
│   └── .nojekyll       # Voorkomt Jekyll-verwerking op GitHub Pages
├── public/             # Statische bestanden
│   └── .nojekyll       # Voorkomt Jekyll-verwerking op GitHub Pages
├── src/                # Frontend broncode
│   ├── assets/         # Afbeeldingen, fonts, etc.
│   ├── components/     # Vue componenten
│   ├── views/          # Vue pagina's
│   ├── router/         # Vue Router configuratie
│   ├── stores/         # Pinia stores
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── dist/               # Gebouwde productiebestanden
│   └── .nojekyll       # Voorkomt Jekyll-verwerking op GitHub Pages
├── .github/            # GitHub Actions configuratie
│   └── workflows/      # Workflows voor CI/CD
│       └── deploy.yml  # Deployment workflow
├── .gitignore          # Git ignore file
├── vite.config.js      # Vite configuratie
├── package.json        # Dependencies en scripts
└── README.md           # Dit bestand
```

### Scripts

- `npm run dev`: Start de development server
- `npm run build`: Bouwt het project voor productie
- `npm run preview`: Bekijk de gebouwde versie lokaal
- `npm run deploy`: Handmatig het project deployen naar GitHub Pages

### Deployment naar GitHub Pages

Het project wordt automatisch gedeployed naar GitHub Pages wanneer wijzigingen naar de `master` branch worden gepusht. De GitHub Actions workflow in `.github/workflows/deploy.yml` neemt de volgende stappen:

1. Checkout de code
2. Installeer Node.js 18
3. Installeer dependencies
4. Bouw het project
5. Voegt de benodigde bestanden toe (.nojekyll, redirects, etc.)
6. Deploy de `dist` map naar de `gh-pages` branch

## Geplande Backend (Fase 2)

Voor de volgende fase van het project zijn we van plan:

1. **Database Setup**
   - PostgreSQL database voor het opslaan van:
     - Blog/update posts
     - Kilometerstand gegevens
     - Sponsorgegevens
     - Admin gebruikers

2. **API Endpoints**
   - Node.js + Express backend met endpoints voor:
     - CRUD operaties voor updates/blog posts
     - Authenticatie en autorisatie
     - Kilometerstand bijwerken en ophalen
     - Sponsorgegevens ophalen

3. **Admin Dashboard**
   - Beveiligde login
   - Content management voor updates
   - Upload en beheer van afbeeldingen
   - Kilometerstanden bijhouden
   - Sponsorstatistieken bekijken

## Bijdragen

Momenteel is dit een besloten project. Als je wilt bijdragen, neem contact op met de eigenaar.

## Licentie

Alle rechten voorbehouden.
