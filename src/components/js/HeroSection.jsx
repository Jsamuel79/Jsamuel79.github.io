import '../css/HeroSection.css'

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Créons ensemble des sites modernes et élégants</h2>
        <p>Développeur full-stack passionné, je conçois des interfaces fluides, performantes
          et adaptées à chaque besoin professionnel.
        </p>
        <a href="#contact" className="hero-button">Me contacter</a>
      </div>
      <div className="hero-bg"></div>
    </section>
  )
}

export default HeroSection
