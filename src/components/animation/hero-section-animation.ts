export const LeftVarient = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 1, stiffness: 30 },
  },
};

export const RightVarient = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: { type: 'spring', duration: 1, stiffness: 30 },
  },
};

export const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, // كل طفل يتأخر 0.6 ثانية عن اللي قبله
    },
  },
};

export const TopVarient = {
  hidden: { y: '-100vw', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 1, stiffness: 30 },
  },
};

export const BottomVarient = {
  hidden: { y: '100vw', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 1, stiffness: 80 , damping: 30 },
  },
};

export const imagerVariant = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.6,
    },
  },
};
