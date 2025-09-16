# 🤖 Portfolio Développeur IA

Un portfolio moderne et interactif pour développeur spécialisé en intelligence artificielle, construit avec les dernières technologies web.

## ✨ Fonctionnalités

### 🎯 **Sections principales**
- **Hero Section** avec animations fluides et éléments flottants
- **À propos** avec méthodologie de travail et processus
- **Compétences** avec barres de progression animées et timeline
- **Projets IA** avec galerie filtrée par catégorie
- **Formulaire de devis interactif** en 4 étapes
- **Contact** avec formulaire et informations

### 💫 **Design moderne inspiré de 21st.dev**
- **Grille de fond subtile** avec effet de parallax
- **Particules animées** pour l'ambiance IA
- **Éléments flottants** avec micro-animations
- **Animation de typing** pour les titres
- **Cartes améliorées** avec effets de glow et bordures gradient
- **Boutons avec effets shimmer** et animations spring

### 🎨 **Fonctionnalités UI/UX**
- Mode sombre/clair automatique
- Navigation smooth scroll
- Responsive design complet
- Animations Framer Motion
- Composants shadcn/ui personnalisés

### 💰 **Calculateur de devis intelligent**
Système de pricing automatique basé sur :

**Types de projets :**
- Site vitrine : 1 200€
- Application web : 4 500€
- Application mobile : 7 500€
- Projet IA : 8 000€
- Dashboard : 5 000€

**Fonctionnalités additionnelles :**
- Authentification : +800€
- Paiement en ligne : +1 200€
- API IA : +2 000€
- Analytics : +600€
- Multilingue : +900€
- Automatisation : +1 500€
- CMS Admin : +1 000€
- API REST : +1 300€

**Modificateurs de délais :**
- Flexible (2-3 mois) : -10%
- Standard (4-6 semaines) : Prix normal
- Urgent (2-3 semaines) : +30%

## 🛠 Technologies utilisées

### Core Framework
- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS utility-first

### UI Components & Design
- **shadcn/ui** - Composants UI modernes
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes
- **next-themes** - Gestion thème sombre/clair

### Composants personnalisés
- `EnhancedCard` - Cartes avec effets visuels
- `EnhancedButton` - Boutons avec animations shimmer
- `GlowBadge` - Badges avec effet lumineux
- `TypingAnimation` - Animation de texte qui s'écrit
- `GridBackground` - Grille de fond subtile
- `ParticlesBackground` - Particules animées
- `FloatingElements` - Éléments flottants

## 🚀 Installation & Démarrage

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

## 📁 Structure du projet

```
src/
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux + animations
│   ├── layout.tsx         # Layout principal avec ThemeProvider
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui + personnalisés
│   │   ├── enhanced-card.tsx
│   │   ├── enhanced-button.tsx
│   │   └── glow-badge.tsx
│   ├── Navbar.tsx        # Navigation sticky
│   ├── HeroSection.tsx   # Section héro avec animations
│   ├── AboutSection.tsx  # Section à propos
│   ├── SkillsSection.tsx # Compétences avec barres de progression
│   ├── ProjectsSection.tsx # Galerie de projets
│   ├── QuoteForm.tsx     # Formulaire de devis multi-étapes
│   ├── ContactSection.tsx # Section contact
│   ├── GridBackground.tsx # Grille de fond
│   ├── ParticlesBackground.tsx # Particules animées
│   ├── FloatingElements.tsx # Éléments flottants
│   └── TypingAnimation.tsx # Animation de texte
└── lib/
    └── utils.ts          # Utilitaires
```

## 🎨 Personnalisation

### Modifier le contenu
1. **Informations personnelles** : Éditer les sections dans chaque composant
2. **Projets** : Modifier le tableau `projects` dans `ProjectsSection.tsx`
3. **Compétences** : Ajuster `skillCategories` dans `SkillsSection.tsx`
4. **Pricing** : Modifier les tarifs dans `QuoteForm.tsx`

### Changer les couleurs
Les couleurs principales sont définies dans :
- `globals.css` pour les variables CSS
- Gradients : `from-blue-600 to-purple-600`

### Ajouter des animations
Utiliser Framer Motion avec les patterns existants :

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

## 📧 Intégration Email

Pour activer l'envoi d'emails :

1. **EmailJS** (recommandé pour le frontend)
```bash
npm install emailjs-com
```

2. **Nodemailer** (pour API route)
```bash
npm install nodemailer
```

3. **Resend** (service moderne)
```bash
npm install resend
```

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier .next
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 SEO & Performance

Le projet inclut :
- Métadonnées Open Graph
- Structure sémantique HTML
- Images optimisées Next.js
- Lazy loading des composants
- Animations optimisées avec Framer Motion

## 🔧 Scripts disponibles

```bash
npm run dev         # Serveur de développement
npm run build       # Build de production
npm run start       # Serveur de production
npm run lint        # Vérification ESLint
```

## 📝 TODO / Améliorations futures

- [ ] Intégration service d'email (EmailJS/Resend)
- [ ] Génération PDF pour les devis
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Blog avec MDX
- [ ] Testimonials clients
- [ ] Multi-langue (i18n)
- [ ] Tests unitaires (Jest/Vitest)
- [ ] Storybook pour les composants

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

---

**Créé avec ❤️ et IA**  
Portfolio moderne pour développeurs spécialisés en intelligence artificielle.