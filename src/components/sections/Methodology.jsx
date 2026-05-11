import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent.js'

export default function Methodology() {
  return (
    <section id="methodologie" className="section" style={{ background: 'var(--color-bg-subtle)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 'var(--space-16)' }}
        >
          <span className="eyebrow">Notre Méthodologie</span>
          <div className="divider" />
          <h2 className="section-title">De la vision au projet livré</h2>
          <p className="section-subtitle">
            Une approche rigoureuse, éprouvée sur le terrain africain et alignée sur les standards internationaux.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Ligne de connexion desktop */}
          <div className="timeline-line" style={{
            position: 'absolute',
            top: 28, left: '12.5%', right: '12.5%',
            height: 1,
            background: 'linear-gradient(90deg, var(--color-accent), var(--color-primary))',
            opacity: 0.2,
          }} />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)',
          }} className="methodology-grid">
            {siteContent.methodology.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                style={{ textAlign: 'center', padding: '0 var(--space-2)' }}
              >
                {/* Numéro */}
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto var(--space-6)',
                  position: 'relative', zIndex: 1,
                  boxShadow: 'var(--shadow-md)',
                }}>
                  <span style={{
                    fontSize: '1rem', fontWeight: 800,
                    color: '#fff', letterSpacing: '-0.02em',
                  }}>{item.step}</span>
                </div>
                <h3 style={{
                  fontSize: '1.0625rem', fontWeight: 800,
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-3)',
                  letterSpacing: '-0.015em',
                }}>{item.title}</h3>
                <p style={{
                  fontSize: '0.875rem', color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .methodology-grid { grid-template-columns: repeat(2,1fr) !important; }
          .timeline-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .methodology-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
