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
    name: 'Luxury Shades',
    url: '/luxury-shades',
    icon: 'cui-globe',
    children: [
      {
        name: 'List',
        url: '/luxury-shades/list',
        icon: 'cui-cursor'
      },
      {
        name: 'Add',
        url: '/luxury-shades/add',
        icon: 'cui-cursor'
      }
    ]
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
    name: 'Shades',
    url: '/shades-filter',
    icon: 'cui-settings'
  },
  {
    name: 'Packaging',
    url: '/packaging',
    icon: 'cui-settings'
  },
  {
    title: true,
    name: 'Products'
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
    name: 'Luxury Finishing',
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
  },
  {
    title: true,
    name: 'Orders'
  },
  {
    name: 'Orders',
    url: '/orders',
    icon: 'cui-globe',
  },
  {
    title: true,
    name: 'Areas'
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
    title: true,
    name: 'Users'
  },
  {
    name: 'Dealers',
    url: '/dealers',
    icon: 'cui-globe',
  },
  {
    name: 'Users',
    url: '/user',
    icon: 'cui-globe',
    children: [
      {
        name: 'List',
        url: '/user/list',
        icon: 'cui-cursor'
      },
      {
        name: 'Add',
        url: '/user/add',
        icon: 'cui-cursor'
      }
    ]
  }
];
