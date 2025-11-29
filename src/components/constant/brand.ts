export interface Brands {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
}

export const brands: Brands[] = [
  {
    id: 1,
    title: 'Plug-and-play with your stack',
    bgColor: 'bg-[#FDF3EA]',

    subtitle:
      'Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.',

    image: '/assets/images/brand-1.png',
  },
  {
    id: 2,
    title: 'Run campaigns on autopilot',
    bgColor: 'bg-[#E0F8F2]',
    subtitle: 'Ink profits while you sleep: Just set it and forget it..',
    image: '/assets/images/brand-2.png',
  },
  {
    id: 3,
    title: 'Real-time ROI dashboard',
    bgColor: 'bg-[#EEECFF]',
    subtitle:
      'Track performance of every postcard by customer or discount code. Your CFO will love it.',
    image: '/assets/images/brand-3.png',
  },
  {
    id: 4,
    title: 'Deliver WOW with *real* handwritten cards',
    bgColor: 'bg-[#D9F2F7]',
    subtitle:
      'Our proprietary robots use real pens and ink for an unforgettable VIP touch.',
    image: '/assets/images/brand-4.png',
  },
  {
    id: 5,
    title: 'Predictable pricing',
    bgColor: 'bg-[#FAEDED]',
    subtitle:
      'Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.',
    image: '/assets/images/brand-5.png',
  },
  {
    id: 6,
    title: 'Complimentary concierge service',
    bgColor: 'bg-[#F1F1F1]',
    subtitle:
      'DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.',
    image: '/assets/images/brand-6.png',
  },
];
