import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getItems();
  }
}