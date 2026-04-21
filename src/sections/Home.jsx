import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../utils/animations'

export default function Home() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 40px 60px'
      }}
    >
      {/* Background blobs */}
      <div aria-hidden style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Magenta blob — bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-120px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(249,107,238,0.07) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        {/* Ruby blob — top left */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-80px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(234,34,97,0.05) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        {/* Purple blob — center */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(83,58,253,0.04) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        {/* Grain texture */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          textAlign: 'center',
          maxWidth: '720px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-purple)',
            fontFeatureSettings: '"ss01"',
            marginBottom: '20px',
            fontFamily: 'var(--font-primary)'
          }}
        >
          Software Engineer
        </motion.p>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: 'clamp(38px, 6vw, 60px)',
            fontWeight: 300,
            lineHeight: 1.04,
            letterSpacing: 'clamp(-0.8px, -0.025em, -1.6px)',
            color: 'var(--color-heading)',
            fontFeatureSettings: '"ss01"',
            fontFamily: 'var(--font-primary)',
            marginBottom: '24px'
          }}
        >
          Hi, I'm Shivanand Mirji
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 'clamp(16px, 2.2vw, 19px)',
            fontWeight: 300,
            lineHeight: 1.55,
            color: 'var(--color-body)',
            fontFeatureSettings: '"ss01"',
            fontFamily: 'var(--font-primary)',
            marginBottom: '40px',
            maxWidth: '560px',
            margin: '0 auto 40px'
          }}
        >
          Building thoughtful software — one commit at a time.
          <br />
          <span style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'var(--color-body)', opacity: 0.7 }}>
            Full-stack engineer · Belagavi, India
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            className="btn-primary"
            onClick={() => scrollTo('#projects')}
            style={{ padding: '11px 24px', fontSize: '15px' }}
          >
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a
            href="https://drive.google.com/file/d/1B-dBDprYR4cLDMuF4L9Hi_UDozxN8vBI/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ padding: '11px 24px', fontSize: '15px' }}
          >
            Download Resume
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v7M4 7l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.35
          }}
        >
          <span style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-body)'
          }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '32px',
              background: 'var(--color-border)',
              borderRadius: '1px'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
