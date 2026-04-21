export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export const staggerFast = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  }
}

export const slideInLeft = {
  hidden:  { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const slideInRight = {
  hidden:  { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }
  }
}
