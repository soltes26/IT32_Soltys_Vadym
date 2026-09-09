import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [
    { name: 'Ноутбук', price: 32000, quantity: 5 },
    { name: 'Мишка', price: 900, quantity: 0 },
    { name: 'Клавіатура', price: 1800, quantity: 7 }
  ];

  newName: string = '';
  newPrice: number | null = null;
  newQuantity: number | null = null;

  addProduct(): void {
    if (!this.newName.trim()) {
      return;
    }

    this.products.push({
      name: this.newName,
      price: this.newPrice ?? 0,
      quantity: this.newQuantity ?? 0
    });

    this.newName = '';
    this.newPrice = null;
    this.newQuantity = null;
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }

  getStatusClass(product: Product): string {
    return product.quantity > 0 ? 'in-stock' : 'out-of-stock';
  }
}