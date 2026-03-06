'use client'

const SKILLS = [
  { id: 1, name: 'Rust', x: 20, y: 30, color: '#3b82f6' },
  { id: 2, name: 'C++', x: 35, y: 20, color: '#3b82f6' },
  { id: 3, name: 'C', x: 50, y: 25, color: '#3b82f6' },
  { id: 4, name: 'Next.js', x: 70, y: 50, color: '#60a5fa' },
  { id: 5, name: 'Laravel', x: 85, y: 45, color: '#60a5fa' },
  { id: 6, name: 'Docker', x: 40, y: 70, color: '#93c5fd' },
  { id: 7, name: 'Linux', x: 25, y: 80, color: '#93c5fd' },
];

// Définit quelles compétences sont reliées entre elles (par ID)
const CONNECTIONS = [
  [1, 2], [2, 3], [1, 3], // Triangle système
  [4, 5], // Duo Web
  [6, 7], // Duo Ops
  [3, 4], // Pont Système -> Web
];

export default function Constellation() {
  return (
    <div className="relative w-full h-[60vh] max-w-5xl mx-auto">
      {/* SVG pour les lignes de connexion */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
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

      {/* Les points (Skills) */}
      {SKILLS.map((skill) => (
        <div
          key={skill.id}
          className="absolute group cursor-pointer"
          style={{ top: `${skill.y}%`, left: `${skill.x}%`, transform: 'translate(-50%, -50%)' }}
        >
          {/* Point brillant */}
          <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-150 transition-transform duration-300"></div>

          {/* Nom du skill */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] tracking-[0.3em] uppercase whitespace-nowrap text-white">
              {skill.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}