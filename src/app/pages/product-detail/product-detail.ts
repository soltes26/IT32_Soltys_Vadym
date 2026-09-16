import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  id!: number;
  product: any;

  products = [
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 5 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.product = this.products.find(p => p.id === this.id);
    });
  }
}