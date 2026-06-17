export const colors = {
  primary: '#6effc0',
  primaryContainer: '#00e5a0',
  onPrimary: '#003824',
  background: '#0d1511',
  surface: '#0d1511',
  surfaceContainer: '#19211d',
  surfaceContainerLow: '#151d19',
  surfaceContainerLowest: '#08100c',
  surfaceContainerHigh: '#232c27',
  surfaceContainerHighest: '#2e3731',
  onSurface: '#dbe5dd',
  onSurfaceVariant: '#bacbbf',
  outlineVariant: '#3b4a41',
  outline: '#84958a',
  secondary: '#b7ccbc',
  secondaryContainer: '#394b3f',
}

export const transitions = {
  default: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
}

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  },
}
