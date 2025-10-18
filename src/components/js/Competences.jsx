import '../css/Competence.css'

function Competences() {
  return (
    <section id="competences" className="competences">
    <div className="competences__container">
      <h2 className="competences__title">Compétences</h2>

      <ul className="competences__grid">
        {/* Laravel */}
        <li className="skill-card">
          <div className="skill-card__icon" aria-hidden="true">🟪</div>
          <div className="skill-card__body">
            <h3 className="skill-card__title">Laravel</h3>
            <p className="skill-card__text">
              Dév. back-end MVC, routes, contrôleurs, Eloquent, Blade, API REST.
            </p>
          </div>
        </li>

        {/* C */}
        <li className="skill-card">
          <div className="skill-card__icon" aria-hidden="true">🧩</div>
          <div className="skill-card__body">
            <h3 className="skill-card__title">C</h3>
            <p className="skill-card__text">
              Bases solides : pointeurs, structures, gestion mémoire, algo.
            </p>
          </div>
        </li>

        {/* React */}
        <li className="skill-card">
          <div className="skill-card__icon" aria-hidden="true">⚛️</div>
          <div className="skill-card__body">
            <h3 className="skill-card__title">React</h3>
            <p className="skill-card__text">
              Composants, hooks, props/state, routing, intégration API.
            </p>
          </div>
        </li>

        {/* Docker */}
        <li className="skill-card">
          <div className="skill-card__icon" aria-hidden="true">🐳</div>
          <div className="skill-card__body">
            <h3 className="skill-card__title">Docker</h3>
            <p className="skill-card__text">
              Images, containers, Dockerfile, docker-compose pour dev local.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
}

export default Competences
