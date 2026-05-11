import React, { useState, useEffect } from 'react'
import { siteContent } from '../../data/siteContent.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('FR')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid #E8EDF5' : '1px solid transparent',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 2px 20px rgba(10,42,94,0.06)' : 'none',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img
            src={siteContent.company.logo}
            alt="NTAB Energy"
            style={{ height: 44, width: 'auto' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div style={{
            display: 'none', alignItems: 'center', gap: 8,
            fontWeight: 800, fontSize: 20, color: '#0A2A5E', letterSpacing: '-0.5px',
          }}>
            <span style={{
              width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #0A2A5E, #1A7A4A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 14, fontWeight: 800,
            }}>N</span>
            NTAB <span style={{ color: '#1A7A4A' }}>Energy</span>
          </div>
        </a>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-desktop">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                padding: '8px 14px', borderRadius: 8,
                color: '#374151', textDecoration: 'none',
                fontSize: 14, fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.target.style.color = '#1A7A4A'; e.target.style.background = '#F0FAF4' }}
              onMouseLeave={e => { e.target.style.color = '#374151'; e.target.style.background = 'transparent' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Lang toggle */}
          <div style={{
            display: 'flex', borderRadius: 8, overflow: 'hidden',
            border: '1px solid #E8EDF5', fontSize: 12, fontWeight: 600,
          }}>
            {['FR', 'EN'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '6px 12px', border: 'none', cursor: 'pointer',
                  background: lang === l ? '#0A2A5E' : '#fff',
                  color: lang === l ? '#fff' : '#6B7280',
                  transition: 'all 0.2s ease',
                }}
              >{l}</button>
            ))}
          </div>

          {/* CTA Expert */}
          <a
            href="#contact"
            style={{
              padding: '10px 20px', borderRadius: 10,
              background: 'linear-gradient(135deg, #0A2A5E, #1A4A8E)',
              color: '#fff', textDecoration: 'none',
              fontSize: 13, fontWeight: 600,
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(10,42,94,0.25)',
            }}
            className="cta-expert"
          >
            {siteContent.cta.expert}
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="burger-btn"
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            }}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2,
                background: '#0A2A5E', borderRadius: 2,
                transition: 'all 0.2s ease',
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid #E8EDF5',
          padding: '16px 24px 24px',
        }}>
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                color: '#1F2937', textDecoration: 'none',
                fontSize: 15, fontWeight: 500,
                borderBottom: '1px solid #F3F4F6',
              }}
            >{item.label}</a>
          ))}
          <a
            href="#contact"
            style={{
              display: 'block', marginTop: 16, padding: '12px 20px',
              background: '#0A2A5E', color: '#fff', textDecoration: 'none',
              borderRadius: 10, textAlign: 'center', fontWeight: 600,
            }}
          >{siteContent.cta.expert}</a>
        </div>
      )}
    </header>
  )
}
