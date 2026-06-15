const express = require('express');
const router = express.Router();
const content = require('../data/content.js');

// --- Route : infos générales (utilisées sur toutes les pages)
router.get('/company', (req, res) => {
  res.json({ success: true, data: content.company });
});

// --- Route : page Accueil
router.get('/home', (req, res) => {
  res.json({ success: true, data: content.home });
});

// --- Route : page À propos
router.get('/about', (req, res) => {
  res.json({ success: true, data: content.about });
});

// --- Route : page Services
router.get('/services', (req, res) => {
  res.json({ success: true, data: content.services });
});

// --- Route : page Offres d'emploi
router.get('/jobs', (req, res) => {
  res.json({ success: true, data: content.jobs });
});

// --- Route : détail d'une offre par ID
router.get('/jobs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const job = content.jobs.list.find(j => j.id === id);
  if (!job) {
    return res.status(404).json({ success: false, message: "Offre introuvable" });
  }
  res.json({ success: true, data: job });
});

// --- Route : page Contact (infos)
router.get('/contact', (req, res) => {
  res.json({ success: true, data: content.contact });
});

module.exports = router;
