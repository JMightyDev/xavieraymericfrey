# Configuration Email avec Brevo

Ce guide vous explique comment configurer **exclusivement Brevo** pour tous les envois d'emails de votre site (contact et newsletter).

## Pourquoi Brevo uniquement ?

- ✅ **Simplicité** : Une seule plateforme à gérer
- ✅ **Économique** : 300 emails/jour gratuits (largement suffisant)
- ✅ **Complet** : Gestion des contacts + envois transactionnels
- ✅ **Une seule clé API** à configurer

## Étape 1 : Créer un compte Brevo

1. Allez sur [brevo.com](https://www.brevo.com/)
2. Créez un compte gratuit
3. Confirmez votre email

## Étape 2 : Obtenir la clé API

1. Connectez-vous à votre compte Brevo
2. Allez dans **"Paramètres"** → **"Clés API"**
3. Cliquez sur **"Générer une nouvelle clé API"**
4. Donnez un nom (ex: "Site Web Xavier")
5. Copiez la clé générée (format : `xkeysib-...`)

## Étape 3 : Créer une liste de contacts

1. Dans Brevo, allez dans **"Contacts"** → **"Listes"**
2. Cliquez sur **"Créer une liste"**
3. Nom : "Newsletter - Ombres sur le lac"
4. Notez l'ID de la liste (numéro affiché dans l'URL ou les détails)

## Étape 4 : Configuration Vercel

Dans votre projet Vercel :

1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez ces variables :

```
BREVO_API_KEY=xkeysib-votre-cle-api-ici
BREVO_LIST_ID=4
```

⚠️ **Important** : Remplacez `4` par l'ID réel de votre liste créée à l'étape 3.

## Étape 5 : Configuration email expéditeur

Pour que vos emails ne finissent pas en spam :

### Option A : Utiliser votre domaine existant (xavieraymericfrey.fr)

1. Dans Brevo → **"Expéditeurs et IP"** → **"Domaines"**
2. Ajoutez `xavieraymericfrey.fr`
3. Configurez les enregistrements DNS (SPF, DKIM) selon les instructions Brevo
4. Modifiez les emails dans le code :
   ```javascript
   // Remplacer partout "xavieraymericfrey@gmail.com" par :
   from: "contact@xavieraymericfrey.fr";
   ```

### Option B : Garder Gmail (plus simple)

- Gardez `xavieraymericfrey@gmail.com` comme configuré
- Les emails peuvent finir en spam mais fonctionnent
- Recommandé pour commencer

## Test de fonctionnement

1. Déployez sur Vercel avec les nouvelles variables
2. Testez le formulaire de contact sur votre site
3. Testez l'inscription newsletter
4. Vérifiez dans Brevo :
   - **"Journaux"** → **"Emails transactionnels"** pour voir les envois
   - **"Contacts"** → **"Listes"** pour voir les nouveaux inscrits

## Limites du plan gratuit Brevo

- ✅ **300 emails/jour** (largement suffisant pour votre usage)
- ✅ **Contacts illimités**
- ✅ **Listes illimités**
- ✅ **Templates d'emails**
- ✅ **Statistiques détaillées**

## Support

Si vous avez des questions :

1. Consultez la [documentation Brevo](https://developers.brevo.com/)
2. Vérifiez les logs dans Vercel → Functions
3. Contactez-moi si besoin

---

**Résumé** : Une seule plateforme (Brevo), une seule clé API, configuration simple et gratuite pour tous vos besoins email ! 🎉
