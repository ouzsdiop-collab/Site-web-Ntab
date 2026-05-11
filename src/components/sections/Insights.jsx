import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const CAT_STYLE = {
  'Finance & Investissement': { bg: '#EFF6FF', color: '#1D4ED8' },
  'Transition énergétique':   { bg: 'var(--color-accent-light)', color: 'var(--color-accent)' },
  "Accès à l'énergie":        { bg: '#FFF7ED', color: '#B45309' },
}

export default function Insights() {
  return (
    <section id="insights" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: 'var(--space-12)',
            flexWrap: 'wrap', gap: 'var(--space-4)',
          }}
        >
          <div>
            <span className="eyebrow">Insights</span>
            <div className="divider" />
            <h2 className="section-title">Analyses & Publications</h2>
          </div>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-accent)',
            transition: 'gap var(--transition)',
          }}>
            Toutes les publications <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)',
        }} className="insights-grid">
          {siteContent.insights.map((item, i) => {
            const cs = CAT_STYLE[item.category] || { bg: '#F3F4F6', color: '#374151' }
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-8)',
                  background: '#fff',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <span style={{
                  display: 'inline-block', alignSelf: 'flex-start',
                  fontSize: '0.6875rem', fontWeight: 700,
                  padding: '4px 10px', borderRadius: 100,
                  background: cs.bg, color: cs.color,
                  marginBottom: 'var(--space-4)',
                  letterSpacing: '0.04em',
                }}>{item.category}</span>

                <h3 style={{
                  fontSize: '0.9375rem', fontWeight: 700,
                  color: 'var(--color-primary)', lineHeight: 1.45,
                  marginBottom: 'var(--space-3)', flex: 1,
                }}>{item.title}</h3>

                <p style={{
                  fontSize: '0.875rem', color: 'var(--color-text-muted)',
                  lineHeight: 1.7, marginBottom: 'var(--space-6)',
                }}>{item.excerpt}</p>

                <div style={{
                  borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    {item.date}
                  </span>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent)',
                  }}>
                    Lire <ArrowUpRight size={13} />
                  </span>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
