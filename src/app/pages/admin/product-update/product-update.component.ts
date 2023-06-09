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
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
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
export class ProductUpdateComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    categoryId: [''],
    image: [''],
    description: [''],
  });
  product!: Products;
  categories: Categories[] = [
    { _id: '1', name: 'Quần áo', image: '...', products: [] },
  ];
  selectedValue: string = '';
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.apiService.getProductById(id).subscribe(
        ({ data }) => {
          console.log(data);
          this.product = data;
          this.selectedValue = data.categoryId._id;
          this.productForm.patchValue({
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            categoryId: data.categoryId,
            description: data.description,
          });
        },
        (error) => console.log(error.message)
      );
    });
    this.apiService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

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
    this.productService.updateProduct(
      product,
      String(this.route.snapshot.paramMap.get('id'))
    );
  }
}
