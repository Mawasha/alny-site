# ALNY HR Consulting — Site Web

Site vitrine professionnel pour le cabinet ALNY HR Consulting.
Architecture : **Node.js/Express (back-end)** + **HTML/CSS/JS pur (front-end affichage uniquement)**

---

## 🚀 DÉMARRAGE RAPIDE (3 étapes)

### Étape 1 — Ouvrir le projet dans VS Code
1. Ouvre VS Code
2. Fichier > Ouvrir le dossier → sélectionne le dossier `alny-site`

### Étape 2 — Installer les dépendances
Ouvre le terminal dans VS Code (menu `Terminal > Nouveau terminal`) et tape :

```bash
cd backend
npm install
```

Attend que l'installation se termine (quelques secondes).

### Étape 3 — Lancer le serveur
Dans le terminal :

```bash
npm start
```

Tu dois voir :
```
🚀 Serveur ALNY HR Consulting démarré !
📡 URL locale : http://localhost:3000
```

### Étape 4 — Voir le site
Ouvre ton navigateur et va sur : **http://localhost:3000**

---

## 📁 Structure du projet

```
alny-site/
├── backend/
│   ├── server.js          ← Point d'entrée, démarre le serveur
│   ├── routes/
│   │   ├── pages.js       ← API : fournit les données au front
│   │   └── contact.js     ← API : traite le formulaire de contact
│   ├── data/
│   │   └── content.js     ← ⭐ TOUT LE CONTENU DU SITE EST ICI
│   └── package.json
│
└── frontend/
    ├── index.html         ← Structure HTML (squelette)
    ├── css/
    │   └── style.css      ← Tous les styles visuels
    └── js/
        └── main.js        ← Appelle l'API et affiche les données
```

---

## ✏️ MODIFIER LE CONTENU

**Pour changer les textes, services, offres d'emploi :**
→ Ouvre `backend/data/content.js` et modifie les données.
→ Sauvegarde (Ctrl+S) → le site se met à jour automatiquement.

Pas besoin de redémarrer le serveur pour les changements de contenu.

---

## 📋 ROUTES API DISPONIBLES

| Route | Description |
|---|---|
| GET /api/health | Vérifier que le serveur fonctionne |
| GET /api/pages/company | Infos générales de l'entreprise |
| GET /api/pages/home | Données page Accueil |
| GET /api/pages/about | Données page À propos |
| GET /api/pages/services | Liste des services |
| GET /api/pages/jobs | Liste des offres d'emploi |
| GET /api/pages/jobs/:id | Détail d'une offre |
| GET /api/pages/contact | Données page Contact |
| POST /api/contact | Envoi du formulaire de contact |

---

## 🛑 ARRÊTER LE SERVEUR
Dans le terminal : **Ctrl + C**

## 🔄 REDÉMARRER
```bash
npm start
```
