import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
    }, 6000)

    return () => clearTimeout(timeout)
  }, [])

  const handleEnd = () => setVisible(false)
  const handleSkip = () => setVisible(false)

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <video
            ref={videoRef}
            src="/terminal_typing.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleEnd}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              maxWidth: '900px',
              maxHeight: '100vh'
            }}
          />

          {/* Vignette overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none'
          }} />

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            onClick={handleSkip}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '4px',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'var(--font-primary)',
              fontSize: '12px',
              fontWeight: 400,
              fontFeatureSettings: '"ss01"',
              padding: '6px 12px',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
            }}
          >
            Skip ↗
          </motion.button>

          {/* Name watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '28px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-primary)',
              fontSize: '11px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFeatureSettings: '"ss01"',
              whiteSpace: 'nowrap'
            }}
          >
            Shivanand Mirji
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
