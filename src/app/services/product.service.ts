import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Ноутбук', manufacturer: 'Lenovo', description: 'Ноутбук для роботи та навчання' },
    { id: 2, name: 'Смартфон', manufacturer: 'Samsung', description: 'Смартфон з якісною камерою та екраном' },
    { id: 3, name: 'Навушники', manufacturer: 'Sony', description: 'Бездротові навушники з шумозаглушенням' },
  ];

  getItems(): Product[] {
    return this.products;
  }

  getItemById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addItem(item: Omit<Product, 'id'>): void {
    const lastId = this.products.length > 0
      ? Math.max(...this.products.map(p => p.id))
      : 0;

    this.products.push({ id: lastId + 1, ...item });
  }
}