# GymSimple

Application web installable (PWA) pour guider des séances de musculation. Elle propose trois séances, une bibliothèque de machines courantes, des démonstrations animées, un timer de séries/repos et des consignes vocales. Elle ne demande pas de compte et n'enregistre aucune activité.

## Installation sur un Samsung Galaxy S21 Ultra

1. Publier l'application en HTTPS avec GitHub Pages (voir ci-dessous).
2. Ouvrir l'adresse GitHub Pages dans Chrome ou Samsung Internet et attendre le premier chargement complet.
3. Dans le menu du navigateur, choisir **Installer l'application** ou **Ajouter à l'écran d'accueil**.
4. Ouvrir GymSimple depuis son icône. Après le premier chargement, l'interface est disponible hors ligne.

Pour les consignes vocales hors ligne, télécharger une voix française dans les paramètres de synthèse vocale du téléphone. La disponibilité dépend du moteur vocal installé.

## Publication automatique avec GitHub Actions

1. Envoyer le workflow `.github/workflows/pages.yml` et les fichiers de l'application sur GitHub.
2. Dans **Settings → Pages**, choisir **GitHub Actions** comme source de compilation et de déploiement.
3. Envoyer un commit sur la branche `main`, ou lancer manuellement **Actions → Publier GymSimple sur GitHub Pages → Run workflow**.

Le workflow publie automatiquement les fichiers statiques à chaque mise à jour de `main`. Aucun outil de compilation ni dépendance externe n'est nécessaire. Le site reste accessible à l'adresse https://sly34150.github.io/Appli-test/.

## Lancer localement

Pour tester le mode hors ligne, ouvrir le dépôt avec un serveur local (le service worker ne fonctionne pas depuis une URL `file://`). Il suffit également de servir ces fichiers depuis GitHub Pages en HTTPS.
