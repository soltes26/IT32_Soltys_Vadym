import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 4 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ]);

  getProducts() {
    return this.products;
  }

  addProduct(name: string, price: number, quantity: number): void {
    const newProduct: Product = {
      id: this.products().length > 0
        ? Math.max(...this.products().map(p => p.id)) + 1
        : 1,
      name,
      price,
      quantity
    };

    this.products.update(current => [...current, newProduct]);
  }

  removeProduct(id: number): void {
    this.products.update(current => current.filter(p => p.id !== id));
  }
}