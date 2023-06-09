import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Products, createProduct } from 'src/common/products';
import { ProductService } from 'src/app/product.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { Categories } from 'src/common/categories';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  standalone: true,

  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgForOf,
  ],
})
export class ProductCreateComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    categoryId: [''],
    image: [''],
    description: [''],
  });
  categories: Categories[] = [
    { _id: '1', name: 'Quần áo', image: '...', products: [] },
  ];
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService,
    private apiService: ApiService
  ) {
    this.apiService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  selectedValue: string = '';

  // Xử lý sự kiện khi giá trị đã chọn thay đổi
  onSelectionChange(event: any) {
    this.selectedValue = event.value;
    console.log(this.selectedValue); // In giá trị đã chọn ra console
  }
  onHandleSubmit() {
    const product: createProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      quantity: this.productForm.value.quantity || 0,
      categoryId: this.selectedValue,
      images: [this.productForm.value.image] || [''],
      description: this.productForm.value.description || '',
    };
    console.log(product);
    this.productService.createProduct(product);
  }
}
