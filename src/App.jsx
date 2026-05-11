import React from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import { designDirections } from './data/designDirections.js'
import './styles/globals.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero-system">
          <div className="container">
            <h1>NTAB Energy Website System</h1>
            <p>Refonte complète du site institutionnel — Énergie, Afrique, Impact durable</p>
          </div>
        </section>

        <section className="directions">
          <div className="container">
            <h2>4 Directions Artistiques</h2>
            <div className="directions-grid">
              {designDirections.map((dir) => (
                <div key={dir.id} className="direction-card">
                  <span className="direction-number">{dir.id}</span>
                  <h3>{dir.name}</h3>
                  <p>{dir.description}</p>
                  <div className="direction-palette">
                    {dir.colors.map((c, i) => (
                      <span key={i} className="color-swatch" style={{ background: c }} title={c} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ui-library">
          <div className="container">
            <h2>UI/UX Inspiration Library</h2>
            <p>Bibliothèque de référence locale — <code>references/ui-inspiration/ui-ux-pro-max-skill/</code></p>
            <p>Skill active — <code>.claude/skills/ui-ux-pro-max/</code></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
