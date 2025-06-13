# Site Web Xavier Aymeric Frey

Site web officiel de l'auteur Xavier Aymeric Frey, présentant son thriller policier **"Ombres sur le lac"** qui se déroule à Annecy. Site moderne et élégant développé avec les dernières technologies web.

## 🚀 Technologies

- **Next.js 15** - Framework React avec App Router et optimisations avancées
- **React 19** - Bibliothèque UI avec les dernières fonctionnalités
- **TailwindCSS v4** - Framework CSS utility-first nouvelle génération
- **TypeScript** - JavaScript avec typage statique pour la robustesse
- **Turbopack** - Bundler ultra-rapide pour le développement

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/xavieraymericfrey.git
cd xavieraymericfrey

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## 🏗️ Scripts disponibles

```bash
npm run dev     # Serveur de développement avec Turbopack
npm run build   # Build de production optimisé
npm run start   # Serveur de production
npm run lint    # Linter ESLint avec correction automatique
```

## 🎨 Design & Esthétique

### Palette de couleurs thématique

- **Mountain Blue** : `#1e3a8a` - Bleu profond des montagnes
- **Deep Night** : `#0f172a` - Noir mystérieux de la nuit
- **Lake Turquoise** : `#06b6d4` - Turquoise du lac d'Annecy
- **Sunset Orange** : `#f97316` - Orange des couchers de soleil
- **Snow White** : `#f8fafc` - Blanc pur de la neige
- **Morning Mist** : `#cbd5e1` - Gris de la brume matinale
- **Stone Gray** : `#64748b` - Gris pierre des montagnes

### Typographie

- **Titres & Éléments littéraires** : `font-serif` (Georgia, Times)
- **Texte principal** : `font-sans` (Inter, system fonts)
- **Tailles responsives** : Adaptation automatique mobile → desktop

### Effets visuels avancés

- **Glass-morphism** : Arrière-plans translucides avec flou
- **Dégradés dynamiques** : Transitions colorées thématiques
- **Animations fluides** : Scroll, hover, et micro-interactions
- **Halos lumineux** : Effets d'éclairage sophistiqués sur les éléments clés
- **Ombres multicouches** : Profondeur et élévation réalistes

## 📖 Structure du site

### Pages principales

- **🏠 Accueil** (`/`) - Hero avec photo auteur, citations inspirantes, présentation livre
- **👤 L'auteur** (`/auteur`) - Biographie complète, photo grand format, signature
- **📞 Contact** (`/contact`) - Formulaire interactif, informations pratiques
- **🛒 Boutique** (`/boutique`) - Page de pré-commande (en préparation)
- **📧 Newsletter** (`/newsletter`) - Inscription aux actualités

### Composants développés

#### 🎭 Header.tsx

- Navigation responsive avec menu mobile
- Transitions fluides entre pages
- Logo et branding cohérent

#### 🌟 Hero.tsx

- Section d'impact avec photo auteur élégante
- Effets décoratifs animés (cercles, halos)
- Présentation du livre avec ombres réalistes
- Call-to-action optimisé pour la conversion

#### 💬 Quote.tsx

- Deux citations littéraires avec cadres glass-morphism
- Guillemets décoratifs géants
- Séparateur animé élégant
- Message d'accroche pour inciter à la lecture

#### 📚 BookSection.tsx

- Présentation détaillée du livre avec résumé
- Image cliquable redirigeant vers la boutique
- Mise en page responsive avec effets hover

#### 📖 MockupSection.tsx

- Extrait du livre en avant-première
- Mise en forme soignée avec bordures colorées
- Boutons d'action pour pré-commande et découverte

#### 👨‍💼 Biography.tsx

- Photo auteur grande taille (320x384px) avec coins arrondis
- Biographie détaillée sur l'approche littéraire
- Signature manuscrite avec effets hover

#### 📝 ContactForm.tsx

- Formulaire interactif avec validation
- Champs : nom, email, sujet, message
- Gestion des états et feedback utilisateur

#### 🦶 Footer.tsx

- Navigation complète du site
- Informations sur le livre et date de sortie
- Liens réseaux sociaux avec icônes animées
- Crédits de développement avec lien vers JMighty.fr

#### 🔄 PageTransition.tsx

- Système de transitions fluides entre pages
- Amélioration de l'expérience utilisateur

### Hooks personnalisés

- **useScrollAnimation** : Animations automatiques au défilement
- **usePageTransition** : Navigation avec transitions fluides

## 📱 Optimisations mobiles

### Configuration viewport

- Meta viewport optimisé pour Next.js 15
- Prévention du zoom sur les champs de formulaire

### Design responsive

- **Header fixe** avec z-index élevé et compensation padding
- **Tailles adaptatives** : images, textes, espacements
- **Layout flexible** : réorganisation automatique des éléments
- **Boutons tactiles** : taille minimum 44px pour l'accessibilité
- **Scroll optimisé** : comportement fluide sur iOS

### Classes utilitaires mobiles

- Espacements réduits sur petit écran
- Textes et boutons adaptatifs
- Images responsives avec `object-contain`

## 🎯 Fonctionnalités avancées

### SEO & Performance

- ✅ Métadonnées optimisées par page avec Next.js 15
- ✅ Images optimisées avec composant `Image`
- ✅ Chargement prioritaire des ressources critiques
- ✅ Structure sémantique HTML5

### Expérience utilisateur

- ✅ Animations fluides et coordonnées
- ✅ Effets hover sophistiqués
- ✅ Navigation intuitive avec breadcrumbs visuels
- ✅ Feedback visuel sur toutes les interactions

### Accessibilité

- ✅ Contraste de couleurs WCAG AA
- ✅ Navigation au clavier
- ✅ Alt text sur toutes les images
- ✅ Structure de titres hiérarchique

### Performance

- ✅ Code splitting automatique avec Next.js
- ✅ Images au format WebP
- ✅ CSS optimisé avec TailwindCSS
- ✅ Lazy loading des composants

## 🎨 Personnalisation

### Modification du contenu

- **Textes** : Éditer directement dans les composants React
- **Images** : Remplacer dans `/public/images/`
- **Couleurs** : Modifier les variables dans `tailwind.config.ts`
- **Animations** : Ajuster les classes CSS et les délais

### Structure de fichiers

```
app/
├── components/          # Composants réutilisables
├── hooks/              # Hooks personnalisés
├── (pages)/            # Pages du site
│   ├── auteur/
│   ├── contact/
│   ├── boutique/
│   └── newsletter/
├── globals.css         # Styles globaux et animations
└── layout.tsx          # Layout principal avec métadonnées
```

## 🌐 Déploiement

### Vercel (recommandé)

1. Connecter le repository GitHub à Vercel
2. Configuration automatique détectée
3. Déploiement automatique à chaque push

### Variables d'environnement

```env
NEXT_PUBLIC_SITE_URL=https://xavieraymericfrey.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@xavieraymericfrey.com
```

## 🔧 Maintenance

### Mises à jour régulières

- Contenu des actualités et newsletter
- Statut de progression du livre
- Dates d'événements et séances de dédicace

### Monitoring

- Performance avec Lighthouse
- Erreurs avec Sentry (si configuré)
- Analytics avec Google Analytics (si configuré)

## 📞 Support & Développement

**Développé par JMighty**

- Site web : [jmighty.fr](https://www.jmighty.fr)
- Contact : contact@jmighty.fr

Pour toute question technique ou demande d'évolution, n'hésitez pas à me contacter.

---

© 2025 Xavier Aymeric Frey • Site créé par [JMighty](https://www.jmighty.fr)
