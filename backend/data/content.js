const content = {

  company: {
    name: "ALNY HR Consulting SARL",
    tagline: "Your Strategy for Exceptional Talent",
    description: "Cabinet spécialisé dans le travail temporaire, la mise à disposition de personnel et le conseil en ressources humaines au Cameroun.",
    email: "ahcmng@alnyconsulting.com",
    phone1: "+237 679 535 471",
    phone2: "+237 659 465 634",
    address: "Douala, Cameroun",
    slogan: "Nous transformons vos défis RH en solutions performantes.",
    founded: "2020"
  },

  home: {
    hero: {
      title: "Votre partenaire stratégique",
      titleAccent: "en Ressources Humaines.",
      subtitle: "ALNY HR Consulting SARL — Des solutions RH fiables, flexibles et performantes au service de votre croissance. Travail temporaire, mise à disposition, recrutement, conseil RH et gestion de la paie.",
      cta_primary: "Voir nos services",
      cta_secondary: "Nous contacter"
    },
    stats: [
      { number: "6", label: "Services RH complets" },
      { number: "PME", label: "Grandes entreprises & ONG" },
      { number: "72h", label: "Délai de mise à disposition" },
      { number: "100%", label: "Conformité Code du travail" }
    ],
    why_us: {
      title: "Pourquoi choisir ALNY HR Consulting ?",
      points: [
        {
          icon: "🎯",
          title: "Expertise RH de haut niveau",
          text: "Notre équipe managériale possède une solide expérience en gestion des RH, en environnement multi-sectoriel et en gestion d'opérations complexes."
        },
        {
          icon: "⚖️",
          title: "Maîtrise de la réglementation",
          text: "Nous opérons dans le strict respect du Code du travail camerounais et des obligations sociales (CNPS, déclarations, contrats, conformité administrative)."
        },
        {
          icon: "🤝",
          title: "Approche personnalisée",
          text: "Chaque entreprise est différente. Nous analysons vos besoins spécifiques avant toute proposition pour vous offrir des solutions sur mesure."
        }
      ]
    },
    process: {
      title: "Notre processus en 5 étapes",
      steps: [
        { num: "01", title: "Analyse approfondie de vos besoins" },
        { num: "02", title: "Proposition technique adaptée" },
        { num: "03", title: "Validation contractuelle sécurisée" },
        { num: "04", title: "Sélection et intégration rapide" },
        { num: "05", title: "Suivi et évaluation continue" }
      ]
    },
    impact: [
      "Optimisation des coûts RH",
      "Réduction des risques juridiques",
      "Amélioration de la productivité",
      "Concentration sur vos objectifs stratégiques"
    ]
  },

  about: {
    title: "Qui sommes-nous ?",
    intro: "ALNY HR CONSULTING SARL est une entreprise spécialisée dans le travail temporaire, la mise à disposition de personnel et le conseil en ressources humaines au Cameroun.",
    body: "Nous existons parce que les entreprises font face à des variations d'activité imprévisibles, des contraintes réglementaires strictes, des risques sociaux et juridiques élevés, et des difficultés à recruter rapidement des profils qualifiés. Nous accompagnons les entreprises dans la gestion efficace, flexible et conforme de leurs besoins en capital humain. Nous intervenons auprès des PME, grandes entreprises, groupes nationaux et organisations internationales.",
    role: "Notre rôle : vous permettre de vous concentrer sur votre cœur de métier pendant que nous sécurisons et optimisons votre gestion du personnel.",
    mission: {
      title: "Notre mission",
      text: "Accompagner les entreprises dans la gestion efficace, flexible et conforme de leurs besoins en capital humain, en leur permettant de se concentrer sur leur cœur de métier pendant que nous sécurisons et optimisons leur gestion du personnel."
    },
    vision: {
      title: "Notre vision",
      text: "Devenir un acteur de référence en gestion des ressources humaines au Cameroun et en Afrique centrale, reconnu pour son professionnalisme, sa rigueur réglementaire et la qualité de ses services."
    },
    values: [
      { title: "Expertise", text: "Une équipe managériale expérimentée en environnement multi-sectoriel." },
      { title: "Conformité", text: "Respect strict du Code du travail et des obligations sociales camerounaises." },
      { title: "Flexibilité", text: "Des solutions adaptées aux variations d'activité de chaque entreprise." },
      { title: "Confiance", text: "Un partenaire stratégique engagé dans votre performance et votre conformité." }
    ],
    clients: {
      title: "Nos clients",
      types: ["PME locales", "Grandes entreprises", "Groupes nationaux", "Organisations internationales"]
    }
  },

  services: {
    title: "Nos Services",
    subtitle: "Des solutions RH complètes, fiables et performantes pour accompagner votre croissance",
    list: [
      {
        id: "mise-a-disposition",
        icon: "👥",
        title: "Mise à disposition du personnel",
        description: "Nous fournissons du personnel qualifié pour répondre à vos besoins immédiats.",
        badge: "Le plus demandé",
        details: [
          "Vous gagnez du temps dans le recrutement",
          "Vous réduisez vos charges administratives",
          "Vous limitez vos risques juridiques",
          "Vous adaptez vos effectifs à votre activité",
          "Nous prenons en charge : contrats, gestion admin, paie, CNPS"
        ]
      },
      {
        id: "interim",
        icon: "⏱️",
        title: "Travail Temporaire (Intérim)",
        description: "Nous gérons entièrement les missions temporaires pour une flexibilité maximale.",
        badge: null,
        details: [
          "Flexibilité maximale selon votre activité",
          "Remplacement rapide en cas d'absence",
          "Continuité de votre production garantie",
          "Conformité au Code du travail camerounais",
          "Personnel disponible sous 48 à 72h"
        ]
      },
      {
        id: "recrutement",
        icon: "🔍",
        title: "Recrutement & Placement du personnel",
        description: "Nous identifions les meilleurs profils pour votre organisation.",
        badge: null,
        details: [
          "Accès à une base de candidats qualifiés",
          "Méthodologie rigoureuse de sélection",
          "Réduction du taux d'erreur de recrutement",
          "Gain de temps pour vos managers",
          "Personnel d'exécution, techniciens, superviseurs, cadres et managers"
        ]
      },
      {
        id: "conseil-rh",
        icon: "📊",
        title: "Conseil en Ressources Humaines",
        description: "Nous structurons et professionnalisons votre gestion RH.",
        badge: null,
        details: [
          "Amélioration de la performance des équipes",
          "Réduction des conflits sociaux",
          "Sécurisation juridique de votre entreprise",
          "Meilleure organisation interne",
          "Accompagnement stratégique personnalisé"
        ]
      },
      {
        id: "formation",
        icon: "🎓",
        title: "Formation & Développement des Compétences",
        description: "Nous accompagnons les entreprises dans le renforcement des capacités de leurs équipes.",
        badge: null,
        details: [
          "Amélioration des performances individuelles et collectives",
          "Réduction des erreurs opérationnelles",
          "Motivation et fidélisation du personnel",
          "Mise en conformité réglementaire",
          "Renforcement de la compétitivité de l'entreprise"
        ]
      },
      {
        id: "paie-cnps",
        icon: "💰",
        title: "Gestion de la Paie & Sécurité Sociale (CNPS)",
        description: "Nous assurons la gestion complète et sécurisée de votre paie et de vos obligations sociales.",
        badge: null,
        details: [
          "Élaboration des bulletins de paie",
          "Calcul des salaires, primes et retenues",
          "Déclarations sociales mensuelles",
          "Gestion et déclaration CNPS",
          "Assistance lors des contrôles sociaux"
        ]
      }
    ]
  },

  jobs: {
    title: "Offres d'Emploi",
    subtitle: "Découvrez les opportunités de nos entreprises partenaires au Cameroun",
    list: [
      {
        id: 1,
        title: "Développeur Web Full-Stack",
        company: "Entreprise Tech – Douala",
        location: "Douala, Cameroun",
        type: "CDI",
        sector: "Informatique",
        salary: "Selon profil",
        description: "Développeur Full-Stack maîtrisant React et Node.js pour rejoindre une équipe dynamique.",
        date: "2025-06-01"
      },
      {
        id: 2,
        title: "Responsable Commercial",
        company: "Entreprise de distribution",
        location: "Yaoundé, Cameroun",
        type: "CDI",
        sector: "Commerce",
        salary: "300 000 – 450 000 FCFA",
        description: "Développement du portefeuille clients et gestion d'une équipe de commerciaux terrain.",
        date: "2025-06-05"
      },
      {
        id: 3,
        title: "Comptable Senior",
        company: "Cabinet d'audit",
        location: "Douala, Cameroun",
        type: "CDD 6 mois",
        sector: "Finance",
        salary: "250 000 – 350 000 FCFA",
        description: "Gestion de la comptabilité générale et analytique pour un portefeuille de PME clientes.",
        date: "2025-06-08"
      },
      {
        id: 4,
        title: "Chargé(e) RH",
        company: "Groupe industriel",
        location: "Douala, Cameroun",
        type: "CDI",
        sector: "Ressources Humaines",
        salary: "Selon expérience",
        description: "Gestion administrative du personnel, suivi des contrats, paie et déclarations CNPS.",
        date: "2025-06-10"
      },
      {
        id: 5,
        title: "Assistante de Direction",
        company: "Société internationale",
        location: "Douala, Cameroun",
        type: "CDI",
        sector: "Administration",
        salary: "200 000 – 280 000 FCFA",
        description: "Support administratif à la Direction Générale, gestion d'agenda et coordination.",
        date: "2025-06-12"
      }
    ]
  },

  contact: {
    title: "Contactez-nous",
    subtitle: "Entreprise à la recherche de talents ou candidat en quête d'opportunités ? Parlons-en.",
    form: {
      subjects: [
        "Je suis une entreprise — je cherche un talent",
        "Je suis un candidat — je cherche une opportunité",
        "Demande de mise à disposition de personnel",
        "Demande d'intérim / travail temporaire",
        "Externalisation de la paie & CNPS",
        "Conseil en Ressources Humaines",
        "Formation & Développement des compétences",
        "Autre demande"
      ]
    }
  }
};

module.exports = content;
