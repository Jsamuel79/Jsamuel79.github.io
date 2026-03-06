'use client'

export default function Navbar({ activeSection, setActiveSection }) {
  const links = [
    { name: 'Accueil', id: 'hero' },
    { name: 'Compétences', id: 'skills' }
  ];

  return (
    <nav className="fixed top-8 right-12 z-50 flex gap-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => setActiveSection(link.id)}
          className={`text-xs tracking-[0.3em] uppercase transition-all duration-500 ${
            activeSection === link.id ? 'text-blue-500' : 'text-white/50 hover:text-white'
          }`}
        >
          {link.name}
        </button>
      ))}
    </nav>
  )
}