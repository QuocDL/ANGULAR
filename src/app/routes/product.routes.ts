import { AddFormProductComponent } from "../pages/admin/add-form-product/add-form-product.component"
import { ProductAdminComponent } from "../pages/admin/product-admin/product-admin.component"
import { DetailPageComponent } from "../pages/detail-page/detail-page.component"
import { ProductListComponent } from "../pages/product-list/product-list.component"

export const productRoutes = [
    { path: "products", component: ProductListComponent},
    { path: "products/:id", component: DetailPageComponent,},
    
]
export const adminRoutes = [
    { path: "product", component: ProductAdminComponent },
    { path: "product/addproduct", component: AddFormProductComponent },
    // { path: "product/add", component: ProductFormComponent },
    // { path: "product/:id/edit", component: ProductFormComponent }
]