# Dossier Images - Xavier Aymeric Frey

## Structure des dossiers

```
public/
├── images/
│   ├── hero/
│   │   ├── xavier-portrait.png      ← Photo de l'auteur
│   │   ├── livre-cover.png          ← Couverture du livre
|   |   ├── signature-finale.png     ← Signature de l'auteur
│   │   └── background.png           ← Image de fond hero
│   ├── book/
│   │   ├── ombre-sur-le-lac.webp    ← Couverture principale
│   │   └── mockup-livre.png         ← Mockup du livre
│   └── og-image.jpg                 ← Image Open Graph (1200x630px)
├── icons/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── icon-192x192.png
└── social/
    ├── instagram.svg
    ├── youtube.svg
    └── tiktok.svg
```

## Comment utiliser

Dans vos composants React :

```jsx
import Image from "next/image";

<Image
	src="/images/hero/xavier-portrait.png"
	alt="Xavier Aymeric Frey"
	width={400}
	height={400}
/>;
```

## Formats recommandés

- **Photos** : JPG/JPEG (optimisé pour les photos)
- **Logos/Icônes** : SVG ou PNG (avec transparence)
- **Favicon** : ICO (16x16, 32x32, 48x48px)
- **Open Graph** : JPG 1200x630px
