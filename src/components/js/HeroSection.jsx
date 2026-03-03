import '../css/HeroSection.css'

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Créons ensemble des sites modernes et élégants</h2>
        <p>Développeur full-stack passionné, je conçois des interfaces fluides, performantes
          et adaptées à chaque besoin professionnel.
        </p>
        
        {/* Conteneur pour aligner les boutons proprement */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            <a href="#contact" className="hero-button">Me contacter</a>
            
            {/* Nouveau bouton pointant vers le jeu dans le dossier public */}
            <a 
              href="shadow-chess.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-button"
              style={{ backgroundColor: 'var(--violet)', color: 'var(--white)' }}
            >
              🎮 Jouer à Échecs de l'Ombre
            </a>
        </div>
        
      </div>
      <div className="hero-bg"></div>
    </section>
  )
}

export default HeroSection
