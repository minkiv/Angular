import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'details/:id', component: DetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      // , {
      //   path: 'dashboard',
      //   loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      // }, {
      //   path: 'basic',
      //   loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      // }, {
      //   path: 'notifications',
      //   loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      // }, {
      //   path: 'bootstrap-table',
      //   loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      // }, {
      //   path: 'map',
      //   loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      // }, {
      //   path: 'user',
      //   loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      // }, {
      //   path: 'simple-page',
      //   loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      // }
    ],
  },
  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  //     }
  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
