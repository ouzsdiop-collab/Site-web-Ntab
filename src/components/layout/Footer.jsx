import React from 'react'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

export default function Footer() {
  const { company, nav, footer } = siteContent
  return (
    <footer style={{
      background: 'var(--color-primary)',
      color: '#fff',
      padding: 'var(--space-16) 0 var(--space-8)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'clamp(2rem, 6vw, 4rem)',
          marginBottom: 'var(--space-12)',
          paddingBottom: 'var(--space-12)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              fontSize: '1.125rem', fontWeight: 800,
              letterSpacing: '-0.02em', marginBottom: 'var(--space-4)',
              color: '#fff',
            }}>{company.name}</div>
            <p style={{
              fontSize: '0.875rem', color: 'var(--color-text-light)',
              lineHeight: 1.75, maxWidth: 280,
              marginBottom: 'var(--space-6)',
            }}>{footer.description}</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all var(--transition)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
            }}>Navigation</p>
            {nav.map(item => (
              <a key={item.href} href={item.href} style={{
                display: 'block', fontSize: '0.875rem',
                color: 'var(--color-text-light)',
                marginBottom: 'var(--space-3)',
                transition: 'color var(--transition)',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-light)'}
              >{item.label}</a>
            ))}
          </div>

          {/* Expertises */}
          <div>
            <p style={{
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
            }}>Expertises</p>
            {footer.expertisesLinks.map(e => (
              <p key={e} style={{
                fontSize: '0.875rem', color: 'var(--color-text-light)',
                marginBottom: 'var(--space-3)', lineHeight: 1.4,
              }}>{e}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
            }}>Contact</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-3)' }}>
              {company.email}
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>
              {company.locations}
            </p>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '0.8125rem', fontWeight: 700,
              color: 'var(--color-accent)',
              border: '1px solid rgba(27,104,64,0.4)',
              padding: '8px 16px', borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition)',
              background: 'rgba(27,104,64,0.08)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(27,104,64,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(27,104,64,0.08)' }}
            >
              Démarrer un projet →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)' }}>
            {company.badge} · Africa
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
