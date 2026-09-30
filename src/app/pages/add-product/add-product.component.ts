import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  submitted = false;

  model = {
    name: '',
    manufacturer: '',
    description: '',
  };

  constructor(private productService: ProductService) {}

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.productService.addItem({ ...this.model });

    form.resetForm();
    this.submitted = false;
  }
}