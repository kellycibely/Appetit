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
    route: '',
    children: [
      {
        displayName: 'Listar Colaboradores',
        iconName: 'list',
        route: '',
      },
      {
        displayName: 'Adicionar Colaboradores',
        iconName: 'add_box',
        route: '',
      },
    ],
  },
];
