'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-transparent">
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* 1. LOGO : Apparaît en premier */}
        <div className={`relative mb-2 group transition-all duration-[1000ms] ease-out
          ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

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

        {/* 2. TEXTE : Apparaît avec un DELAY (délai) après le logo */}
        <div className={`transition-all duration-[1000ms] ease-out delay-700
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          
          <h1 className="mt-0 text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
            Samuel <span className="text-blue-500">Dev</span>
          </h1>

          <p className="mt-2 text-gray-400 text-xs md:text-sm font-medium tracking-[0.3em] uppercase opacity-80">
            Fullstack Developer • Creative Coding • Next.js
          </p>
        </div>

        {/* 3. BOUTON : Apparaît encore plus tard */}
        <button className={`mt-10 px-8 py-3 bg-transparent border border-white/20 hover:border-blue-500 hover:text-blue-500 transition-all duration-[1000ms] delay-[1200ms] text-xs tracking-widest uppercase text-white
          ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          Découvrir mes projets
        </button>
      </div>
    </section>
  )
}