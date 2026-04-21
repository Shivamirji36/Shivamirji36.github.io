import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function SectionWrapper({ id, children, className = '', dark = false }) {
  return (
    <section
      id={id}
      className={dark ? 'section--dark' : 'section'}
    >
      <motion.div
        className={`section-inner ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    </section>
  )
}
