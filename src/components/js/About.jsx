import '../css/About.css'

function About() {
  return (
    <section id="apropos" className="about-section">
      <div className="about-container">
        <h2>À propos de moi</h2>
        <p className="about-text">
          Passionné par le développement web et les nouvelles technologies, 
          j’ai débuté mon parcours à <strong>Epitech</strong> où j’ai acquis de solides bases en algorithmie et en C. 
          Aujourd’hui, je me spécialise dans le <strong>développement full-stack</strong> avec React et Laravel, 
          en mettant un point d’honneur à créer des sites performants, élégants et sécurisés.
        </p>
        <p className="about-text">
          Actuellement en stage à l’aéroport de La Réunion, je participe à la création d’un logiciel interne 
          sous <strong>Laravel</strong>, conçu pour améliorer la gestion opérationnelle. 
          Ce projet m’a permis d’allier rigueur, sécurité et efficacité dans un environnement professionnel exigeant.
        </p>
      </div>
    </section>
  )
}

export default About

