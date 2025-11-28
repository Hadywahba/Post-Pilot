export type UserMenu = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const rawUserMenuItems: Omit<UserMenu, 'id'>[] = [
  { name: 'profile', image: '', link: '/profile' },
  { name: 'logout', image: '', link: '/logout' },
];

export const userMenu: UserMenu[] = rawUserMenuItems.map((item, index) => ({
  ...item,
  id: index + 1,
}));
