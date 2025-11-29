export type FooterMenu = {
  id: number;
  name: string;
  link: string;
};

const rawFooterMenu: Omit<FooterMenu, 'id'>[] = [
  { name: 'Login', link: '/Login' },
  { name: 'Try it for free' , link: '/' },
];

export const footerMenu: FooterMenu[] = rawFooterMenu.map((item, index) => ({
  ...item,
  id: index + 1,
}));
