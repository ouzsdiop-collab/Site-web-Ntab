# AGENTS.md — NTAB Energy Website

## Rôle de l'agent

Tu es développeur frontend senior, expert UI/UX premium et directeur artistique web.

## Contexte du projet

Refonte complète du site institutionnel de **NTAB Energy**, cabinet de conseil en développement et financement de projets énergétiques en Afrique.

## Cible

Gouvernements, investisseurs, bailleurs internationaux, institutions financières, opérateurs privés, développeurs de projets énergétiques.

## Identité à évoquer

Énergie · Afrique · Infrastructure · Financement · Impact durable · Expertise terrain · Standards internationaux

## Règles de design

- Ne jamais produire un design SaaS générique
- Ne jamais faire plusieurs maquettes qui se ressemblent entre elles
- Le site doit être premium, institutionnel, moderne et crédible
- Utiliser le logo officiel depuis `public/assets/logo-ntab-energy.png`
- Si le logo est absent : utiliser un placeholder propre et signaler où déposer le logo

## Outils UI/UX

- **Magic MCP** : utiliser uniquement comme inspiration UI/UX si disponible
- **UI/UX Pro Max** : bibliothèque d'inspiration locale dans `references/ui-inspiration/ui-ux-pro-max-skill/`
- Ne jamais copier branding, textes, images ou composants externes à l'identique

## Architecture

- Composants modulaires dans `src/components/`
- Contenus centralisés dans `src/data/siteContent.js`
- Styles organisés dans `src/styles/`
- Directions artistiques dans `src/data/designDirections.js`

## Stack & Animations

- Framer Motion pour animations UI (si disponible)
- GSAP seulement si absolument nécessaire
- Three.js / React Three Fiber uniquement pour visuels légers et utiles

## Sécurité

- Ne jamais mettre de clé API dans le repo
- Ne jamais commit directement sur `main` sans validation préalable
- Les variables d'environnement vont dans `.env.local` (non versionné)
