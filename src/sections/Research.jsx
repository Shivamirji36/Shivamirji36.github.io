import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Tag from '../components/Tag'
import { scaleIn } from '../utils/animations'

export default function Research() {
  return (
    <SectionWrapper id="research" dark>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <p className="section-label" style={{ color: 'var(--color-magenta)' }}>Publication</p>
        <h2 className="section-heading section-heading--white" style={{ marginBottom: '48px' }}>
          Research
        </h2>
      </div>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}
      >
        {/* Decorative gradient */}
        <div aria-hidden style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(249,107,238,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div aria-hidden style={{
          position: 'absolute',
          bottom: '-40px',
          left: '-40px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(ellipse at center, rgba(234,34,97,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '40px 48px',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Publication eyebrow */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              background: 'rgba(249,107,238,0.15)',
              border: '1px solid rgba(249,107,238,0.2)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 3h10M2 6h10M2 9h7M2 12h5" stroke="#f96bee" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-magenta)',
              fontFeatureSettings: '"ss01"'
            }}>
              Research Paper
            </span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 300,
            lineHeight: 1.25,
            letterSpacing: '-0.5px',
            color: '#ffffff',
            fontFeatureSettings: '"ss01"',
            marginBottom: '18px'
          }}>
            Feature Analysis and Random Forest Classification for Network Intrusion Detection
          </h3>

          <p style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.6)',
            fontFeatureSettings: '"ss01"',
            marginBottom: '24px'
          }}>
            Research on supervised ML-based anomaly detection for network IDS. Applies Random Forest to classify network intrusion patterns from traffic features — demonstrating feature importance and classification accuracy on standard benchmark datasets.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
            {['Machine Learning', 'Random Forest', 'Cybersecurity', 'Python', 'IDS'].map(t => (
              <Tag key={t} label={t} variant="dark" />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#"
              className="btn-outline-white"
              style={{ fontSize: '14px', padding: '9px 20px' }}
            >
              View Publication
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
