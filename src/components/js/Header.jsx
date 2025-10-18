import { useEffect, useState } from 'react'                 /* CHANGEMENT */
import '../css/Header.css'
import logo from '../../assets/OeilV3.png'

function Header() {
  const [open, setOpen] = useState(false)                   /* CHANGEMENT */

  // Empêche le scroll quand le drawer est ouvert
  useEffect(() => {                                         /* CHANGEMENT */
    document.documentElement.classList.toggle('no-scroll', open)
    return () => document.documentElement.classList.remove('no-scroll')
  }, [open])

  // Fermeture via ESC
  useEffect(() => {                                         /* CHANGEMENT */
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header id="accueil">
      <nav className="navbar">
        <div className="nav-inner">
          <a href="/" className="logo" aria-label="TheSleeperWalkerCode — Accueil">
            <img src={logo} alt="Logo TheSleeperWalkerCode" />
          </a>

          {/* Bouton hamburger (mobile) */}
          <button
            className="mobile-toggle"                        /* CHANGEMENT */
            aria-label="Ouvrir le menu"
            aria-controls="mobile-drawer"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          {/* Liens desktop */}
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Overlay + Drawer mobile */}
      <div
        className={`backdrop ${open ? 'show' : ''}`}        /* CHANGEMENT */
        onClick={() => setOpen(false)}
      />
      <aside
        id="mobile-drawer"
        className={`drawer ${open ? 'open' : ''}`}          /* CHANGEMENT */
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer-header">
          <img src={logo} alt="" className="drawer-logo" />
          <button className="drawer-close" aria-label="Fermer le menu" onClick={() => setOpen(false)}>×</button>
        </div>
        <ul className="drawer-links" onClick={() => setOpen(false)}>
          <li><a href="#acceuil">Acceuil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </aside>

      <div className="header-content">
        <h2>Samuel - JAGLALE DALLEAU</h2>
        <p>Développeur web full-stack & créateur d’expériences digitales</p>
      </div>
    </header>
  )
}

export default Header

