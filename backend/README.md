# Backend CléService

API NestJS avec modules métier dans `src/` (authentification, utilisateurs, marques, produits, commandes, paiement, contact, e-mail et téléversement).

## Démarrage

```bash
npm install
cp .env.example .env
npm run start:dev
```

Renseigner les variables de ` .env.example` selon l'environnement. Ne jamais versionner `.env`.

- Compilation : `npm run build`
- Production : `npm run start:prod`
- Swagger : `/api`
