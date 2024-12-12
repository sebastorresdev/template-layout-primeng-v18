import { Routes } from "@angular/router";
import { LayoutComponent } from "./app.layout.component";

export const LAYOUT_ROUTES : Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'', loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES)},
      {path:'productos', loadChildren: () => import('../products/product.routes').then(m => m.PRODUCT_ROUTES)}

    ]
  }
]
