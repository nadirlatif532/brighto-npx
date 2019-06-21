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
    icon: 'cui-brush'
  },
  {
    name: 'Shades',
    url: '/colors/shades',
    icon: 'cui-brush'
  },
  {
    title: true,
    name: 'Filters'
  },
  {
    name: 'Project',
    url: '/project',
    icon: 'cui-settings'
  },
  {
    name: 'Categories',
    url: '/categories',
    icon: 'cui-settings'
  },
  {
    name: 'Surface',
    url: '/surface',
    icon: 'cui-settings'
  },
  {
    name: 'Finish',
    url: '/finish-type',
    icon: 'cui-settings'
  },
  {
    title: true,
    name: 'Master Data'
  },
  {
    name: 'Products',
    url: '/products',
    icon: 'cui-globe',
    children: [
      {
        name: 'List',
        url: '/products/list',
        icon: 'cui-cursor'
      },
      {
        name: 'Add',
        url: '/products/add',
        icon: 'cui-cursor'
      }
    ]
  },
  {
    name: 'Country',
    url: '/country',
    icon: 'cui-globe'
  },
  {
    name: 'City',
    url: '/city',
    icon: 'cui-globe'
  },
  {
    name: 'Dealers',
    url: '/dealers',
    icon: 'cui-globe',
  },
  {
    name: 'Orders',
    url: '/orders',
    icon: 'cui-globe',
  },
  {
    name: 'Color Trends',
    url: '/color-trends',
    icon: 'cui-globe',
    children: [
      {
        name: 'List',
        url: '/color-trends/list',
        icon: 'cui-cursor'
      },
      {
        name: 'Add',
        url: '/color-trends/add',
        icon: 'cui-cursor'
      }
    ]
  },
  {
    name: 'Color Palettes',
    url: '/pallets/list',
    icon: 'cui-globe'
  },
  {
    name: 'Luxury finishing',
    url: '/luxury-finishing',
    icon: 'cui-globe',
    children: [
      {
        name: 'List',
        url: '/luxury-finishing/list',
        icon: 'cui-cursor'
      },
      {
        name: 'Add',
        url: '/luxury-finishing/add',
        icon: 'cui-cursor'
      }
    ]
  }
];
