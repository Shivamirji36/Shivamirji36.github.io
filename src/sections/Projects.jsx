import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Tag from '../components/Tag'
import { projects } from '../data/projects'
import { staggerContainer, scaleIn } from '../utils/animations'

const LOGO_MAP = {
  react:       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  spring:      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  postgresql:  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  java:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  angular:     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  mongodb:     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  javascript:  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="section-label">Projects</p>
      <h2 className="section-heading" style={{ marginBottom: '8px' }}>
        Things I've built
      </h2>
      <p style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '16px',
        fontWeight: 300,
        color: 'var(--color-body)',
        fontFeatureSettings: '"ss01"',
        marginBottom: '40px'
      }}>
        A selection of work across full-stack engineering and platform development.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}
        className="projects-grid"
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            variants={scaleIn}
            className="card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              ...(project.featured ? {
                borderColor: 'rgba(83,58,253,0.25)',
                boxShadow: '0 0 0 1px rgba(83,58,253,0.12), var(--shadow-ambient)'
              } : {})
            }}
          >
            {/* Featured badge */}
            {project.featured && (
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(83,58,253,0.1)',
                border: '1px solid rgba(83,58,253,0.2)',
                borderRadius: '20px',
                padding: '3px 10px',
                fontFamily: 'var(--font-primary)',
                fontSize: '11px',
                fontWeight: 400,
                color: 'var(--color-purple)',
                letterSpacing: '0.04em',
                fontFeatureSettings: '"ss01"'
              }}>
                Featured
              </div>
            )}

            {/* Project icon */}
            <div style={{
              width: '36px',
              height: '36px',
              background: 'rgba(83,58,253,0.08)',
              border: '1px solid rgba(83,58,253,0.12)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
              color: 'var(--color-purple)',
              flexShrink: 0
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 3h12M2 6h8M2 9h10M2 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '-0.22px',
              color: 'var(--color-heading)',
              fontFeatureSettings: '"ss01"',
              lineHeight: 1.2,
              marginBottom: '10px',
              paddingRight: project.featured ? '72px' : 0
            }}>
              {project.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'var(--color-body)',
              fontFeatureSettings: '"ss01"',
              flex: 1,
              marginBottom: '16px'
            }}>
              {project.description}
            </p>

            {/* Tech logos */}
            {project.logos && project.logos.length > 0 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                flexWrap: 'wrap'
              }}>
                {project.logos.map(logo => LOGO_MAP[logo] && (
                  <img
                    key={logo}
                    src={LOGO_MAP[logo]}
                    alt={logo}
                    title={logo}
                    width="20"
                    height="20"
                    style={{ display: 'block', flexShrink: 0 }}
                  />
                ))}
              </div>
            )}

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {project.tags.map(t => (
                <Tag key={t} label={t} variant="neutral" />
              ))}
            </div>

            {/* Footer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid var(--color-border)'
            }}>
              {project.featured && !project.github && !project.live ? (
                <span style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'var(--color-body)',
                  fontFeatureSettings: '"ss01"',
                  opacity: 0.7
                }}>
                  Deploying soon — links coming
                </span>
              ) : (
                <>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: 'var(--color-body)',
                        fontFeatureSettings: '"ss01"',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-purple)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-body)'}
                    >
                      <GitHubIcon /> View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: 'var(--color-purple)',
                        fontFeatureSettings: '"ss01"',
                        transition: 'color 0.2s'
                      }}
                    >
                      Live Demo <ExternalIcon />
                    </a>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </SectionWrapper>
  )
}
