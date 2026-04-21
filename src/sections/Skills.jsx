import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { skills } from '../data/skills'
import { staggerContainer, fadeUp } from '../utils/animations'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <p className="section-label">Skills</p>
      <h2 className="section-heading" style={{ marginBottom: '8px' }}>
        Technologies & Tools
      </h2>
      <p style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '16px',
        fontWeight: 300,
        color: 'var(--color-body)',
        fontFeatureSettings: '"ss01"',
        marginBottom: '48px'
      }}>
        The stack I work with day to day.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: '24px',
              alignItems: 'start',
              padding: '20px 0',
              borderBottom: '1px solid var(--color-border)'
            }}
            className="skill-row"
          >
            <span style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-label)',
              fontFeatureSettings: '"ss01"',
              paddingTop: '3px'
            }}>
              {category}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {items.map(skill => (
                <span
                  key={skill}
                  className="tag tag--neutral"
                  style={{ cursor: 'default' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 480px) {
          .skill-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}
