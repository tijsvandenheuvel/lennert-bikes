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
├── public/             # Statische bestanden
├── src/                # Frontend broncode
│   ├── assets/         # Afbeeldingen, fonts, etc.
│   ├── components/     # Vue componenten
│   ├── views/          # Vue pagina's
│   ├── router/         # Vue Router configuratie
│   ├── stores/         # Pinia stores
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── server/             # Backend code (Node.js)
├── .gitignore          # Git ignore file
├── package.json        # Dependencies en scripts
└── README.md           # Dit bestand
```

### Scripts

- `npm run dev`: Start de development server
- `npm run build`: Bouwt het project voor productie
- `npm run preview`: Bekijk de gebouwde versie lokaal

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
