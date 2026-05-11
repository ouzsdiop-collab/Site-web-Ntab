# Notes Techniques — NTAB Energy

## Stack technique

| Outil | Version | Usage |
|-------|---------|-------|
| React | 18+ | Framework UI |
| Vite | 5+ | Build tool |
| Framer Motion | 11+ | Animations UI |
| React Router | 6+ | Navigation (si multi-pages) |

## Librairies à installer selon besoins

```bash
# Animations (priorité)
npm install framer-motion

# Icons
npm install lucide-react

# Formulaires
npm install react-hook-form

# GSAP (si nécessaire pour animations complexes)
npm install gsap

# Three.js (si visuels 3D nécessaires)
npm install three @react-three/fiber @react-three/drei
```

## Logique des composants

- **Layout** : Header, Footer, MobileMenu — persistants sur toutes les pages
- **Sections** : composants autonomes importés dans App.jsx ou les pages
- **UI** : composants atomiques réutilisables (Button, Card, Badge, etc.)
- **Visuals** : composants visuels décoratifs (SVG, 3D, canvas)
- **Data** : centralisée dans `src/data/` pour faciliter les modifications

## Stratégie responsive

- Mobile-first : base CSS pour mobile, media queries pour grand écran
- Breakpoints : 640px / 768px / 1024px / 1280px
- Navigation mobile via `MobileMenu.jsx`
- Images responsive avec `srcset` ou lazy loading

## Stratégie animation

1. Framer Motion pour les reveals au scroll (`AnimatedReveal.jsx`)
2. CSS transitions pour états hover/focus
3. CSS animations pour effets décoratifs simples
4. GSAP uniquement pour séquences complexes si nécessaire
5. Toujours respecter `prefers-reduced-motion`

## Stratégie performance

- Images : WebP/AVIF, lazy loading, dimensions explicites
- Fonts : `font-display: swap`, preload des fonts critiques
- Code splitting : par route si multi-pages
- Bundle : surveiller avec `npm run build` + Lighthouse
- Core Web Vitals : CLS < 0.1, LCP < 2.5s, FID < 100ms
