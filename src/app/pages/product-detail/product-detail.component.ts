import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  id = 0;
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.product = this.productService.getItemById(this.id);
    });
  }
}