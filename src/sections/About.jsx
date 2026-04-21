import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { staggerContainer, slideInRight } from '../utils/animations'

const STATS = [
  { value: '3 months', label: 'Internship @ dWise' },
  { value: '10+ APIs', label: 'Integrated in CMS' },
  { value: '30% ↑', label: 'Developer Productivity' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start'
      }}
      className="about-grid"
      >
        {/* Left — Text */}
        <div>
          <p className="section-label">About Me</p>
          <h2 className="section-heading" style={{ marginBottom: '24px' }}>
            Aspiring Software Engineer
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.65, color: 'var(--color-body)', fontFamily: 'var(--font-primary)', fontFeatureSettings: '"ss01"' }}>
              Based in Belagavi, Karnataka — I build clean, purposeful software with a strong foundation in Core Java, OOPs, DSA, MySQL, React, Angular, and Spring Boot.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.65, color: 'var(--color-body)', fontFamily: 'var(--font-primary)', fontFeatureSettings: '"ss01"' }}>
              Recently interned at <span style={{ color: 'var(--color-heading)', fontWeight: 400 }}>dWise Solutions</span>, where I built a healthcare CMS — Angular, Spring Boot, Java, PostgreSQL, and 10+ REST APIs. Delivered real productivity gains by embedding AI workflows into the engineering process.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.65, color: 'var(--color-body)', fontFamily: 'var(--font-primary)', fontFeatureSettings: '"ss01"' }}>
              Published research in network intrusion detection using Random Forest classification — bridging theory and applied systems security.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
            <span className="tag tag--purple">Open to Work</span>
            <span className="tag tag--neutral">Full-time Roles</span>
            <span className="tag tag--neutral">Internships</span>
          </div>
        </div>

        {/* Right — Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {STATS.map(stat => (
            <motion.div
              key={stat.value}
              variants={slideInRight}
              className="card"
              style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              <div style={{
                width: '3px',
                height: '40px',
                background: 'var(--color-purple)',
                borderRadius: '2px',
                flexShrink: 0
              }} />
              <div>
                <div style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '26px',
                  fontWeight: 300,
                  letterSpacing: '-0.4px',
                  color: 'var(--color-heading)',
                  fontFeatureSettings: '"ss01"',
                  lineHeight: 1.1
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'var(--color-body)',
                  fontFeatureSettings: '"ss01"',
                  marginTop: '4px'
                }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}
