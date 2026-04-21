import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Tag from '../components/Tag'
import { experience } from '../data/experience'
import { staggerContainer, slideInLeft } from '../utils/animations'

export default function Experience() {
  return (
    <SectionWrapper id="experience" dark>
      <p className="section-label" style={{ color: 'var(--color-magenta)' }}>Experience</p>
      <h2 className="section-heading section-heading--white" style={{ marginBottom: '48px' }}>
        Where I've worked
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ position: 'relative' }}
      >
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '12px',
          bottom: '12px',
          width: '1px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '1px'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingLeft: '56px' }}>
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              variants={slideInLeft}
              style={{ position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-44px',
                top: '16px',
                width: '10px',
                height: '10px',
                background: i === 0 ? 'var(--color-purple)' : 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                border: i === 0 ? '2px solid rgba(83,58,253,0.4)' : '2px solid rgba(255,255,255,0.1)',
                boxShadow: i === 0 ? '0 0 0 3px rgba(83,58,253,0.15)' : 'none'
              }} />

              {/* Card */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '3px solid var(--color-purple)',
                borderRadius: '0 6px 6px 0',
                padding: '24px 28px',
                transition: 'background 0.2s, border-color 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: '#ffffff',
                      fontFeatureSettings: '"ss01"',
                      letterSpacing: '-0.18px',
                      lineHeight: 1.2,
                      margin: 0
                    }}>
                      {job.role}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      fontFeatureSettings: '"ss01"',
                      marginTop: '3px'
                    }}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                    marginTop: '2px'
                  }}>
                    {job.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul style={{
                  listStyle: 'none',
                  marginTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '7px'
                }}>
                  {job.highlights.map((h, hi) => (
                    <li key={hi} style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                      fontFamily: 'var(--font-primary)',
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,0.6)',
                      fontFeatureSettings: '"ss01"'
                    }}>
                      <span style={{ color: 'var(--color-purple)', flexShrink: 0, marginTop: '5px', fontSize: '7px' }}>◆</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  {job.tags.map(t => (
                    <Tag key={t} label={t} variant="dark" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
