import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HompageComponent } from './pages/hompage/hompage.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SafePipe } from './pipes/safe.pipe';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { AddFormProductComponent } from './pages/admin/add-form-product/add-form-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    AsideBarComponent,
    AdminLayoutComponent,
    HompageComponent,
    ProductListComponent,
    DetailPageComponent,
    SafePipe,
    ProductAdminComponent,
    AddFormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
