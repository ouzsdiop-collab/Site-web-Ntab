import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [lang, setLang]           = useState('FR')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        height: 72,
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all var(--transition-slow)',
      }}>
        <div className="container" style={{
          height: '100%', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={siteContent.company.logo}
              alt={siteContent.company.name}
              style={{ height: 40, width: 'auto' }}
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span style={{
              display: 'none',
              fontSize: '1.125rem', fontWeight: 800,
              color: 'var(--color-primary)', letterSpacing: '-0.02em',
            }}>
              {siteContent.company.name}
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hide-mobile" style={{ display: 'flex', gap: 4 }}>
            {siteContent.nav.map(item => (
              <a key={item.href} href={item.href} style={{
                padding: '8px 14px', borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem', fontWeight: 500,
                color: 'var(--color-text-muted)',
                transition: 'all var(--transition)',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.background = 'var(--color-bg-subtle)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.background = 'transparent' }}
              >{item.label}</a>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Lang toggle */}
            <div className="hide-mobile" style={{
              display: 'flex', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden', fontSize: '0.8125rem', fontWeight: 600,
            }}>
              {['FR', 'EN'].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '6px 12px', border: 'none',
                  background: lang === l ? 'var(--color-primary)' : '#fff',
                  color: lang === l ? '#fff' : 'var(--color-text-muted)',
                  cursor: 'pointer', transition: 'all var(--transition)',
                }}>{l}</button>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="btn btn--primary hide-mobile" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              Parler à un expert
            </a>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'transparent',
              }}
              className="burger"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {menuOpen ? <X size={18} color="var(--color-primary)" /> : <Menu size={18} color="var(--color-primary)" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
              zIndex: 800, background: '#fff',
              borderTop: '1px solid var(--color-border)',
              padding: '24px var(--container-pad)',
              overflowY: 'auto',
            }}
          >
            {siteContent.nav.map(item => (
              <a key={item.href} href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '16px 0',
                  fontSize: '1.0625rem', fontWeight: 600,
                  color: 'var(--color-primary)',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >{item.label}</a>
            ))}
            <a href="#contact" className="btn btn--primary"
              onClick={() => setMenuOpen(false)}
              style={{ marginTop: 24, display: 'inline-flex' }}
            >Parler à un expert</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
