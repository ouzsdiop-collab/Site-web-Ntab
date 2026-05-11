import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

export default function About() {
  const { about } = siteContent
  return (
    <section id="about" style={{ padding: '120px 0', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        }} className="about-grid">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block', marginBottom: 16,
              padding: '6px 16px', borderRadius: 100,
              background: '#F0FAF4', border: '1px solid #A8D8B8',
              color: '#1A7A4A', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>À propos</span>
            <h2 style={{
              fontSize: 'clamp(1.7rem, 2.5vw, 2.5rem)', fontWeight: 800,
              color: '#0A2A5E', marginBottom: 24, lineHeight: 1.2, letterSpacing: '-0.02em',
            }}>{about.headline}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} style={{
                fontSize: 15, color: '#4B5563', lineHeight: 1.8, marginBottom: 16,
              }}>{p}</p>
            ))}
          </motion.div>

          {/* Valeurs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div style={{
              background: 'linear-gradient(160deg, #F8FAFF, #F0F7F4)',
              borderRadius: 24, padding: '40px', border: '1px solid #E8EDF5',
            }}>
              <h3 style={{
                fontSize: 18, fontWeight: 800, color: '#0A2A5E',
                marginBottom: 28, letterSpacing: '-0.01em',
              }}>Nos engagements</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {about.values.map((v, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <CheckCircle size={20} color="#1A7A4A" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: '#1F2937', fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Bande de confiance */}
              <div style={{
                marginTop: 32, paddingTop: 24,
                borderTop: '1px solid #E8EDF5',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
              }}>
                {[
                  { v: '15+', l: 'Pays africains' },
                  { v: '10+', l: "Ans d'expérience" },
                  { v: '30+', l: 'Projets' },
                  { v: '$2Md+', l: 'Financements' },
                ].map((item, i) => (
                  <div key={i} style={{
                    textAlign: 'center', padding: '16px 12px',
                    background: '#fff', borderRadius: 12, border: '1px solid #E8EDF5',
                  }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#0A2A5E', letterSpacing: '-0.02em' }}>
                      {item.v}
                    </div>
                    <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500, marginTop: 4 }}>
                      {item.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
