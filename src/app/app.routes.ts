import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'product/:id', component: ProductDetail }
];