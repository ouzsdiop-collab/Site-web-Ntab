import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  }),
}

export default function Hero() {
  const { company } = siteContent
  const lines = company.tagline.split('\n')

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      paddingTop: 72,
      display: 'flex', flexDirection: 'column',
      background: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Fond graphique sobre : bandes verticales très légères */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(11,31,58,0.018) 0px, rgba(11,31,58,0.018) 1px, transparent 1px, transparent calc((100% - 2px) / 12))',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
      }} />

      {/* Accent vert très discret en haut à droite */}
      <div aria-hidden style={{
        position: 'absolute', top: 72, right: 0,
        width: '40vw', height: '60vh',
        background: 'radial-gradient(ellipse at top right, rgba(27,104,64,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{
        flex: 1, display: 'flex', alignItems: 'center',
        position: 'relative', zIndex: 1,
        paddingTop: 'clamp(3rem, 8vh, 6rem)',
        paddingBottom: 'clamp(3rem, 8vh, 6rem)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'center',
          width: '100%',
        }} className="hero-grid">

          {/* Colonne texte */}
          <div>
            <motion.div
              initial="hidden" animate="visible" custom={0} variants={fadeUp}
              style={{ marginBottom: 'var(--space-6)' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}>
                <span style={{
                  width: 20, height: 2,
                  background: 'var(--color-accent)',
                  display: 'inline-block', borderRadius: 1,
                }} />
                {company.badge}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                color: 'var(--color-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 'var(--space-6)',
              }}
            >
              {lines.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {i === 1
                    ? <><span style={{ color: 'var(--color-accent)' }}>{line.split(' ')[0]}</span>{' '}{line.split(' ').slice(1).join(' ')}</>
                    : line
                  }
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.8,
                marginBottom: 'var(--space-8)',
                maxWidth: 520,
              }}
            >
              {company.taglineSub}
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" custom={3} variants={fadeUp}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <a href="#expertises" className="btn btn--primary">
                Nos expertises <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn--outline">
                Nous contacter
              </a>
            </motion.div>
          </div>

          {/* Colonne droite : carte sobre avec chiffres */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hero-card-col"
          >
            <div style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              background: 'var(--color-bg-subtle)',
            }}>
              {/* Bandeau haut */}
              <div style={{
                background: 'var(--color-primary)',
                padding: 'var(--space-6) var(--space-8)',
                color: '#fff',
              }}>
                <p style={{
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)', marginBottom: 8,
                }}>NTAB Energy</p>
                <p style={{
                  fontSize: '1.0625rem', fontWeight: 600,
                  color: '#fff', lineHeight: 1.4,
                }}>Cabinet de conseil stratégique en énergie pour le développement africain</p>
              </div>

              {/* Grille de chiffres */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
              }}>
                {siteContent.stats.map((s, i) => (
                  <div key={i} style={{
                    padding: 'var(--space-6) var(--space-6)',
                    borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                    borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none',
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>{s.value}</div>
                    <div style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.4,
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Pied de carte */}
              <div style={{
                padding: 'var(--space-4) var(--space-6)',
                borderTop: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--color-accent)', display: 'inline-block',
                }} />
                <span style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                }}>Présent dans 10+ marchés africains</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'var(--color-text-muted)', fontSize: '0.75rem',
          fontWeight: 500, letterSpacing: '0.05em',
        }}
      >
        <span>Découvrir</span>
        <ChevronDown size={16} style={{ animation: 'bounce 2s infinite' }} />
      </motion.div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card-col { display: none !important; }
        }
      `}</style>
    </section>
  )
}
