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
import { CardComponent } from './pages/card/card.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductmanagementComponent } from './pages/admin/productmanagement/productmanagement.component';
import { CategorymanagementComponent } from './pages/admin/categorymanagement/categorymanagement.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';

export const ROUTES: Routes = [
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
      { path: 'card', component: CardComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [RoleGuardService],
    data: {
      expectedRole: 'admin',
    },
    children: [
      {
        path: 'admin',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: ProductmanagementComponent,
      },
      {
        path: 'category',
        component: CategorymanagementComponent,
      },
      {
        path: 'product/add',
        component: ProductCreateComponent,
      },
      {
        path: 'product/:id/update',
        component: ProductUpdateComponent,
      },
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
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: ProfileComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  // providers: [AuthGuardService, RoleGuardService],
})
export class AppRoutingModule {}
