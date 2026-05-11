import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent.js'

export default function Stats() {
  return (
    <section style={{
      background: 'var(--color-primary)',
      padding: 'var(--space-16) 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }} className="stats-grid">
          {siteContent.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22,1,0.36,1] }}
              style={{
                padding: 'var(--space-8) var(--space-6)',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: 10,
              }}>{s.value}</div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 500,
                lineHeight: 1.4,
              }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
