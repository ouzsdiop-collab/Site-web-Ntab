import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

export default function ContactCTA() {
  const { contact, company } = siteContent
  return (
    <section id="contact" className="section" style={{ background: 'var(--color-bg-subtle)' }}>
      <div className="container container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <span className="eyebrow">Contact</span>
          <div className="divider" style={{ margin: '0 auto var(--space-6)' }} />
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800, color: 'var(--color-primary)',
            letterSpacing: '-0.025em', lineHeight: 1.2,
            marginBottom: 'var(--space-4)',
          }}>{contact.headline}</h2>
          <p style={{
            fontSize: '1.0625rem', color: 'var(--color-text-muted)',
            lineHeight: 1.75, marginBottom: 'var(--space-10)',
            maxWidth: 520, margin: '0 auto var(--space-10)',
          }}>{contact.sub}</p>

          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 'var(--space-10)',
          }}>
            <a href={`mailto:${company.email}`} className="btn btn--primary">
              <Mail size={16} /> Démarrer la conversation <ArrowRight size={16} />
            </a>
            <a href={`tel:${company.phone}`} className="btn btn--outline">
              <Phone size={16} /> Nous appeler
            </a>
          </div>

          <div style={{
            display: 'flex', gap: 'var(--space-8)', justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {contact.badges.map(b => (
              <div key={b} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 500,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--color-accent)',
                  display: 'inline-block', flexShrink: 0,
                }} />
                {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
