'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SKILLS = [
  { id: 1, name: 'Rust', x: 20, y: 30, color: '#3b82f6' },
  { id: 2, name: 'C++', x: 35, y: 20, color: '#3b82f6' },
  { id: 3, name: 'C', x: 50, y: 25, color: '#3b82f6' },
  { id: 4, name: 'Next.js', x: 70, y: 50, color: '#60a5fa' },
  { id: 5, name: 'Laravel', x: 85, y: 45, color: '#60a5fa' },
  { id: 6, name: 'Docker', x: 40, y: 70, color: '#93c5fd' },
  { id: 7, name: 'Linux', x: 25, y: 80, color: '#93c5fd' },
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

    // On attend que l'étoile ait fini de recouvrir l'écran (1s)
    setTimeout(() => {
      router.push(`/skills/${skill.name.toLowerCase().replace('.', '')}`)
    }, 800)
  }

  return (
    <div className="relative w-full h-[60vh] max-w-5xl mx-auto">
      {/* SVG : On le cache si une étoile est sélectionnée */}
      <svg className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${selectedId ? 'opacity-0' : 'opacity-100'}`}>
        {CONNECTIONS.map(([startId, endId], index) => {
          const start = SKILLS.find(s => s.id === startId);
          const end = SKILLS.find(s => s.id === endId);
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
             {/* Le point (étoile) */}
<div 
  className={`
    bg-white rounded-full transition-all
    ${isTarget
      ? 'fixed top-1/2 left-1/2 w-[500vmax] h-[500vmax] -translate-x-1/2 -translate-y-1/2 z-100 duration-1500 ease-in' 
      : 'w-3 h-3 shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-150 duration-2000 ease-out'}
  `}
  style={{
    transform: isTarget ? 'translate(-50%, -50%)' : '',
    // Cette ligne est le secret pour bloquer l'animation à la fin
    transitionFillMode: 'forwards' 
  }}
/>
            {/* Le texte du skill */}
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