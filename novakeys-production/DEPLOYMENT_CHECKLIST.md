# Checklist production

## Avant build

- [ ] Remplacer le téléphone, l'email et les mentions légales par les vraies informations.
- [ ] Créer `.env.local` à partir de `.env.example`.
- [ ] Vérifier que `NEXT_PUBLIC_API_URL` pointe vers l'API de production.
- [ ] Lancer `npm run typecheck`.
- [ ] Lancer `npm run build`.

## Backend obligatoire

- [ ] Endpoint `POST /api/leads` opérationnel.
- [ ] Validation serveur avec Zod ou équivalent.
- [ ] CORS limité au domaine du frontend.
- [ ] Rate limiting sur les formulaires.
- [ ] Logs d'erreur.
- [ ] Envoi email ou intégration CRM après création d'un lead.

## SEO / légal

- [ ] Ajouter une page Mentions légales.
- [ ] Ajouter une Politique de confidentialité RGPD.
- [ ] Ajouter une page CGV si vente/prestation contractualisée en ligne.
- [ ] Ajouter un sitemap et un robots.txt.
- [ ] Ajouter Google Search Console et analytics conforme RGPD.
