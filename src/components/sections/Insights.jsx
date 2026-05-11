import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const CAT_COLORS = {
  'Finance & Investissement': { bg: '#EEF4FF', text: '#0A2A5E' },
  'Transition énergétique': { bg: '#F0FAF4', text: '#1A7A4A' },
  "Accès à l'énergie": { bg: '#FFF7ED', text: '#C05621' },
}

export default function Insights() {
  return (
    <section id="insights" style={{ padding: '120px 0', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24,
          }}
        >
          <div>
            <span style={{
              display: 'inline-block', marginBottom: 16,
              padding: '6px 16px', borderRadius: 100,
              background: '#F0FAF4', border: '1px solid #A8D8B8',
              color: '#1A7A4A', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>Insights</span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800,
              color: '#0A2A5E', letterSpacing: '-0.02em',
            }}>Analyses & Publications</h2>
          </div>
          <a
            href="#"
            style={{
              color: '#1A7A4A', fontWeight: 700, fontSize: 14,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
            }}
          >Toutes les publications <ArrowUpRight size={16} /></a>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }} className="insights-grid">
          {siteContent.insights.map((item, i) => {
            const cc = CAT_COLORS[item.category] || { bg: '#F3F4F6', text: '#374151' }
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  background: '#FAFBFF', borderRadius: 20,
                  border: '1px solid #E8EDF5', padding: '32px',
                  cursor: 'pointer', transition: 'box-shadow 0.3s ease',
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <BookOpen size={32} color="#0A2A5E" style={{ opacity: 0.3 }} />
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100,
                  background: cc.bg, color: cc.text,
                  display: 'inline-block', marginBottom: 16,
                }}>{item.category}</span>
                <h3 style={{
                  fontSize: 16, fontWeight: 800, color: '#0A2A5E',
                  marginBottom: 12, lineHeight: 1.4,
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 20,
                }}>{item.excerpt}</p>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  borderTop: '1px solid #E8EDF5', paddingTop: 16,
                }}>
                  <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>{item.date}</span>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    color: '#1A7A4A', fontSize: 13, fontWeight: 700,
                  }}>
                    Lire <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
