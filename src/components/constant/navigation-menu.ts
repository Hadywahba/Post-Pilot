export type NavigationMenu = {
    id: number;
    name: string;
    link: string;
    image?: string;
};

const rawNavigationMenu: Omit<NavigationMenu, 'id'>[] = [
    {
        name: 'Resources',
        link: '/Resources',
    },
    {
        name: 'Success stories',
        link: '/Success-stories',
    },
    {
        name: 'Company',
        link: '/Company',
    },
    {
        name: 'Pricing',
        link: '/Pricing',
    },
    { name: 'Login', 
        image: '', 
        link: '/Login'
     },
    { name: 'Create free account'
        , image: '', 
        link: '/logout' 
    },
];

export const navigationMenu: NavigationMenu[] = rawNavigationMenu.map(
    (item, index) => ({
        ...item,
        id: index + 1,
    }),
);
