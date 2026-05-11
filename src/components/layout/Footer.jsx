import React from 'react'
import { siteContent } from '../../data/siteContent.js'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #071A3E 0%, #0A2A5E 100%)',
      color: '#fff', padding: '64px 0 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
          marginBottom: 48,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{
              fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em',
              marginBottom: 16,
            }}>
              NTAB <span style={{ color: '#4ADE80' }}>Energy</span>
            </div>
            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
              maxWidth: 280, marginBottom: 24,
            }}>
              Cabinet de conseil spécialisé dans le développement et le financement de projets énergétiques en Afrique.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(74,222,128,0.15)'; e.currentTarget.style.color = '#4ADE80' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</h4>
            {siteContent.nav.map((item) => (
              <a key={item.href} href={item.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                fontSize: 14, fontWeight: 500, marginBottom: 12, transition: 'color 0.2s',
              }}
                onMouseEnter={e => { e.target.style.color = '#4ADE80' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.65)' }}
              >{item.label}</a>
            ))}
          </div>

          {/* Expertises */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Expertises</h4>
            {['Stratégie', 'Développement', 'Financement', 'PPP', 'Performance', 'Inclusion'].map((item) => (
              <p key={item} style={{
                color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 10,
              }}>{item}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Contact</h4>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 12 }}>contact@ntab-energy.com</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 24 }}>Afrique · Europe · International</p>
            <a
              href="#contact"
              style={{
                display: 'inline-block', padding: '10px 20px', borderRadius: 10,
                background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)',
                color: '#4ADE80', textDecoration: 'none', fontSize: 13, fontWeight: 700,
                transition: 'all 0.2s',
              }}
            >Démarrer un projet →</a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} NTAB Energy. Tous droits réservés.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            Strategic Energy Advisory · Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
