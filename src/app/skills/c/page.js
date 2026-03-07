'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import TransitionVaisseau from '@/components/js/TransitionVaisseau'

export default function CExperience() {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    // Déclenche l'apparition du texte après un court délai
    const timer = setTimeout(() => setIsRevealed(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">

      <TransitionVaisseau>
        {(handleReturn) => (
          <>
            {/* 1. NAVIGATION FIXE (Flotte en bas de l'écran) */}
            <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[50] flex items-center gap-8 px-8 py-4 bg-black/5 backdrop-blur-xl rounded-full border border-black/10 shadow-2xl">
              <Link 
                href="/skills/docker" 
                className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-all"
              >
                Docker
              </Link>

              <button
                onClick={handleReturn}
                className="bg-black text-white px-6 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                RETOUR AU VAISSEAU
              </button>

              <Link 
                href="/skills/rust" 
                className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-all"
              >
                Rust
              </Link>
            </nav>

            {/* 2. CONTENU DE LA PAGE (S'anime au chargement) */}
            <div 
              className={`max-w-7xl mx-auto p-10 md:p-24 transition-all duration-1000 ease-out 
              ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {/* Entête */}
              <header className="max-w-4xl">
                <h1 className="text-[12vw] font-black leading-[0.8] uppercase mb-10 tracking-tighter">
                  Langage C
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl leading-relaxed italic border-l-4 border-black pl-6">
                  "La puissance brute, proche du métal. Là où chaque octet compte."
                </p>
              </header>

              {/* Grille de contenu */}
              <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                
                {/* Projets */}
                <div>
                  <h3 className="font-bold text-2xl mb-8 uppercase tracking-tight underline underline-offset-8">
                    Projets Majeurs
                  </h3>
                  <ul className="space-y-12">
                    <li className="group">
                      <h4 className="font-bold text-xl group-hover:pl-2 transition-all duration-300">
                        Développement d'un Kernel custom
                      </h4>
                      <p className="text-sm opacity-60 mt-3 leading-relaxed">
                        Conception d'un noyau minimaliste : gestion de la mémoire paginée, ordonnanceur de tâches et drivers VGA basiques.
                      </p>
                    </li>
                    <li className="group">
                      <h4 className="font-bold text-xl group-hover:pl-2 transition-all duration-300">
                        Optimisation d'algorithmes de tri
                      </h4>
                      <p className="text-sm opacity-60 mt-3 leading-relaxed">
                        Réimplémentation de structures de données complexes pour systèmes embarqués à ressources limitées.
                      </p>
                    </li>
                  </ul>
                </div>
                
                {/* Stack Technique */}
                <div className="bg-gray-50 p-10 border border-gray-100 rounded-sm self-start">
                  <h3 className="font-bold mb-8 uppercase text-xs tracking-[0.3em] opacity-50">
                    Outils de prédilection
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {['GCC', 'Valgrind', 'Make', 'GDB', 'Clang', 'Cmake'].map((tool) => (
                      <span 
                        key={tool}
                        className="px-5 py-2.5 border border-black text-[10px] font-black tracking-widest hover:bg-black hover:text-white transition-all cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-10 border-t border-gray-200 text-xs leading-relaxed opacity-60 italic">
                    "Maîtriser le C, c'est comprendre comment la machine respire réellement sous les couches d'abstractions."
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </TransitionVaisseau>
    </main>
  )
}