'use client'

import { use, useEffect, useState } from 'react'

export default function StarField() {
  const [stars, setStars] = useState([]) // return une method setters et la variable utiliser le setters permet a react de connaitre les changement pour reagir sur le site

  useEffect(() => {
    const generatedStars = []
    // On vas générer notre tableau d'etoile
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
    // on appel le setters de stars pour lui mettre la valeur de notre tableau d'etoile
    setStars(generatedStars)
  }, []) // le [] c'est pour il s'execute une fois si je met une variable sa vas changer a chaque fois la var change si je met rien sa vas se relancer a qhaque fois on rerentre dans la fonction genre si on change stars par exemple

  // 2. NOUVEAU useEffect pour le clic
  useEffect(() => {
    const handleClick = (e) => {
      // On récupère 6 index au hasard dans le tableau actuel
      const randomIndices = Array.from({ length: 6 }, () => Math.floor(Math.random() * stars.length))

      const rayon = 50 // 50px

      // On crée une copie du tableau pour ne pas modifier l'original directement
      const newStars = [...stars]

      randomIndices.forEach((starIndex, i) => {
        // Calcul de l'angle pour chaque étoile (en radians)
        const angle = (i * 60 * Math.PI) / 180

        // Calcul des nouvelles positions par rapport au clic (e.clientX / e.clientY)
        const newLeft = e.clientX + rayon * Math.cos(angle)
        const newTop = e.clientY + rayon * Math.sin(angle)

        // On met à jour l'étoile dans notre copie
        if (newStars[starIndex]) {
          newStars[starIndex] = {
            ...newStars[starIndex],
            left: `${newLeft}px`,
            top: `${newTop}px`,
            // On booste un peu l'opacité pour qu'on les voit bouger
            opacity: 1
          }
        }
      })

      setStars(newStars)
    }

    // On écoute le clic sur toute la fenêtre
    window.addEventListener('click', handleClick)

    // Nettoyage : on enlève l'écouteur si on change de page
    return () => window.removeEventListener('click', handleClick)
  }, [stars]) // On met [stars] car la fonction a besoin du tableau à jour pour piocher dedans
  
  return (
    // On s'assure que le conteneur ne bloque rien
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div 
          key={star.id}
          // AJOUT de transition-all et duration pour voir le mouvement
          className="absolute bg-white animate-pulse transition-all duration-1000 ease-out"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.duration,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}
    </div>
  )
}