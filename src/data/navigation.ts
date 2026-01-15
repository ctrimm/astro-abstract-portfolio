import { getPath } from '@/utils/paths';

export const navigation = [
  {
    name: 'Home',
    href: getPath('/'),
  },
  {
    name: 'Work',
    href: getPath('/work/'),
  },
  {
    name: 'About',
    href: getPath('/about/'),
  },
  {
    name: 'Contact',
    href: getPath('/contact/'),
  },
];
