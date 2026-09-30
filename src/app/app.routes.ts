import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' },
];