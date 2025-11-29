export type ImageSlider = {
  id: number;
  image1: string;
  image2: string;
};
const rawImageSlider: Omit<ImageSlider, 'id'>[] = [
  {
    image1: '/assets/images/run-gum.png',
    image2: '/assets/images/run-gum-title.png',
  },
  {
    image1: '/assets/images/beard-brand.png',
    image2: '/assets/images/beard-brand-title.png',
  },
  {
    image1: '/assets/images/promix.png',
    image2: '/assets/images/promix-title.png',
  },
  {
    image1: '/assets/images/scotch.png',
    image2: '/assets/images/scotch-title.png',
  },
  {
    image1: '/assets/images/run-gum.png',
    image2: '/assets/images/run-gum-title.png',
  },
  {
    image1: '/assets/images/beard-brand.png',
    image2: '/assets/images/beard-brand-title.png',
  },
  {
    image1: '/assets/images/promix.png',
    image2: '/assets/images/promix-title.png',
  },
  {
    image1: '/assets/images/scotch.png',
    image2: '/assets/images/scotch-title.png',
  },
];
export const imageSlider: ImageSlider[] = rawImageSlider.map((item, index) => ({
  ...item,
  id: index + 1,
}));
