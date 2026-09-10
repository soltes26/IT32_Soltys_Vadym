import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products;

  newName: string = '';
  newPrice: number | null = null;
  newQuantity: number | null = null;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    if (!this.newName.trim()) {
      return;
    }

    this.productService.addProduct(
      this.newName,
      this.newPrice ?? 0,
      this.newQuantity ?? 0
    );

    this.newName = '';
    this.newPrice = null;
    this.newQuantity = null;
  }

  removeProduct(id: number): void {
    this.productService.removeProduct(id);
  }

  getStatusClass(quantity: number): string {
    return quantity > 0 ? 'in-stock' : 'out-of-stock';
  }
}