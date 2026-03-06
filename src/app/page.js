'use client'
import { useState } from 'react'
import Hero from '../components/js/Hero'
import StarField from '../components/js/StarField'
import Constellation from '../components/js/Constellation' // On l'importe ici !

export default function Home() {
  const [cameraX, setCameraX] = useState(0); // 0 = Accueil, 100 = Skills

  const goToSkills = () => setCameraX(100);
  const goToHome = () => setCameraX(0);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden text-white">
      
      {/* 1. NAVBAR FIXE (Ne bouge pas avec la translation) */}
      <nav className="fixed top-8 right-12 z-50 flex gap-8">
        <button 
          onClick={goToHome}
          className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${cameraX === 0 ? 'text-blue-500' : 'text-white/40 hover:text-white'}`}
        >
          Accueil
        </button>
        <button 
          onClick={goToSkills}
          className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${cameraX === 100 ? 'text-blue-500' : 'text-white/40 hover:text-white'}`}
        >
          Compétences
        </button>
      </nav>

      {/* 2. FOND ÉTOILÉ GÉANT (Parallaxe léger) */}
      <div 
        className="absolute inset-0 w-[400vw] transition-transform duration-1000 ease-in-out pointer-events-none"
        style={{ transform: `translateX(-${cameraX * 0.2}vw)` }} // 0.2 pour un effet de profondeur encore plus grand
      >
        <StarField cameraX={cameraX} />
      </div>

      {/* 3. LE CONTENU (Translation complète) */}
      <div 
        className="relative z-10 flex w-[400vw] h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${cameraX}vw)` }}
      >
        {/* ÉCRAN 1 : ACCUEIL */}
        <div className="w-screen h-full flex items-center justify-center">
          {/* On passe la fonction de navigation au Hero pour le bouton central */}
          <Hero onNavigate={goToSkills} />
        </div>

        {/* ÉCRAN 2 : SKILLS (Ta Constellation) */}
        <div className="w-screen h-full flex flex-col items-center justify-center p-10">
           <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter uppercase text-center">
             Systèmes <span className="text-blue-500">&</span> Constellations
           </h2>
           <p className="mb-12 text-gray-500 text-[10px] tracking-[0.4em] uppercase">
             Cliquez sur une étoile pour explorer une technologie
           </p>

           {/* --- ICI ON INCLUDE TA CONSTELLATION --- */}
           <div className="w-full max-w-6xl h-[60vh]">
              <Constellation />
           </div>

           <button
              onClick={goToHome}
              className="mt-8 opacity-30 hover:opacity-100 transition-opacity uppercase text-[9px] tracking-[0.5em]"
            >
              ← Retour à la station
           </button>
        </div>
      </div>
    </main>
  )
}