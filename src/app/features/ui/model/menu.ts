import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'PEDIDOS',
    iconName: '../../../assets/icons/list.svg',
    route: 'home',
    children: [
      {
        displayName: 'EM ABERTO',
        iconName: 'home',
        route: 'home',
      },
      {
        displayName: 'ENCERRADOS',
        iconName: 'add_box',
        route: '',
      },
    ],
  },
  {
    displayName: 'CLIENTES',
    iconName: '../../../assets/icons/user.svg',
    route: 'sale',
  },
];
