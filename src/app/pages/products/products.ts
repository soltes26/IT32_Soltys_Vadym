import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products = [
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 5 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ];
}