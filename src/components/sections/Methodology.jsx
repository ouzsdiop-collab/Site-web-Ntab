import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent.js'

export default function Methodology() {
  return (
    <section id="methodologie" style={{
      padding: '120px 0',
      background: 'linear-gradient(160deg, #F8FAFF 0%, #F0F7F4 100%)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span style={{
            display: 'inline-block', marginBottom: 16,
            padding: '6px 16px', borderRadius: 100,
            background: '#EEF4FF', border: '1px solid #C8DDF5',
            color: '#0A2A5E', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Notre Méthodologie</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800,
            color: '#0A2A5E', letterSpacing: '-0.02em', marginBottom: 16,
          }}>De la vision au projet livré</h2>
          <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Une approche rigoureuse, éprouvée sur le terrain africain et alignée sur les standards internationaux.
          </p>
        </motion.div>

        {/* Timeline horizontale */}
        <div style={{ position: 'relative' }}>
          {/* Ligne de connexion */}
          <div style={{
            position: 'absolute',
            top: 36, left: '12.5%', right: '12.5%',
            height: 2,
            background: 'linear-gradient(90deg, #1A7A4A, #0A2A5E)',
            opacity: 0.15,
          }} className="timeline-line" />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative',
          }} className="methodology-grid">
            {siteContent.methodology.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                style={{ textAlign: 'center', padding: '0 8px' }}
              >
                {/* Numéro / circle */}
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #0A2A5E, #1A4A8E)'
                    : 'linear-gradient(135deg, #1A7A4A, #22A05A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 24px rgba(10,42,94,0.2)',
                  position: 'relative', zIndex: 1,
                }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>
                    {item.step}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 20, fontWeight: 800, color: '#0A2A5E',
                  marginBottom: 12, letterSpacing: '-0.01em',
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 14, color: '#6B7280', lineHeight: 1.7,
                }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
