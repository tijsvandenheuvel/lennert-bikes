# Lennert Bikes

Een website/platform om Lennert's fietstocht van Thessaloniki naar Ararat te volgen en te sponsoren. Voor elke 100 km die Lennert fietst, kunnen mensen een bedrag doneren om de Koerden te helpen heropbouwen na de aardbeving.

## Project Overzicht

- Reis: Thessaloniki → Ararat (ongeveer 2500 km)
- Duur: Ongeveer 1 maand
- Doel: Sponsorgeld ophalen voor Koerdische heropbouw na de aardbeving

## Technische Stack

- **Frontend**: Vue 3 + Vite + Pinia
- **Backend**: Node.js + Express + PostgreSQL
- **Hosting**: GitHub Pages (frontend), TBD (backend)
- **Integraties**: Polarsteps, Google Forms, (later: Mollie, PayPal)

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

### Deployment naar GitHub Pages

Het project wordt automatisch gedeployed naar GitHub Pages wanneer wijzigingen naar de `master` branch worden gepusht. De GitHub Actions workflow in `.github/workflows/deploy.yml` neemt de volgende stappen:

1. Checkout de code
2. Installeer Node.js 18
3. Installeer dependencies
4. Bouw het project
5. Zorg dat .nojekyll bestand aanwezig is
6. Deploy de `dist` map naar de `gh-pages` branch

Voor handmatige deployment, volg deze stappen:

```bash
# Bouw het project
npm run build

# Zorg dat .nojekyll bestand aanwezig is
touch dist/.nojekyll

# Deploy naar gh-pages branch
git add dist -f
git commit -m "Manual deployment"
git subtree push --prefix dist origin gh-pages
```

## Features

### MVP (Fase 1)
- Projectinformatie en reis details
- Sponsorformulier via Google Forms
- Polarsteps integratie voor routetracking
- Admin panel voor kilometerstand updates
- Statistieken over afgelegde afstand en sponsoring

### Toekomstige Features (Fase 2-3)
- Eigen blog/updates systeem met foto's
- Geavanceerde kaartintegratie met Leaflet
- Directe betalingsintegratie (Mollie, PayPal)
- Automatische route updates

## Bijdragen

Momenteel is dit een besloten project. Als je wilt bijdragen, neem contact op met de eigenaar.

## Licentie

Alle rechten voorbehouden.
