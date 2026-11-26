# CléService

Dépôt organisé en deux applications indépendantes :

```text
cleservice/
├── frontend/                 # React 18 + Vite
│   ├── public/               # Fichiers servis tels quels
│   └── src/
│       ├── AppAdmin/         # Interface d'administration
│       ├── SiteWeb/          # Site public, pages et contexte
│       ├── assets/           # Images, icônes et polices
│       ├── main.jsx          # Point d'entrée React
│       ├── router.jsx        # Routes (si utilisé)
│       ├── routes.js         # Définition des routes
│       └── theme.jsx         # Thème
├── backend/                  # API NestJS + TypeORM
│   ├── src/                  # Modules métier et bootstrap
│   ├── migrations/           # Migrations SQL/TypeORM
│   └── templates/            # Modèles d'e-mails
├── package.json              # Commandes racine
└── README.md
```

## Prérequis

- Node.js 20 ou supérieur
- npm
- PostgreSQL si l'API et les fonctionnalités qui utilisent la base sont activées

## Installation

```bash
npm run install:all
```

## Développement

Dans deux terminaux :

```bash
npm run dev:frontend
npm run dev:backend
```

Frontend Vite : `http://localhost:5173`  
API NestJS : `http://localhost:3000`  
Documentation Swagger : `http://localhost:3000/api`

## Compilation

```bash
npm run build:frontend
npm run build:backend
```

## Configuration du backend

Copier `backend/.env.example` vers `backend/.env`, puis renseigner les valeurs nécessaires. Ne jamais publier `.env`, clés Stripe, mots de passe, jetons ou clés API.

Le frontend se compile indépendamment et peut être déployé comme site statique. Le backend se déploie comme service Node/NestJS. Configurer les origines autorisées avec `CORS_ORIGIN` et adapter la liste CORS dans `backend/src/main.ts` aux domaines réellement utilisés.

## Remarques de maintenance

- Les dossiers `node_modules`, les sorties de compilation et les métadonnées Git ne sont pas inclus dans les archives de livraison.
- Les sous-dossiers métier existants ont été conservés pour éviter de casser les imports relatifs.
- Le point d'entrée HTML utilise maintenant `frontend/src/main.jsx` (le fichier `entry-client.jsx` n'existait pas dans l'archive initiale).
