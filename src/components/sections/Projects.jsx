import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { siteContent } from '../../data/siteContent.js'

const STATUS_COLORS = {
  Livré: { bg: '#F0FAF4', text: '#1A7A4A', border: '#A8D8B8' },
  'En cours': { bg: '#EEF4FF', text: '#0A2A5E', border: '#C8DDF5' },
}

const CATEGORY_COLORS = ['#0A2A5E', '#1A7A4A', '#2A9D8F', '#E76F1A', '#6366F1']

export default function Projects() {
  return (
    <section id="projets" style={{
      padding: '120px 0', background: 'linear-gradient(160deg, #F8FAFF 0%, #F5F9F6 100%)',
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
            background: '#EEF4FF', border: '1px solid #C8DDF5',
            color: '#0A2A5E', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Projets & Références</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800,
            color: '#0A2A5E', letterSpacing: '-0.02em', marginBottom: 16,
          }}>Des missions à fort impact</h2>
          <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Un portefeuille de projets structurés, financés et livrés à travers le continent africain.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }} className="projects-grid">
          {siteContent.projects.map((project, i) => {
            const sc = STATUS_COLORS[project.status] || STATUS_COLORS['En cours']
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  background: '#fff', borderRadius: 20,
                  border: '1px solid #E8EDF5',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(10,42,94,0.04)',
                  transition: 'box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {/* Bandeau couleur en haut */}
                <div style={{
                  height: 6,
                  background: `linear-gradient(90deg, ${CATEGORY_COLORS[i % CATEGORY_COLORS.length]}, ${CATEGORY_COLORS[(i + 1) % CATEGORY_COLORS.length]})`,
                }} />

                <div style={{ padding: '28px 28px 24px' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', marginBottom: 12,
                  }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: '#9CA3AF',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>{project.category}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100,
                      background: sc.bg, color: sc.text, border: `1px solid ${sc.border}`,
                    }}>{project.status}</span>
                  </div>

                  <h3 style={{
                    fontSize: 16, fontWeight: 800, color: '#0A2A5E',
                    marginBottom: 10, lineHeight: 1.3,
                  }}>{project.title}</h3>
                  <p style={{
                    fontSize: 13, color: '#6B7280', lineHeight: 1.7, marginBottom: 20,
                  }}>{project.description}</p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: 11, padding: '4px 10px', borderRadius: 100,
                        background: '#F3F4F6', color: '#4B5563', fontWeight: 600,
                      }}>{tag}</span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    color: '#1A7A4A', fontSize: 13, fontWeight: 700,
                    borderTop: '1px solid #F3F4F6', paddingTop: 16,
                  }}>
                    Voir le détail <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
