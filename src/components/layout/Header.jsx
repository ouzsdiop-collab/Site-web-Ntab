import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <img
            src="/assets/logo-ntab-energy.png"
            alt="NTAB Energy"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
          />
          <span style={{ display: 'none', fontWeight: 700, fontSize: '1.25rem' }}>NTAB Energy</span>
        </div>
        <nav className="header-nav">
          <a href="#expertises">Expertises</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
