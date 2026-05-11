# NTAB Energy — Site Institutionnel

Refonte complète du site web institutionnel de NTAB Energy.

## Objectif

Créer un site premium, crédible et institutionnel pour NTAB Energy, cabinet de conseil spécialisé dans le développement et le financement de projets énergétiques en Afrique.

**Cible** : gouvernements, investisseurs, bailleurs, institutions financières, opérateurs privés.

## Installation

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Structure des dossiers

```
src/
  components/     Composants React modulaires
    layout/       Header, Footer, MobileMenu
    sections/     Sections de la page (Hero, Stats, etc.)
    ui/           Composants UI réutilisables
    visuals/      Composants visuels (SVG, 3D)
  data/           Contenus et configurations centralisés
  styles/         CSS global, variables, animations
  utils/          Utilitaires et constantes

public/
  assets/         Assets statiques
    images/       Images (hero, projets, équipe, icônes)

docs/             Documentation du projet
references/       Ressources d'inspiration
```

## Logo

Déposer le logo officiel ici : `public/assets/logo-ntab-energy.png`

Si absent, un placeholder texte s'affiche automatiquement dans le Header.

## UI/UX Inspiration Library

Bibliothèque locale : `references/ui-inspiration/ui-ux-pro-max-skill/`
Skill Claude active : `.claude/skills/ui-ux-pro-max/`

Utiliser uniquement comme **inspiration**, jamais comme copie directe.

## Magic MCP

Serveur MCP configuré au niveau utilisateur pour Claude Code.
Commande de vérification : `claude mcp list`

## Sécurité API

- Aucune clé API ne doit être versionnée dans ce repo
- Utiliser `.env.local` pour les variables d'environnement (non versionné)
- Le fichier `.gitignore` exclut `.env*`

## Prochaines étapes

1. Déposer le logo dans `public/assets/logo-ntab-energy.png`
2. Valider une des 4 directions artistiques avec le client
3. Développer la homepage selon la direction choisie
4. Intégrer les contenus réels depuis `src/data/siteContent.js`
5. Déployer sur Vercel / Netlify
