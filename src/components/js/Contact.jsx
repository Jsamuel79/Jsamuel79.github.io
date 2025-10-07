import '../css/Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contactez-moi</h2>
      <p>Intéressé(e) par une collaboration ou un projet web ?</p>
      <div className="contact-links">
        <a href="mailto:samuel.jaglale-dalleau@epitech.eu" className="contact-link">Email</a>
        <a href="https://github.com/jsamuel79" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://www.instagram.com/toninsta" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
      </div>
    </section>
  );
}

export default Contact
