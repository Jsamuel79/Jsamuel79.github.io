// src/components/js/Navbar.js
'use client'

export default function Navbar({ cameraX, setCameraX }) {
  const links = [
    { name: 'Accueil', target: 0 },
    { name: 'Compétences', target: 100 }
  ];

  return (
    <nav className="fixed top-8 right-12 z-50 flex gap-8">
      {links.map((link) => (
        <button
          key={link.target}
          onClick={() => setCameraX(link.target)}
          className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
            cameraX === link.target ? 'text-blue-500' : 'text-white/40 hover:text-white'
          }`}
        >
          {link.name}
        </button>
      ))}
    </nav>
  )
}