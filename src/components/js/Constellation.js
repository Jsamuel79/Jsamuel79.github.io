'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SKILLS = [
  { id: 1, name: 'Rust', x: 20, y: 30, portalColor: '#ff4d00' },
  { id: 2, name: 'C++', x: 35, y: 20, portalColor: '#00599C' },
  { id: 3, name: 'C', x: 50, y: 25, portalColor: '#FFFFFF' },
  { id: 4, name: 'Next.js', x: 70, y: 50, portalColor: '#000000' },
  { id: 5, name: 'Laravel', x: 85, y: 45, portalColor: '#F05340' },
  { id: 6, name: 'Docker', x: 40, y: 70, portalColor: '#2496ED' },
  { id: 7, name: 'Linux', x: 25, y: 80, portalColor: '#FCC624' }, // Jaune Linux (Tux)
];

const CONNECTIONS = [
  [1, 2], [2, 3], [1, 3],
  [4, 5],
  [6, 7],
  [3, 4],
];

export default function Constellation() {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState(null)

  const handleLaunch = (skill) => {
    setSelectedId(skill.id)
    setTimeout(() => {
      router.push(`/skills/${skill.name.toLowerCase().replace('.', '')}`)
    }, 900) // On passe à la page juste avant la fin de l'anim (1500ms)
  }

  return (
    <div className="relative w-full h-[60vh] max-w-5xl mx-auto">
      {/* SVG avec SÉCURITÉ ANTI-CRASH */}
      <svg className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${selectedId ? 'opacity-0' : 'opacity-100'}`}>
        {CONNECTIONS.map(([startId, endId], index) => {
          const start = SKILLS.find(s => s.id === startId);
          const end = SKILLS.find(s => s.id === endId);
          
          // Si l'ID n'est pas trouvé dans SKILLS, on n'affiche pas la ligne
          if (!start || !end) return null;

          return (
            <line
              key={index}
              x1={`${start.x}%`} y1={`${start.y}%`}
              x2={`${end.x}%`} y2={`${end.y}%`}
              stroke="white"
              strokeWidth="1"
              className="opacity-20 animate-pulse"
            />
          );
        })}
      </svg>

      {SKILLS.map((skill) => {
        const isTarget = selectedId === skill.id;
        const isOther = selectedId !== null && !isTarget;

        return (
          <div
            key={skill.id}
            onClick={() => !selectedId && handleLaunch(skill)}
            className={`absolute group cursor-pointer transition-all duration-700
              ${isOther ? 'opacity-0 scale-0' : 'opacity-100'}`}
            style={{
              top: `${skill.y}%`,
              left: `${skill.x}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isTarget ? 100 : 10
            }}
          >
            {/* L'étoile qui explose avec sa couleur propre */}
            <div 
              className={`
                rounded-full transition-all
                ${isTarget
                  ? 'fixed top-1/2 left-1/2 w-[500vmax] h-[500vmax] -translate-x-1/2 -translate-y-1/2 z-[100] duration-[1500ms] ease-in' 
                  : 'w-3 h-3 shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-150 duration-2000 ease-out'}
              `}
              style={{
                backgroundColor: isTarget ? skill.portalColor : 'white',
                // Petite lueur de la couleur du skill pour l'ambiance
                boxShadow: !isTarget ? `0 0 15px ${skill.portalColor}88` : 'none',
                transform: isTarget ? 'translate(-50%, -50%)' : '',
                transitionFillMode: 'forwards' 
              }}
            />

            {/* Texte */}
            <div className={`
              absolute top-6 left-1/2 -translate-x-1/2 transition-opacity duration-300
              ${selectedId ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}
            `}>
              <span className="text-[10px] tracking-[0.3em] uppercase whitespace-nowrap text-white">
                {skill.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  )
}