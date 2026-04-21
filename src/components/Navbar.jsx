import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Research',   href: '#research'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [active, setActive]       = useState('home')
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s'
        }}
      >
        <div style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 40px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: 0
            }}
          >
            <div style={{
              width: '28px',
              height: '28px',
              background: 'var(--color-purple)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <span style={{ color: '#fff', fontSize: '14px', fontWeight: 300, fontFamily: 'var(--font-primary)' }}>S</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '15px',
              fontWeight: 400,
              color: 'var(--color-heading)',
              fontFeatureSettings: '"ss01"',
              letterSpacing: '-0.1px'
            }}>
              Shivanand Mirji
            </span>
          </button>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="nav-desktop">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '13.5px',
                  fontWeight: 400,
                  fontFeatureSettings: '"ss01"',
                  color: active === link.href.slice(1) ? 'var(--color-purple)' : 'var(--color-label)',
                  borderRadius: '4px',
                  transition: 'color 0.2s, background 0.2s',
                  position: 'relative'
                }}
                onMouseEnter={e => { if (active !== link.href.slice(1)) e.currentTarget.style.color = 'var(--color-heading)' }}
                onMouseLeave={e => { if (active !== link.href.slice(1)) e.currentTarget.style.color = 'var(--color-label)' }}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '10px',
                      right: '10px',
                      height: '2px',
                      background: 'var(--color-purple)',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </button>
            ))}
            <a
              href="https://github.com/Shivamirji36"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginLeft: '12px', padding: '7px 14px', fontSize: '13.5px' }}
            >
              GitHub
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '6px 8px',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'var(--color-heading)',
                borderRadius: '1px',
                transition: 'opacity 0.2s'
              }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--color-border)',
              zIndex: 999,
              padding: '16px 20px 24px'
            }}
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 0',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '15px',
                  fontWeight: active === link.href.slice(1) ? 400 : 300,
                  color: active === link.href.slice(1) ? 'var(--color-purple)' : 'var(--color-heading)',
                  borderBottom: '1px solid var(--color-border)',
                  fontFeatureSettings: '"ss01"'
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/Shivamirji36"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', marginTop: '16px', width: '100%', justifyContent: 'center' }}
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 640px) {
          nav > div { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
