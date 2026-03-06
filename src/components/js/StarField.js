'use client'

import { useEffect, useState } from 'react'

export default function StarField() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = []
    
    // On peut en mettre un peu plus (80-100) car elles seront plus petites
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        id: i,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        // TAILLE RÉDUITE : entre 1px et 3px seulement
        size: Math.random() * 3 + 2 + 'px',
        // OPACITÉ TRÈS FAIBLE : entre 0.1 et 0.5 pour l'aspect fond
        opacity: Math.random() * 0.6 + 0.3,
        // Durée de clignotement aléatoire pour ne pas avoir un effet robotique
        duration: Math.random() * 3 + 2 + 's'
      })
    }
    
    setStars(generatedStars)
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute bg-white animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.duration,
            // On garde la forme d'étoile mais elle sera très fine à cette taille
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}
    </div>
  )
}