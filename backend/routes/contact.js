const express = require('express');
const router = express.Router();

// --- Route POST : traitement du formulaire de contact
router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation des champs obligatoires
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Veuillez remplir tous les champs obligatoires (nom, email, sujet, message)."
    });
  }

  // Validation format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "L'adresse email n'est pas valide."
    });
  }

  // -------------------------------------------------------
  // ICI : tu peux ajouter l'envoi d'email avec nodemailer
  // quand tu auras les infos email de l'entreprise
  // Pour l'instant on simule juste un succès
  // -------------------------------------------------------
  console.log("📧 Nouveau message reçu :");
  console.log(`   De      : ${name} (${email})`);
  console.log(`   Tél     : ${phone || "Non renseigné"}`);
  console.log(`   Sujet   : ${subject}`);
  console.log(`   Message : ${message}`);
  console.log("-------------------------------------------");

  res.json({
    success: true,
    message: "Votre message a bien été envoyé. Nous vous répondrons sous 48h."
  });
});

module.exports = router;
