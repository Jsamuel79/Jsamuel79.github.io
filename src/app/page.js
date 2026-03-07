'use client'
import { useState } from 'react'
import Hero from '../components/js/Hero'
import StarField from '../components/js/StarField'
import Constellation from '../components/js/Constellation'
import Navbar from '../components/js/Navbar'

export default function Home() {
  const [cameraX, setCameraX] = useState(0);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden text-white">

      {/* La Navbar apparaît en fondu très lent */}
      <div className="animate-in fade-in duration-[2000ms] delay-700 fill-mode-both">
        <Navbar cameraX={cameraX} setCameraX={setCameraX} />
      </div>

      <div 
        className="relative flex h-full w-[200vw] transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${cameraX}vw)` }}
      >
        {/* Les étoiles apparaissent en fondu (fade-in) et non en zoom brusque */}
        <div className="absolute inset-0 w-[200vw] z-0 pointer-events-none animate-in fade-in duration-[2500ms] ease-out">
           <StarField cameraX={cameraX} />
        </div>

        <div className="relative z-10 w-screen h-full flex items-center justify-center">
          <Hero /> {/* Hero gère maintenant ses propres délais d'apparition */}
        </div>

        <div className="relative z-10 w-screen h-full flex flex-col items-center justify-center p-10">
           {/* On anime aussi le titre des compétences quand on arrive dessus */}
           <h2 className="text-6xl font-bold mb-12 tracking-tighter uppercase">Compétences</h2>
           <div className="w-full max-w-6xl h-[60vh]">
              <Constellation />
           </div>
        </div>
      </div>
    </main>
  )
}