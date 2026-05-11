import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent.js'

const LightEnergyNetwork3D = lazy(() => import('../visuals/LightEnergyNetwork3D.jsx'))

function Pill({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 14px', borderRadius: 100,
      background: '#F0FAF4', border: '1px solid #A8D8B8',
      color: '#1A7A4A', fontSize: 12, fontWeight: 600,
      letterSpacing: '0.05em', textTransform: 'uppercase',
    }}>{children}</span>
  )
}

function PillarBadge({ label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '8px 16px', borderRadius: 8,
      background: 'rgba(10,42,94,0.04)', border: '1px solid rgba(10,42,94,0.1)',
      color: '#0A2A5E', fontSize: 13, fontWeight: 600,
    }}>{label}</span>
  )
}

export default function Hero3D() {
  const { company, cta } = siteContent

  return (
    <section id="hero" style={{
      minHeight: '100vh', paddingTop: 72,
      background: 'linear-gradient(160deg, #FFFFFF 0%, #F8FAFF 40%, #F0F7F4 100%)',
      display: 'flex', alignItems: 'center', overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background décoratif */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(26,122,74,0.04) 0%, transparent 50%),
          radial-gradient(circle at 85% 20%, rgba(10,42,94,0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64, alignItems: 'center',
        }} className="hero-grid">
          {/* Colonne texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div style={{ marginBottom: 24 }}>
              <Pill>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', background: '#1A7A4A',
                  display: 'inline-block',
                }} />
                {company.badge}
              </Pill>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800,
              color: '#0A2A5E', lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: 24,
            }}>
              {company.tagline}
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#4B5563', lineHeight: 1.75, marginBottom: 36,
              maxWidth: 520,
            }}>
              {company.taglineSub}
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a
                href="#expertises"
                style={{
                  padding: '14px 28px', borderRadius: 12,
                  background: 'linear-gradient(135deg, #0A2A5E, #1A4A8E)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: 15, fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(10,42,94,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(10,42,94,0.35)' }}
                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 16px rgba(10,42,94,0.3)' }}
              >
                {cta.primary}
              </a>
              <a
                href="#contact"
                style={{
                  padding: '14px 28px', borderRadius: 12,
                  background: '#fff', color: '#0A2A5E',
                  textDecoration: 'none', fontSize: 15, fontWeight: 700,
                  border: '2px solid #0A2A5E',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.target.style.background = '#F0F4FF' }}
                onMouseLeave={e => { e.target.style.background = '#fff' }}
              >
                {cta.secondary}
              </a>
            </div>

            {/* Pillars */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {company.pillars.map((p) => <PillarBadge key={p} label={p} />)}
            </div>
          </motion.div>

          {/* Colonne 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hero-3d-col"
            style={{
              background: 'rgba(255,255,255,0.7)',
              borderRadius: 24,
              border: '1px solid rgba(10,42,94,0.08)',
              boxShadow: '0 20px 60px rgba(10,42,94,0.08), 0 4px 16px rgba(10,42,94,0.04)',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
              padding: 8,
            }}
          >
            <Suspense fallback={
              <div style={{
                height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#9CA3AF', fontSize: 14,
              }}>
                Chargement du réseau énergétique…
              </div>
            }>
              <LightEnergyNetwork3D height={500} />
            </Suspense>

            {/* Label carte */}
            <div style={{
              padding: '12px 20px', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(10,42,94,0.06)',
            }}>
              <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>
                Réseau énergétique africain
              </span>
              <span style={{
                fontSize: 11, color: '#1A7A4A', fontWeight: 600,
                background: '#F0FAF4', padding: '3px 10px', borderRadius: 100,
              }}>Live</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
