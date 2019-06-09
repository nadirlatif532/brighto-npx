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
    title: true,
    name: 'Colors'
  },
  {
    name: 'Family',
    url: '/colors/family',
    icon: 'icon-drop'
  },
  {
    name: 'Shades',
    url: '/colors/shades',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Filters'
  },
  {
    name: 'Project',
    url: '/project',
    icon: 'icon-puzzle'
  },
  {
    name: 'Categories',
    url: '/categories',
    icon: 'icon-pencil'
  },
  {
    name: 'Surface',
    url: '/surface',
    icon: 'icon-puzzle'
  },
  {
    name: 'Finish',
    url: '/finish-type',
    icon: 'icon-puzzle'
  },
  {
    title: true,
    name: 'Master Data'
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
    name: 'Country',
    url: '/country',
    icon: 'icon-drop'
  },
  {
    name: 'City',
    url: '/city',
    icon: 'icon-drop'
  },
  {
    name: 'Dealers',
    url: '/dealers',
    icon: 'icon-puzzle',
  },
  {
    name: 'Color Trends',
    url: '/color-trends',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List',
        url: '/color-trends/list',
        icon: 'icon-cursor'
      },
      {
        name: 'Add',
        url: '/color-trends/add',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Color Pallets',
    url: '/pallets',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List',
        url: '/pallets/list',
        icon: 'icon-cursor'
      },
      {
        name: 'Add',
        url: '/pallets/add',
        icon: 'icon-cursor'
      }
    ]
  },
];
