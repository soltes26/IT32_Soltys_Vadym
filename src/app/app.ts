import { Component } from '@angular/core';
import { Header } from './header/header';
import { Products } from './products/products';
import { AddProduct } from './add-product/add-product';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Products, AddProduct, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  shopName = 'Мій інтернет-магазин';
}