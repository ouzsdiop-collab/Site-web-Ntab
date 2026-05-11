import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Phone } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

export default function ContactCTA() {
  return (
    <section id="contact" style={{
      padding: '120px 0',
      background: 'linear-gradient(160deg, #F0F7F4 0%, #EEF4FF 100%)',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg, #0A2A5E, #1A7A4A)',
            marginBottom: 32,
            boxShadow: '0 12px 32px rgba(10,42,94,0.2)',
          }}>
            <Mail size={30} color="#fff" />
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
            color: '#0A2A5E', letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.2,
          }}>{siteContent.contact.headline}</h2>

          <p style={{
            fontSize: 17, color: '#4B5563', lineHeight: 1.75,
            maxWidth: 600, margin: '0 auto 40px',
          }}>{siteContent.contact.sub}</p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:contact@ntab-energy.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 14,
                background: 'linear-gradient(135deg, #0A2A5E, #1A4A8E)',
                color: '#fff', textDecoration: 'none',
                fontSize: 16, fontWeight: 700,
                boxShadow: '0 6px 20px rgba(10,42,94,0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(10,42,94,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(10,42,94,0.3)' }}
            >
              {siteContent.cta.final} <ArrowRight size={18} />
            </a>
            <a
              href="tel:+33000000000"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 14,
                background: '#fff', color: '#0A2A5E',
                textDecoration: 'none', fontSize: 16, fontWeight: 700,
                border: '2px solid #E8EDF5',
                boxShadow: '0 2px 8px rgba(10,42,94,0.06)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0A2A5E' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8EDF5' }}
            >
              <Phone size={18} /> Nous appeler
            </a>
          </div>

          {/* Badges confiance */}
          <div style={{
            display: 'flex', gap: 24, justifyContent: 'center',
            marginTop: 48, flexWrap: 'wrap',
          }}>
            {['Réponse sous 48h', 'Consultation initiale gratuite', 'Expertise Afrique & international'].map((t) => (
              <div key={t} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, color: '#6B7280', fontWeight: 500,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#1A7A4A', display: 'inline-block', flexShrink: 0,
                }} />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
