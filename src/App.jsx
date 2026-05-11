import React from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Stats from './components/sections/Stats.jsx'
import Expertise from './components/sections/Expertise.jsx'
import Methodology from './components/sections/Methodology.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Insights from './components/sections/Insights.jsx'
import ContactCTA from './components/sections/ContactCTA.jsx'
import './styles/variables.css'
import './styles/globals.css'
import './styles/animations.css'

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 72 }}>
        <Hero />
        <Stats />
        <Expertise />
        <Methodology />
        <About />
        <Projects />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
