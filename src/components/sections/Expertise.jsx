import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Building2, Banknote, Handshake, Settings, Users, ArrowRight } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const ICONS = { LineChart, Building2, Banknote, Handshake, Settings, Users }

export default function Expertise() {
  return (
    <section id="expertises" style={{
      padding: '120px 0', background: '#FFFFFF',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{
            display: 'inline-block', marginBottom: 16,
            padding: '6px 16px', borderRadius: 100,
            background: '#F0FAF4', border: '1px solid #A8D8B8',
            color: '#1A7A4A', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Nos Expertises</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800,
            color: '#0A2A5E', letterSpacing: '-0.02em', marginBottom: 16,
          }}>Un conseil à 360° sur le cycle énergétique</h2>
          <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            De la stratégie nationale à la livraison de projets, nous couvrons l'intégralité des besoins du secteur énergétique africain.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }} className="expertise-grid">
          {siteContent.expertises.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  padding: '32px', borderRadius: 20,
                  background: '#FAFBFF',
                  border: '1px solid #E8EDF5',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 16px 40px rgba(10,42,94,0.1)',
                  borderColor: '#C8DDF5',
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'linear-gradient(135deg, #EEF4FF, #E8F5EE)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  {Icon && <Icon size={24} color="#0A2A5E" />}
                </div>
                <h3 style={{
                  fontSize: 16, fontWeight: 700, color: '#0A2A5E',
                  marginBottom: 10, lineHeight: 1.3,
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 16,
                }}>{item.description}</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: '#1A7A4A', fontSize: 13, fontWeight: 600,
                }}>
                  En savoir plus <ArrowRight size={14} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
