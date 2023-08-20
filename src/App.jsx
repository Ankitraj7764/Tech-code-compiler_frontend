import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Footer from './components/Footer'
import CompilexDemo from './components/CompilexDemo'
import CompilerComponent from './components/CompilerComponent'
import HeroL from './components/HeroL'
import './App.css'

const App = () => {
  return (
 <>
 <Navbar/>
 <Hero/>
 {/* <ParticleBackground/> */}
 <HeroL/>
 {/* <CompilerComponent/> */}
 <Footer/>
 </>
  )
}

export default App