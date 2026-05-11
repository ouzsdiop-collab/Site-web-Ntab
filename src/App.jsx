import React from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero3D from './components/sections/Hero.jsx'
import Stats from './components/sections/Stats.jsx'
import Expertise from './components/sections/Expertise.jsx'
import Methodology from './components/sections/Methodology.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Insights from './components/sections/Insights.jsx'
import ContactCTA from './components/sections/ContactCTA.jsx'
import './styles/globals.css'

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <Header />
      <main>
        <Hero3D />
        <Stats />
        <Expertise />
        <Methodology />
        <About />
        <Projects />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
