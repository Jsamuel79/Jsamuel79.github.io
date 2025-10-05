import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import HeroSection from './components/HeroSection.jsx'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Contact />
    </div>
  )
}

export default App
