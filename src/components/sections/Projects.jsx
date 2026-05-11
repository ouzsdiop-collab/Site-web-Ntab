import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const STATUS = {
  'Livré':    { bg: 'var(--color-accent-light)', color: 'var(--color-accent)' },
  'En cours': { bg: '#EFF6FF', color: '#1D4ED8' },
}
const ACCENTS = ['var(--color-accent)', 'var(--color-primary)', '#2A6EBB', '#0D5C3A', '#1A3A6B']

export default function Projects() {
  return (
    <section id="projets" className="section" style={{ background: 'var(--color-bg-subtle)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 'var(--space-12)' }}
        >
          <span className="eyebrow">Projets & Références</span>
          <div className="divider" />
          <h2 className="section-title">Des missions à fort impact</h2>
          <p className="section-subtitle">
            Un portefeuille de projets structurés, financés et livrés à travers le continent africain.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)',
        }} className="projects-grid">
          {siteContent.projects.map((p, i) => {
            const sc = STATUS[p.status] || STATUS['En cours']
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }}
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {/* Barre couleur */}
                <div style={{ height: 4, background: ACCENTS[i % ACCENTS.length] }} />

                <div style={{ padding: 'var(--space-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', marginBottom: 'var(--space-3)',
                  }}>
                    <span style={{
                      fontSize: '0.6875rem', fontWeight: 700,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}>{p.category}</span>
                    <span style={{
                      fontSize: '0.6875rem', fontWeight: 700,
                      padding: '3px 8px', borderRadius: 100,
                      background: sc.bg, color: sc.color,
                    }}>{p.status}</span>
                  </div>

                  <h3 style={{
                    fontSize: '0.9375rem', fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-3)', lineHeight: 1.35, flex: 1,
                  }}>{p.title}</h3>

                  <p style={{
                    fontSize: '0.875rem', color: 'var(--color-text-muted)',
                    lineHeight: 1.7, marginBottom: 'var(--space-4)',
                  }}>{p.description}</p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '0.75rem', padding: '3px 10px',
                        borderRadius: 100,
                        background: 'var(--color-bg-subtle)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-muted)', fontWeight: 500,
                      }}>{t}</span>
                    ))}
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <span style={{
                      fontSize: '0.8125rem', fontWeight: 600,
                      color: 'var(--color-accent)',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      Voir le détail <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
