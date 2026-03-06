'use client'

import { useEffect, useState } from 'react'

// --- CONFIGURATION (MACROS) ---
const TOTAL_STARS = 150;           // Nombre total d'étoiles au lancement
const CIRCLE_STARS_COUNT = 8;      // Nombre d'étoiles qui rejoignent le clic
const CLICK_RADIUS = 70;           // Rayon du cercle autour du clic (en px)
const STAR_MIN_SIZE = 1;           // Taille minimum (px)
const STAR_MAX_SIZE = 4;           // Taille maximum (px)
const ANIMATION_SPEED = "1000ms";  // Vitesse de déplacement (CSS duration)

export default function StarField() {
  const [stars, setStars] = useState([])

  // 1. INITIALISATION
  useEffect(() => {
    const generatedStars = []
    for (let i = 0; i < TOTAL_STARS; i++) {
      generatedStars.push({
        id: i,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        size: Math.random() * (STAR_MAX_SIZE - STAR_MIN_SIZE) + STAR_MIN_SIZE + 'px',
        opacity: Math.random() * 0.6 + 0.3,
        duration: Math.random() * 3 + 2 + 's'
      })
    }
    setStars(generatedStars)
  }, []) // S'exécute une seule fois au montage

  // 2. LOGIQUE DU CLIC
  useEffect(() => {
    const handleClick = (e) => {
      // On pioche X index au hasard
      const randomIndices = Array.from(
        { length: CIRCLE_STARS_COUNT }, 
        () => Math.floor(Math.random() * stars.length)
      )

      const newStars = [...stars] // Copie immuable pour React

      randomIndices.forEach((starIndex, i) => {
        // Angle : 360 degrés divisés par le nombre d'étoiles du cercle
        const angle = (i * (360 / CIRCLE_STARS_COUNT) * Math.PI) / 180

        const newLeft = e.clientX + CLICK_RADIUS * Math.cos(angle)
        const newTop = e.clientY + CLICK_RADIUS * Math.sin(angle)

        if (newStars[starIndex]) {
          newStars[starIndex] = {
            ...newStars[starIndex],
            left: `${newLeft}px`,
            top: `${newTop}px`,
            opacity: 1 // Elles brillent plus fort quand elles se rassemblent
          }
        }
      })

      setStars(newStars) // Déclenche le re-render
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick) // Nettoyage
  }, [stars])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute bg-white animate-pulse transition-all ease-out"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.duration,
            transitionDuration: ANIMATION_SPEED, // On utilise notre macro ici
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}
    </div>
  )
}