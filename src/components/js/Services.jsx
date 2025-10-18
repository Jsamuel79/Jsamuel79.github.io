import '../css/Services.css'

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services__container">
        <h2 className="services__title">Services</h2>
        <p className="services__subtitle">
          Sites vitrine • Web apps • Maintenance & optimisation
        </p>

        <ul className="services__grid">
          {/* ——— Site vitrine ——— */}
          <li className="service-card">
            <div className="service-card__icon" aria-hidden>🌐</div>
            <div className="service-card__body">
              <h3 className="service-card__title">Site vitrine</h3>
              <p className="service-card__text">
                Présente ton activité avec un site rapide, clair et responsive.
                Design soigné, pages essentielles (Accueil, Services, Contact).
              </p>
              <ul className="service-card__list">
                <li>Design sur-mesure</li>
                <li>Responsive mobile/desktop</li>
                <li>Formulaire de contact</li>
              </ul>
              <a href="#contact" className="service-card__cta">Demander un devis</a>
            </div>
          </li>

          {/* ——— Web app ——— */}
          <li className="service-card">
            <div className="service-card__icon" aria-hidden>⚙️</div>
            <div className="service-card__body">
              <h3 className="service-card__title">Web app</h3>
              <p className="service-card__text">
                Application web moderne (React/Laravel) : interfaces dynamiques,
                formulaires avancés, tableaux, authentification, API.
              </p>
              <ul className="service-card__list">
                <li>Architecture scalable</li>
                <li>API & base de données</li>
                <li>Performance & sécurité</li>
              </ul>
              <a href="#contact" className="service-card__cta">Parler du projet</a>
            </div>
          </li>

          {/* ——— Maintenance & optimisation ——— */}
          <li className="service-card">
            <div className="service-card__icon" aria-hidden>🚀</div>
            <div className="service-card__body">
              <h3 className="service-card__title">Maintenance & optimisation</h3>
              <p className="service-card__text">
                Suivi technique, corrections, améliorations UI/UX, optimisation de vitesse.
              </p>
              <ul className="service-card__list">
                <li>Mises à jour & sauvegardes</li>
                <li>Optimisation des performances</li>
                <li>Corrections de bugs</li> {/* remplace l'ancien "SEO technique" */}
              </ul>
              <a href="#contact" className="service-card__cta">Obtenir une estimation</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services