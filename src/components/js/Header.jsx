import '../css/Header.css'

function Header() {
 return (
    <header id="acceuil">
      <nav className="navbar">
        <h1 className="logo">Samuel JD</h1>
        <ul className="nav-links">
          <li><a href="#acceuil">Acceuil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-content">
        <h2>Samuel - JAGLALE DALLEAU</h2>
        <p>Développeur web full-stack & créateur d’expériences digitales</p>
      </div>
    </header>
  )
}

export default Header
