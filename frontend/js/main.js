const API = 'http://localhost:3000/api';
const app = document.getElementById('app');

function navigate(page) {
  document.getElementById('navLinks').classList.remove('open');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  switch (page) {
    case 'home':     loadHome();     break;
    case 'about':    loadAbout();    break;
    case 'services': loadServices(); break;
    case 'jobs':     loadJobs();     break;
    case 'contact':  loadContact();  break;
    default:         loadHome();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLoader() {
  app.innerHTML = `<div class="loader"><div class="loader-spinner"></div><p>Chargement...</p></div>`;
}

async function fetchData(endpoint) {
  const response = await fetch(`${API}${endpoint}`);
  if (!response.ok) throw new Error(`Erreur API : ${response.status}`);
  const json = await response.json();
  return json.data;
}

async function loadFooter() {
  try {
    const c = await fetchData('/pages/company');
    document.getElementById('footer-tagline').textContent = c.slogan;
    document.getElementById('footer-address').textContent  = c.address;
    document.getElementById('footer-email').textContent    = c.email;
    document.getElementById('footer-phone').innerHTML      = `${c.phone1}<br>${c.phone2}`;
  } catch(e) { console.error('Footer error:', e); }
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
}

function showError(msg) {
  app.innerHTML = `<div class="loader"><p style="color:#991B1B">⚠️ ${msg}</p><a href="#" class="btn btn-navy" onclick="navigate('home')" style="margin-top:16px">Retour à l'accueil</a></div>`;
}

// ─── PAGE ACCUEIL ────────────────────────────────────────────
async function loadHome() {
  showLoader();
  try {
    const d = await fetchData('/pages/home');
    app.innerHTML = `
      <!-- HERO -->
      <section class="hero">
        <div class="hero-container">
          <div class="hero-badge">🌍 Cabinet RH — Douala, Cameroun</div>
          <h1>${d.hero.title}<span class="accent">${d.hero.titleAccent}</span></h1>
          <p class="hero-sub">${d.hero.subtitle}</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary" onclick="navigate('services')">
              ${d.hero.cta_primary} →
            </a>
            <a href="#" class="btn btn-outline" onclick="navigate('contact')">
              ${d.hero.cta_secondary}
            </a>
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section class="stats-section">
        <div class="stats-grid">
          ${d.stats.map(s => `
            <div class="stat-item">
              <div class="stat-number">${s.number}</div>
              <div class="stat-label">${s.label}</div>
            </div>`).join('')}
        </div>
      </section>

      <!-- POURQUOI NOUS -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>${d.why_us.title}</h2>
            <div class="section-divider"></div>
          </div>
          <div class="why-grid">
            ${d.why_us.points.map(p => `
              <div class="why-card">
                <div class="why-icon">${p.icon}</div>
                <h3>${p.title}</h3>
                <p>${p.text}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- PROCESSUS -->
      <section class="section section-alt">
        <div class="container">
          <div class="section-header">
            <h2>${d.process.title}</h2>
            <div class="section-divider"></div>
          </div>
          <div class="process-steps">
            ${d.process.steps.map(s => `
              <div class="process-step">
                <div class="step-num">${s.num}</div>
                <div class="step-title">${s.title}</div>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- IMPACT -->
      <section class="section impact-section">
        <div class="container">
          <div class="impact-layout">
            <div class="impact-left">
              <h2>Résultats pour votre entreprise</h2>
              <p>Choisir ALNY HR CONSULTING SARL, c'est choisir un partenaire stratégique engagé dans la performance et la conformité de votre organisation.</p>
              <a href="#" class="btn btn-primary" onclick="navigate('contact')" style="margin-top:24px">
                Démarrer maintenant →
              </a>
            </div>
            <div class="impact-right">
              ${d.impact.map(i => `
                <div class="impact-item">
                  <span class="impact-check">✓</span>
                  <span>${i}</span>
                </div>`).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  } catch(err) { showError("Impossible de charger la page d'accueil."); console.error(err); }
}

// ─── PAGE À PROPOS ───────────────────────────────────────────
async function loadAbout() {
  showLoader();
  try {
    const d = await fetchData('/pages/about');
    app.innerHTML = `
      <section class="about-hero">
        <div class="container">
          <h1>${d.title}</h1>
          <p>${d.intro}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="about-body">
            <div class="about-text">
              <p>${d.body}</p>
              <p class="about-role"><strong>${d.role}</strong></p>
            </div>
            <div class="clients-box">
              <h4>Nous intervenons auprès de</h4>
              ${d.clients.types.map(t => `<div class="client-type">✓ ${t}</div>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <div class="mission-vision">
            <div class="mv-card">
              <h3>${d.mission.title}</h3>
              <p>${d.mission.text}</p>
            </div>
            <div class="mv-card">
              <h3>${d.vision.title}</h3>
              <p>${d.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>Nos valeurs</h2>
            <div class="section-divider"></div>
          </div>
          <div class="values-grid">
            ${d.values.map(v => `
              <div class="value-card">
                <h4>${v.title}</h4>
                <p>${v.text}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>
    `;
  } catch(err) { showError("Impossible de charger la page À propos."); console.error(err); }
}

// ─── PAGE SERVICES ───────────────────────────────────────────
async function loadServices() {
  showLoader();
  try {
    const d = await fetchData('/pages/services');
    app.innerHTML = `
      <section class="services-hero">
        <div class="container">
          <h1>${d.title}</h1>
          <p>${d.subtitle}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="services-grid">
            ${d.list.map(s => `
              <div class="service-card">
                ${s.badge ? `<div class="service-badge">${s.badge}</div>` : ''}
                <div class="service-icon">${s.icon}</div>
                <h3>${s.title}</h3>
                <p>${s.description}</p>
                <ul class="service-details">
                  ${s.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container" style="text-align:center">
          <h2 style="font-family:var(--font-display);font-size:2rem;color:var(--navy);margin-bottom:12px">
            Un besoin spécifique ?
          </h2>
          <p style="color:var(--grey);margin-bottom:32px;max-width:520px;margin-left:auto;margin-right:auto">
            Chaque entreprise est unique. Contactez-nous pour une analyse personnalisée de vos besoins.
          </p>
          <a href="#" class="btn btn-navy" onclick="navigate('contact')">Nous contacter →</a>
        </div>
      </section>
    `;
  } catch(err) { showError("Impossible de charger les services."); console.error(err); }
}

// ─── PAGE OFFRES D'EMPLOI ────────────────────────────────────
async function loadJobs() {
  showLoader();
  try {
    const d = await fetchData('/pages/jobs');
    app.innerHTML = `
      <section class="jobs-hero">
        <div class="container">
          <h1>${d.title}</h1>
          <p>${d.subtitle}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="jobs-list">
            ${d.list.map(job => `
              <div class="job-card">
                <div class="job-main">
                  <div class="job-title">${job.title}</div>
                  <div class="job-company">${job.company}</div>
                  <div class="job-tags">
                    <span class="tag tag-location">📍 ${job.location}</span>
                    <span class="tag tag-type">${job.type}</span>
                    <span class="tag tag-sector">${job.sector}</span>
                  </div>
                </div>
                <div class="job-meta">
                  <div class="job-salary">${job.salary}</div>
                  <div class="job-date">Publié le ${formatDate(job.date)}</div>
                  <a href="#" class="btn btn-primary" style="margin-top:12px;font-size:0.85rem;padding:8px 18px" onclick="navigate('contact')">
                    Postuler →
                  </a>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container" style="text-align:center">
          <h2 style="font-family:var(--font-display);font-size:2rem;color:var(--navy);margin-bottom:12px">
            Votre profil n'est pas listé ?
          </h2>
          <p style="color:var(--grey);margin-bottom:32px">
            Envoyez-nous une candidature spontanée. Nous vous contacterons dès qu'une opportunité correspondra à votre profil.
          </p>
          <a href="#" class="btn btn-navy" onclick="navigate('contact')">Candidature spontanée →</a>
        </div>
      </section>
    `;
  } catch(err) { showError("Impossible de charger les offres."); console.error(err); }
}

// ─── PAGE CONTACT ────────────────────────────────────────────
async function loadContact() {
  showLoader();
  try {
    const [cd, co] = await Promise.all([
      fetchData('/pages/contact'),
      fetchData('/pages/company')
    ]);
    app.innerHTML = `
      <section class="contact-hero">
        <div class="container">
          <h1>${cd.title}</h1>
          <p>${cd.subtitle}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="contact-layout">
            <div class="contact-info">
              <h3>Nos coordonnées</h3>
              <div class="contact-info-item">
                <div class="contact-info-icon">📍</div>
                <div class="contact-info-text">
                  <h4>Adresse</h4>
                  <p>${co.address}</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">📧</div>
                <div class="contact-info-text">
                  <h4>Email</h4>
                  <p>${co.email}</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">📞</div>
                <div class="contact-info-text">
                  <h4>Téléphone</h4>
                  <p>${co.phone1}</p>
                  <p>${co.phone2}</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">🕐</div>
                <div class="contact-info-text">
                  <h4>Horaires</h4>
                  <p>Lundi – Vendredi : 8h00 – 18h00</p>
                </div>
              </div>
            </div>

            <div class="contact-form-wrapper">
              <div id="form-message" class="form-message"></div>
              <div class="form-row">
                <div class="form-group">
                  <label>Nom complet <span class="req">*</span></label>
                  <input type="text" id="f-name" class="form-control" placeholder="Jean Dupont" />
                </div>
                <div class="form-group">
                  <label>Email <span class="req">*</span></label>
                  <input type="email" id="f-email" class="form-control" placeholder="jean@exemple.com" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Téléphone</label>
                  <input type="tel" id="f-phone" class="form-control" placeholder="+237 6XX XXX XXX" />
                </div>
                <div class="form-group">
                  <label>Sujet <span class="req">*</span></label>
                  <select id="f-subject" class="form-control">
                    <option value="">— Choisissez un sujet —</option>
                    ${cd.form.subjects.map(s => `<option value="${s}">${s}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Message <span class="req">*</span></label>
                <textarea id="f-message" class="form-control" placeholder="Décrivez votre besoin en quelques lignes..."></textarea>
              </div>
              <button class="btn btn-primary" id="submit-btn" onclick="submitContact()" style="width:100%;justify-content:center">
                Envoyer le message →
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  } catch(err) { showError("Impossible de charger la page Contact."); console.error(err); }
}

async function submitContact() {
  const btn = document.getElementById('submit-btn');
  const msgBox = document.getElementById('form-message');
  const payload = {
    name:    document.getElementById('f-name').value.trim(),
    email:   document.getElementById('f-email').value.trim(),
    phone:   document.getElementById('f-phone').value.trim(),
    subject: document.getElementById('f-subject').value,
    message: document.getElementById('f-message').value.trim()
  };
  msgBox.className = 'form-message';
  msgBox.textContent = '';
  btn.disabled = true;
  btn.textContent = 'Envoi en cours...';
  try {
    const res = await fetch(`${API}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success) {
      msgBox.className = 'form-message success';
      msgBox.textContent = result.message;
      ['f-name','f-email','f-phone','f-subject','f-message'].forEach(id => {
        document.getElementById(id).value = '';
      });
    } else {
      msgBox.className = 'form-message error';
      msgBox.textContent = result.message;
    }
  } catch(err) {
    msgBox.className = 'form-message error';
    msgBox.textContent = 'Une erreur est survenue. Veuillez réessayer.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Envoyer le message →';
  }
}

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  loadFooter();
  navigate('home');
});
