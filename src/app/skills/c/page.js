'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CExperience() {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    // Petit délai pour s'assurer que l'écran blanc de la page précédente 
    // est bien là avant de faire apparaître le texte
    const timer = setTimeout(() => setIsRevealed(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black p-10 md:p-24 overflow-x-hidden">
      
      {/* LE CONTENU : Apparition fluide (Smooth Reveal) */}
      <div 
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out 
          ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <nav className="mb-20">
          <Link href="/" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 transition-colors">
            ← Retour au vaisseau
          </Link>
        </nav>

        <header className="max-w-4xl">
          <h1 className="text-[12vw] font-black leading-[0.8] uppercase mb-10 tracking-tighter">
            Langage C
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed italic border-l-4 border-black pl-6">
            "La puissance brute, proche du métal. Là où chaque octet compte."
          </p>
        </header>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-bold text-2xl mb-8 uppercase tracking-tight underline underline-offset-8">
              Projets Majeurs
            </h3>
            <ul className="space-y-10">
              <li className="group">
                <h4 className="font-bold text-xl group-hover:pl-2 transition-all duration-300">
                  Développement d'un Kernel custom
                </h4>
                <p className="text-sm opacity-60 mt-2 leading-relaxed">
                  Gestion de la mémoire, ordonnanceur et drivers basiques.
                </p>
              </li>
              <li className="group">
                <h4 className="font-bold text-xl group-hover:pl-2 transition-all duration-300">
                  Optimisation d'algorithmes de tri
                </h4>
                <p className="text-sm opacity-60 mt-2 leading-relaxed">
                  Réduction de la complexité spatiale sur systèmes embarqués.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-10 border border-gray-100 rounded-sm">
            <h3 className="font-bold mb-6 uppercase text-sm tracking-widest">Stack Technique</h3>
            <div className="flex flex-wrap gap-3">
              {['GCC', 'Valgrind', 'Make', 'GDB'].map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 border border-black text-xs font-bold hover:bg-black hover:text-white transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}