import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

export default function About() {
  const { about } = siteContent
  return (
    <section id="about" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 8vw, 7rem)', alignItems: 'start',
        }} className="about-grid">

          {/* Colonne texte */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">{about.eyebrow}</span>
            <div className="divider" />
            <h2 className="section-title">{about.headline}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} style={{
                fontSize: '0.9375rem', color: 'var(--color-text-muted)',
                lineHeight: 1.8, marginBottom: 'var(--space-4)',
              }}>{p}</p>
            ))}
          </motion.div>

          {/* Colonne valeurs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div style={{
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
            }}>
              <div style={{
                background: 'var(--color-primary)',
                padding: 'var(--space-6) var(--space-8)',
              }}>
                <p style={{
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: 6,
                }}>Nos engagements</p>
                <p style={{
                  fontSize: '0.9375rem', fontWeight: 600,
                  color: '#fff', lineHeight: 1.5,
                }}>Les principes qui guident chaque mission.</p>
              </div>

              <div style={{ padding: 'var(--space-6) var(--space-8)' }}>
                {about.values.map((v, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 'var(--space-4)',
                    paddingBottom: i < about.values.length - 1 ? 'var(--space-6)' : 0,
                    marginBottom: i < about.values.length - 1 ? 'var(--space-6)' : 0,
                    borderBottom: i < about.values.length - 1 ? '1px solid var(--color-border)' : 'none',
                    alignItems: 'flex-start',
                  }}>
                    <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{
                        fontSize: '0.9375rem', fontWeight: 700,
                        color: 'var(--color-primary)', marginBottom: 2,
                      }}>{v.label}</p>
                      <p style={{
                        fontSize: '0.875rem', color: 'var(--color-text-muted)',
                        lineHeight: 1.6,
                      }}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
