import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products = [
    { name: 'Ноутбук ASUS', price: 25000, description: 'Ноутбук для навчання та роботи.' },
    { name: 'Мишка Logitech', price: 500, description: 'Бездротова миша.' },
    { name: 'Клавіатура', price: 800, description: 'Механічна клавіатура.' }
  ];

  onBuy(productName: string): void {
    alert(`Товар додано до кошика: ${productName}`);
  }
}