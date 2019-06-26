import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'colors',
        loadChildren: './views/colors/colors.module#ColorsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'country',
        loadChildren: './views/countries/countries.module#CountriesModule'
      },
      {
        path: 'categories',
        loadChildren: './views/category/category.module#CategoryModule'
      },
      {
        path: 'products',
        loadChildren: './views/products/products.module#ProductsModule'
      },
      {
        path: 'surface',
        loadChildren: './views/surfaces/surfaces.module#SurfacesModule'
      },
      {
        path: 'project',
        loadChildren: './views/project/project.module#ProjectModule'
      },
      {
        path: 'finish-type',
        loadChildren: './views/finishtype/finishtype.module#FinishtypeModule'
      },
      {
        path: 'shades-filter',
        loadChildren: './views/shades-filter/shades-filter.module#ShadesFilterModule'
      },
      {
        path: 'color-trends',
        loadChildren: './views/color-trends/color-trends.module#ColorTrendsModule'
      },
      {
        path: 'pallets',
        loadChildren: './views/pallets/pallets.module#PalletsModule'
      },
      {
        path: 'country',
        loadChildren: './views/countries/countries.module#CountriesModule'
      },
      {
        path: 'city',
        loadChildren: './views/cities/cities.module#CitiesModule'
      },
      {
        path: 'dealers',
        loadChildren: './views/dealers/dealers.module#DealersModule'
      },
      {
        path: 'orders',
        loadChildren: './views/orders/orders.module#OrdersModule'
      },
      {
        path: 'luxury-finishing',
        loadChildren: './views/luxury-finishing/luxury-finishing.module#LuxuryFinishingModule'
      },
      {
        path: 'user-settings',
        loadChildren: './views/user-settings/user-settings.module#UserSettingsModule'
      },
      {
        path: 'user',
        loadChildren: './views/user/user.module#UserModule'
      }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
