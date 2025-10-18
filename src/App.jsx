import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/js/Header.jsx'
import Contact from './components/js/Contact.jsx'
import HeroSection from './components/js/HeroSection.jsx'
import About from './components/js/About.jsx'
import Competences from './components/js/Competences.jsx'
import Services from './components/js/Services.jsx'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Competences />
      <Contact />
    </div>
  )
}

export default App
