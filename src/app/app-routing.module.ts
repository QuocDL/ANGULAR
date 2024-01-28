import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HompageComponent } from './pages/hompage/hompage.component';
import { adminRoutes, productRoutes } from './routes/product.routes';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '', component: HompageComponent},
      ...productRoutes      
    ]
  },
  {
    path:'admin',
    component: AdminLayoutComponent,
    children: [
      ...adminRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
