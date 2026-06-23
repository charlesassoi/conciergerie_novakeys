# Nova Keys — préparation production

## Lancer en local

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run build
npm run start
```

## Variables obligatoires

- `NEXT_PUBLIC_SITE_URL` : URL publique du site.
- `NEXT_PUBLIC_API_URL` : URL publique de l'API qui reçoit `POST /leads`.
- `DATABASE_URL` : uniquement côté backend Prisma.

## Déploiement recommandé

- Frontend : Vercel.
- API : Render, Railway, Fly.io ou VPS.
- Base : PostgreSQL managé.
- Domaine : `novakeys.fr` pour le site et `api.novakeys.fr` pour l'API.

## Points faits dans cette version

- Arborescence Next.js corrigée : `app/`, `components/`, `prisma/`.
- Métadonnées SEO enrichies.
- Headers de sécurité basiques.
- Suppression du header `X-Powered-By`.
- Formulaires durcis : labels accessibles, honeypot anti-spam, timeout, état de chargement, nettoyage des valeurs.
- Ajout de `.env.example` et d'une checklist de déploiement.

## Attention

Cette archive prépare surtout le frontend. Pour une vraie production, l'API backend doit exister et accepter `POST /api/leads` avec validation serveur, CORS, rate limit et stockage PostgreSQL.
