import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Building2, Banknote, Handshake, Settings2, GraduationCap, ArrowRight } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const ICONS = { BarChart3, Building2, Banknote, Handshake, Settings2, GraduationCap }

export default function Expertise() {
  return (
    <section id="expertises" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 'var(--space-12)' }}
        >
          <span className="eyebrow">Nos Expertises</span>
          <div className="divider" />
          <h2 className="section-title">Un conseil à 360° sur le cycle énergétique</h2>
          <p className="section-subtitle">
            De la stratégie nationale à la livraison de projets, nous couvrons l'intégralité des besoins du secteur énergétique africain.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
        }} className="expertise-grid">
          {siteContent.expertises.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{
                  padding: 'var(--space-8)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  background: '#fff',
                  transition: 'all var(--transition)',
                  cursor: 'default',
                }}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(11,31,58,0.08)' }}
              >
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-accent-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  {Icon && <Icon size={20} color="var(--color-accent)" strokeWidth={1.75} />}
                </div>
                <h3 style={{
                  fontSize: '0.9375rem', fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-2)', lineHeight: 1.3,
                }}>{item.title}</h3>
                <p style={{
                  fontSize: '0.875rem', color: 'var(--color-text-muted)',
                  lineHeight: 1.7, marginBottom: 'var(--space-4)',
                }}>{item.description}</p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontSize: '0.8125rem', fontWeight: 600,
                  color: 'var(--color-accent)',
                }}>
                  En savoir plus <ArrowRight size={13} />
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .expertise-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .expertise-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
