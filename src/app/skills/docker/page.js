'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TransitionVaisseau from '@/components/js/TransitionVaisseau'

export default function DockerPage() {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    setIsRevealed(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#1D272B] text-white overflow-hidden font-mono">

      {/* 1. On enveloppe tout avec le composant de transition */}
      <TransitionVaisseau>
        {(handleReturn) => (
          <>
            {/* Le Masque de couleur (Bleu Docker) qui s'ouvre à l'arrivée */}
            <div
              className={`fixed inset-0 z-[100] bg-[#2496ED] transition-transform duration-1000 ease-in-out
              ${isRevealed ? 'translate-x-full' : 'translate-x-0'}`} 
            />

            <div className="p-10 md:p-24">
              <header className="border-b border-white/20 pb-10">
                <h1 className="text-8xl font-black italic tracking-tighter uppercase">Docker</h1>
                <p className="text-blue-400 mt-2 text-xl tracking-[0.2em]">Build • Ship • Run</p>
              </header>

              <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
                  <h3 className="text-blue-400 mb-4">Architecture</h3>
                  <p className="text-sm leading-relaxed">Maîtrise des Dockerfiles, multi-stage builds et optimisation des couches d'images.</p>
                </div>
                {/* Autres blocs... */}
              </section>

              {/* NAVBAR INTER-SKILLS AMÉLIORÉE */}
              <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] flex gap-10 bg-white/10 p-4 rounded-md border border-white/20 backdrop-blur-xl items-center">
                <Link href="/skills/c" className="hover:text-blue-400 transition-colors uppercase text-[10px] tracking-widest">C</Link>
                <Link href="/skills/rust" className="hover:text-blue-400 transition-colors uppercase text-[10px] tracking-widest">Rust</Link>

                {/* 2. On remplace le Link par un bouton qui utilise handleReturn */}
                <button
                  onClick={handleReturn}
                  className="bg-blue-500 px-4 py-1 rounded text-black font-bold uppercase text-[9px] hover:scale-105 transition-transform"
                >
                  Vaisseau
                </button>
              </nav>
            </div>
          </>
        )}
      </TransitionVaisseau>
    </main>
  )
}