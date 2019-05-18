interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Color Family',
    url: '/colors/family',
    icon: 'icon-drop'
  },
  {
    name: 'Shades',
    url: '/colors/shades',
    icon: 'icon-drop'
  },
  {
    name: 'Country',
    url: '/country',
    icon: 'icon-drop'
  },
  {
    name: 'Categories',
    url: '/categories',
    icon: 'icon-pencil'
  },
  {
    name: 'Products',
    url: '/products',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List',
        url: '/products/list',
        icon: 'icon-cursor'
      },
      {
        name: 'Add',
        url: '/products/add',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Surface',
    url: '/surface',
    icon: 'icon-puzzle'
  },
  {
    name: 'Project',
    url: '/project',
    icon: 'icon-puzzle'
  },
  {
    name: 'Finish Type',
    url: '/finish-type',
    icon: 'icon-puzzle'
  },
  {
    divider: true
  }
];
