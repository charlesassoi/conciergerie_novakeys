# Architecture détaillée

## 1. Vision d'ensemble
Le projet est séparé en deux blocs :

- **Frontend** : site public de conciergerie immobilière
- **Backend** : API métier qui reçoit les leads, stocke les biens et servira plus tard au dashboard propriétaire/admin

```text
[ Visiteur / Propriétaire ]
          |
          v
[ Frontend Next.js ]
          |
          v
[ API Express ]
          |
          v
[ PostgreSQL via Prisma ]
```

## 2. Pourquoi cette architecture ?
Cette architecture est adaptée à une conciergerie immobilière car elle permet de séparer :
- l'expérience commerciale (site vitrine)
- la logique métier (leads, biens, réservations, reporting)
- la persistance des données

Elle est simple à lancer au début, puis facile à faire évoluer vers :
- espace propriétaire
- espace admin / opérations
- synchronisation Airbnb / Booking
- paiement en ligne
- automatisation CRM / emailing

---

## 3. Frontend
Dossier : `frontend/`

### Responsabilité
Le frontend gère :
- l'affichage du site
- les sections marketing
- les formulaires de contact et d'estimation
- l'appel à l'API backend

### Technologies
- **Next.js** : framework React moderne, bon pour SEO et performance
- **Tailwind CSS** : style rapide et maintenable
- **Lucide React** : icônes

### Organisation
```text
frontend/
  app/
    layout.tsx        -> layout global
    page.tsx          -> page d'accueil
    globals.css       -> styles globaux
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    Pricing.tsx
    WhyUs.tsx
    EstimateForm.tsx
    Faq.tsx
    Contact.tsx
    Footer.tsx
```

### Logique frontend
- `page.tsx` compose la page à partir de composants réutilisables.
- `EstimateForm.tsx` et `Contact.tsx` envoient les données à l'API via `fetch()`.
- L'URL API est externalisée via `NEXT_PUBLIC_API_URL`.

### Pourquoi c'est bien pour ton besoin
Pour une conciergerie, le site public doit inspirer confiance, convertir vite, être lisible sur mobile et référencé correctement. Next.js est un bon choix pour ça.

---

## 4. Backend
Dossier : `backend/`

### Responsabilité
Le backend centralise la logique métier :
- réception des leads
- validation des données
- stockage des biens
- futur point d'entrée pour auth, dashboard, réservations, incidents, revenus

### Technologies
- **Express** : API simple et rapide à mettre en place
- **Prisma** : ORM moderne, lisible et pratique pour évoluer vite
- **PostgreSQL** : base fiable et solide pour données métier
- **Zod** : validation stricte des payloads

### Organisation
```text
backend/
  prisma/
    schema.prisma     -> modèles de données
  src/
    app.js            -> configuration Express
    server.js         -> démarrage serveur
    config/
      prisma.js       -> client Prisma
    controllers/
      leadController.js
      propertyController.js
    services/
      leadService.js
      propertyService.js
    routes/
      leadRoutes.js
      propertyRoutes.js
    middleware/
      errorHandler.js
```

### Rôle de chaque couche
- **Routes** : définissent les endpoints HTTP
- **Controllers** : reçoivent la requête, valident, orchestrent
- **Services** : contiennent la logique d'accès aux données
- **Config** : gère les connexions techniques
- **Middleware** : gère les erreurs, sécurité, logs, etc.

Cette séparation évite d'avoir tout le code mélangé. C'est important dès qu'on commence à grandir.

---

## 5. Base de données
Le schéma actuel contient deux entités principales.

### Lead
Utilisé pour capter :
- les demandes de contact
- les demandes d'estimation
- les prospects propriétaires

Champs actuels :
- nom
- email
- téléphone
- ville
- type de bien
- nombre de pièces
- message
- source du formulaire
- statut
- date de création

### Property
Utilisé pour gérer les biens exploités.

Champs actuels :
- titre
- ville
- adresse
- type de bien
- nombre de pièces
- capacité
- prix par nuit
- taux d'occupation
- statut
- coordonnées propriétaire

### Évolutions recommandées
Tu pourras ajouter ensuite :
- `Booking`
- `Owner`
- `Guest`
- `MaintenanceTicket`
- `CleaningTask`
- `RevenueReport`
- `Review`
- `Invoice`

---

## 6. Flux métier actuel

### A. Prospect propriétaire
```text
Visiteur ouvre le site
 -> remplit le formulaire d'estimation
 -> frontend envoie les données à POST /api/leads
 -> backend valide avec Zod
 -> backend enregistre dans PostgreSQL
 -> futur usage : CRM, emailing, suivi commercial
```

### B. Contact commercial
```text
Visiteur ouvre le formulaire de contact
 -> frontend appelle POST /api/leads
 -> backend stocke le prospect
 -> équipe commerciale traite le lead
```

### C. Gestion des biens
```text
Admin / opérateur crée un bien
 -> POST /api/properties
 -> backend valide
 -> base stocke les informations du bien
 -> futur usage : dashboard, rentabilité, planning ménage, maintenance
```

---

## 7. Endpoints API inclus

### Santé API
- `GET /api/health`

### Leads
- `GET /api/leads`
- `POST /api/leads`

### Properties
- `GET /api/properties`
- `POST /api/properties`

---

## 8. Ce qu'il manque pour un produit vraiment prêt à vendre
La base fournie est un **starter propre et sérieux**, mais pour une vraie exploitation commerciale, tu dois ajouter ensuite :

### Bloc business
- tableau de bord propriétaire
- back-office admin
- gestion des réservations
- planning ménage / check-in / maintenance
- calcul revenus / commission / marge

### Bloc sécurité
- authentification JWT ou session
- rôles (admin, propriétaire, opérateur)
- rate limiting
- validation renforcée
- journalisation des actions

### Bloc production
- déploiement Vercel pour frontend
- Railway / Render / VPS pour API
- PostgreSQL managé
- monitoring et sauvegardes

### Bloc marketing
- pages SEO par ville
- blog conseils location courte durée
- intégration Calendly / CRM / email
- analytics conversion

---

## 9. Architecture cible recommandée à moyen terme
Quand tu auras des clients, voici l'architecture cible :

```text
Frontend public (site vitrine)
    |
    +-- Formulaire leads
    +-- Pages SEO par ville
    +-- Simulateur de revenus

Frontend privé (dashboard propriétaire / admin)
    |
    +-- Authentification
    +-- Reporting revenus
    +-- Réservations
    +-- Incidents / maintenance
    +-- Tâches ménage

API métier
    |
    +-- Module Leads
    +-- Module Owners
    +-- Module Properties
    +-- Module Bookings
    +-- Module Operations
    +-- Module Finance

Base de données PostgreSQL
    |
    +-- Leads
    +-- Owners
    +-- Properties
    +-- Bookings
    +-- Tasks
    +-- Reports
```

---

## 10. Recommandation stratégique
Si ton objectif est de lancer vite :
1. commence avec ce site vitrine + capture de leads
2. ajoute un mini back-office admin
3. ajoute l'espace propriétaire
4. branche ensuite des automatisations opérationnelles

C'est la meilleure séquence pour ne pas développer trop lourd trop tôt.
