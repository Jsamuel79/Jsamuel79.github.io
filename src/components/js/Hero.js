'use client'

import StarField from './StarField'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      
      <StarField />

      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* CONTENEUR LOGO */}
        {/* mb-2 au lieu de mb-8 pour rapprocher le texte */}
        <div className="relative mb-2 group">
          
          {/* LA LUEUR (Halo bleu) */}
          {/* On la met en absolute pour qu'elle soit DERRIÈRE l'image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          {/* L'IMAGE */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/dragon-logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
          </div>
        </div>

        {/* TITRE - On réduit l'espace ici aussi */}
        <h1 className="mt-0 text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
          Samuel <span className="text-blue-500">Dev</span>
        </h1>

        {/* SOUS-TITRE - mt-2 au lieu de mt-6 */}
        <p className="mt-2 text-gray-400 text-xs md:text-sm font-medium tracking-[0.3em] uppercase opacity-80">
          Fullstack Developer • Creative Coding • Next.js
        </p>

        <button className="mt-10 px-8 py-3 bg-transparent border border-white/20 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 text-xs tracking-widest uppercase">
          Découvrir mes projets
        </button>

      </div>
    </section>
  )
}