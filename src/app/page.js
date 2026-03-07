'use client'
import { useState } from 'react'
import Hero from '../components/js/Hero'
import StarField from '../components/js/StarField'
import Constellation from '../components/js/Constellation'
import Navbar from '../components/js/Navbar' // On importe notre composant propre

export default function Home() {
  const [cameraX, setCameraX] = useState(0);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden text-white">
      
      {/* 1. UTILISATION DU COMPOSANT NAVBAR */}
      <Navbar cameraX={cameraX} setCameraX={setCameraX} />

      {/* 2. FOND ÉTOILÉ GÉANT */}
      <div 
        className="absolute inset-0 w-[400vw] transition-transform duration-1000 ease-in-out pointer-events-none"
        style={{ transform: `translateX(-${cameraX * 0.2}vw)` }}
      >
        <StarField cameraX={cameraX} />
      </div>

      {/* 3. LE CONTENU */}
      <div 
        className="relative z-10 flex w-[400vw] h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${cameraX}vw)` }}
      >
        <div className="w-screen h-full flex items-center justify-center">
          {/* On peut utiliser setCameraX(100) directement ici aussi */}
          <Hero onNavigate={() => setCameraX(100)} />
        </div>

        <div className="w-screen h-full flex flex-col items-center justify-center p-10">
           <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter uppercase text-center">
             Systèmes <span className="text-blue-500">&</span> Constellations
           </h2>
           
           <div className="w-full max-w-6xl h-[60vh]">
              <Constellation />
           </div>

           <button
              onClick={() => setCameraX(0)}
              className="mt-8 opacity-30 hover:opacity-100 transition-opacity uppercase text-[9px] tracking-[0.5em]"
            >
              ← Retour à la station
           </button>
        </div>
      </div>
    </main>
  )
}