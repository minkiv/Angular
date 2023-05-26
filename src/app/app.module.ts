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
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
