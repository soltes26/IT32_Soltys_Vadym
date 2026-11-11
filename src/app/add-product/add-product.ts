import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface NewProduct {
  name: string;
  manufacturer: string;
  description: string;
}

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  newItem: NewProduct = {
    name: '',
    manufacturer: '',
    description: ''
  };

  items: NewProduct[] = [];

  submitted = false;

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.items.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}