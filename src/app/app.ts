import { Component } from '@angular/core';
import { Header } from './header/header';
import { Products } from './products/products';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Products, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  shopName = 'Мій інтернет-магазин';
}