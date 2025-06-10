# Configuration de l'envoi d'emails

## État actuel

Le formulaire de contact fonctionne mais simule uniquement l'envoi d'email. Les données sont validées et traitées correctement, mais aucun email n'est réellement envoyé.

## Configuration pour la production

### Option 1: Resend (Recommandé)

1. Créer un compte sur [resend.com](https://resend.com)
2. Installer le package : `npm install resend`
3. Ajouter la clé API dans `.env.local` :
   ```
   RESEND_API_KEY=re_xxxxxxxxx
   ```
4. Décommenter et adapter le code dans `app/api/contact/route.ts`

### Option 2: SendGrid

1. Créer un compte sur [sendgrid.com](https://sendgrid.com)
2. Installer le package : `npm install @sendgrid/mail`
3. Configurer la clé API dans `.env.local`

### Option 3: NodeMailer + SMTP

Pour utiliser un serveur SMTP (Gmail, Outlook, etc.) :

```bash
npm install nodemailer
npm install @types/nodemailer
```

## Fichiers modifiés

- `app/api/contact/route.ts` - API pour traiter les soumissions
- `app/contact/page.tsx` - Formulaire interactif avec validation
- Emails envoyés à : `contact@jmighty.fr`

## Fonctionnalités actuelles

✅ Validation côté client et serveur
✅ Messages d'erreur et de succès
✅ États de chargement
✅ Formulaire réactif et accessible
⏳ Envoi d'email réel (à configurer)
