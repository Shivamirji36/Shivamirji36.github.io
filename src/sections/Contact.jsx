import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { staggerContainer, fadeUp } from '../utils/animations'

const CONTACTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5l7 5 7-5M3 5h14v10H3V5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Email',
    display: 'shivmirji36@icloud.com',
    href: 'mailto:shivmirji36@icloud.com'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM8 9v5M6 9v5M12 9v5M14 9c0-1.1-.9-2-2-2s-2 .9-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'LinkedIn',
    display: 'linkedin.com/in/shivanandmirji',
    href: 'https://www.linkedin.com/in/shivanandmirji'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
      </svg>
    ),
    label: 'GitHub',
    display: 'github.com/Shivamirji36',
    href: 'https://github.com/Shivamirji36'
  }
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" dark>
      <div style={{ textAlign: 'center' }}>
        <p className="section-label" style={{ color: 'var(--color-magenta)' }}>Contact</p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(30px, 5vw, 48px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: 'clamp(-0.6px, -0.02em, -0.96px)',
            color: '#ffffff',
            fontFeatureSettings: '"ss01"',
            marginBottom: '18px'
          }}
        >
          Let's build something together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '17px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            fontFeatureSettings: '"ss01"',
            marginBottom: '56px',
            maxWidth: '520px',
            margin: '0 auto 56px'
          }}
        >
          Open to full-time roles, internships, and interesting collaborations.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            maxWidth: '740px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {CONTACTS.map(c => (
            <motion.a
              key={c.label}
              variants={fadeUp}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '24px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                cursor: 'pointer'
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: 'easeOut' }
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.5)' }}>{c.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  fontFeatureSettings: '"ss01"',
                  marginBottom: '4px'
                }}>
                  {c.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  fontFeatureSettings: '"ss01"',
                  wordBreak: 'break-all'
                }}>
                  {c.display}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '64px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '12px',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.3)',
          fontFeatureSettings: '"ss01"',
          letterSpacing: '0.04em'
        }}>
          Designed & Built by Shivanand Mirji · 2025
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '12px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/Shivamirji36' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivanandmirji' },
            { label: 'Email', href: 'mailto:shivmirji36@icloud.com' }
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.3)',
                fontFeatureSettings: '"ss01"',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </SectionWrapper>
  )
}
