const express = require('express');
const cors = require('cors');
const path = require('path');

const pagesRoutes = require('./routes/pages.js');
const contactRoutes = require('./routes/contact.js');

const app = express();
const PORT = 3000;

// -------------------------------------------------------
// MIDDLEWARES
// -------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// -------------------------------------------------------
// ROUTES API (toute la logique est ici, côté back-end)
// -------------------------------------------------------
app.use('/api/pages', pagesRoutes);
app.use('/api/contact', contactRoutes);

// Route santé pour vérifier que le serveur tourne
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Serveur ALNY opérationnel ✅', port: PORT });
});

// -------------------------------------------------------
// TOUTES LES AUTRES ROUTES → index.html (SPA)
// -------------------------------------------------------
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// -------------------------------------------------------
// DÉMARRAGE DU SERVEUR
// -------------------------------------------------------
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Serveur ALNY HR Consulting démarré !');
  console.log(`📡 URL locale : http://localhost:${PORT}`);
  console.log(`📋 API test  : http://localhost:${PORT}/api/health`);
  console.log('');
  console.log('Appuie sur CTRL+C pour arrêter le serveur.');
  console.log('');
});
