export const pulse = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0, rotate: 360 },
  exit: { opacity: 0, x: '-100vw' },
  transition: {
    delay: 0.1,
    duration: 0.3,
    type: 'spring',
    stiffness: 100,
    damping: 10,
    bounce: 0.6,
    // repeat: Infinity,
  },
};
