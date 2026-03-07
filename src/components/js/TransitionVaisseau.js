'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TransitionVaisseau({ children }) {
  const router = useRouter()
  const [isLeaving, setIsLeaving] = useState(false)

  const handleReturn = (e) => {
    e.preventDefault()
    setIsLeaving(true)

    setTimeout(() => {
      router.push('/')
    }, 900)
  }

  return (
    <>
      {/* LE RIDEAU : On utilise h-screen/w-screen et on force le top-0 */}
      <div 
        className={`fixed top-0 left-0 w-screen h-screen bg-black z-[9999] pointer-events-none transition-transform duration-[900ms] ease-in-out
        ${isLeaving ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ willChange: 'transform' }}
      />

      {/* On rend les enfants (la page) */}
      {children(handleReturn)}
    </>
  )
}