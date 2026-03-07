'use client'

import { useEffect, useState } from 'react'

// --- CONFIGURATION (MACROS) ---
const TOTAL_STARS = 340;           // Nombre total d'étoiles au lancement
const CIRCLE_STARS_COUNT = 8;      // Nombre d'étoiles qui rejoignent le clic
const CLICK_RADIUS = 70;           // Rayon du cercle autour du clic (en px)
const STAR_MIN_SIZE = 1;           // Taille minimum (px) 1
const STAR_MAX_SIZE = 3;           // Taille maximum (px) 3
const ANIMATION_SPEED = "1000ms";  // Vitesse de déplacement (CSS duration)

export default function StarField({ cameraX }) { // On recupere la cam
  const [stars, setStars] = useState([])

  // 1. INITIALISATION
  useEffect(() => {
    const generatedStars = []
    for (let i = 0; i < TOTAL_STARS; i++) {
      generatedStars.push({
        id: i,
        top: Math.random() * 100 + '%',
        left: Math.random() * 200 + '%',
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
    const randomIndices = Array.from({ length: CIRCLE_STARS_COUNT }, () => Math.floor(Math.random() * stars.length))
    const newStars = [...stars]

    randomIndices.forEach((starIndex, i) => {
      const angle = (i * (360 / CIRCLE_STARS_COUNT) * Math.PI) / 180

      // CALCUL:
      // e.clientX position souris sur ecran
      // + CameraX % la largeur de l'ecran
      const offset = (window.innerWidth * cameraX) / 100;
      const newLeft = e.pageX + offset + (CLICK_RADIUS * Math.cos(angle))
      const newTop = e.pageY + (CLICK_RADIUS * Math.sin(angle))

      if (newStars[starIndex]) {
        newStars[starIndex] = {
          ...newStars[starIndex],
          left: `${newLeft}px`,
          top: `${newTop}px`,
          opacity: 1
        }
      }
    })
    setStars(newStars)
  }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick) // Nettoyage
  }, [stars, cameraX])

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