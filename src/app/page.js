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
      
      <Navbar cameraX={cameraX} setCameraX={setCameraX} />

      {/* LE GRAND CONTENEUR (Le monde entier) */}
      <div 
        className="relative flex h-full w-[200vw] transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${cameraX}vw)` }}
      >
        {/* LE STARFIELD : 
           Il fait 200vw de large (la taille totale du monde).
           On ne lui passe plus de cameraX car il bouge AVEC le parent.
        */}
        <div className="absolute inset-0 w-[200vw] z-0 pointer-events-none">
           <StarField cameraX={cameraX} />
        </div>

        {/* SECTION 1 : ACCUEIL */}
        <div className="relative z-10 w-screen h-full flex items-center justify-center">
          <Hero onNavigate={() => setCameraX(100)} />
        </div>

        {/* SECTION 2 : SKILLS */}
        <div className="relative z-10 w-screen h-full flex flex-col items-center justify-center p-10">
           <h2 className="text-6xl font-bold mb-12 tracking-tighter uppercase">Compétences</h2>
           <div className="w-full max-w-6xl h-[60vh]">
              <Constellation />
           </div>
        </div>
      </div>
    </main>
  )
}