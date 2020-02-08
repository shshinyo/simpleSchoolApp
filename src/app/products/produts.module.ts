import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';




@NgModule({
  declarations:[
    ProductListComponent, ProductDetailComponent,
    ProductEditComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'products',component:ProductListComponent},
    {path:'products/:id',component:ProductDetailComponent},
    {path:'products/:id/edit',component:ProductEditComponent}
  ])
  ]
})
export class ProdutsModule { }
