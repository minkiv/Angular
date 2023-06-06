import { NgModule } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './pages/card/card.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductmanagementComponent } from './pages/admin/productmanagement/productmanagement.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CategorymanagementComponent } from './pages/admin/categorymanagement/categorymanagement.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    ContactComponent,
    ClientLayoutComponent,
    ProductsComponent,
    CardComponent,
    AdminComponent,
    ProductmanagementComponent,
    DashboardComponent,
    CategorymanagementComponent,
    ProfileComponent,
    // ProductUpdateComponent,
    // ProductCreateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    // JwtModule.forRoot({
    //   // Cung cấp các tùy chọn cho JWT
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory:  AuthService,
    //     deps: [], // Các dependency khác nếu cần
    //   },
    // }),
  ],
  providers: [
    // AuthGuardService,
    // RoleGuardService,
    // AuthService,
    // JwtHelperService,
  ],

  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
