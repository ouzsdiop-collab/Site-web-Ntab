import React from 'react'
import { motion } from 'framer-motion'
import { Award, Globe, Briefcase, Leaf } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const ICONS = { Award, Globe, Briefcase, Leaf }

export default function Stats() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0A2A5E 0%, #0F3D7A 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(26,122,74,0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }} className="stats-grid">
          {siteContent.stats.map((stat, i) => {
            const Icon = ICONS[stat.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ textAlign: 'center', padding: '24px 16px' }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(26,122,74,0.2)',
                  border: '1px solid rgba(26,122,74,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  {Icon && <Icon size={24} color="#4ADE80" />}
                </div>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
                  color: '#fff', letterSpacing: '-0.02em', lineHeight: 1,
                  marginBottom: 8,
                }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
