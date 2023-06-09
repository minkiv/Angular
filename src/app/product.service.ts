import { Injectable } from '@angular/core';
import { Products, createProduct } from '../common/products';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  items: Products[] = [];
  product: Products = {
    _id: '646f84cbe7606c603dd48d7e',
    name: 'Đầm đi lắc',
    price: 235000,
    images: [
      'https://i.pinimg.com/originals/eb/4a/8c/eb4a8ccb23ea05d978ccc523604e93b5.jpg',
    ],
    quantity: 12,
    categoryId: {
      _id: '64714ed8e7606c603dd48da5',
      name: 'Quần áo',
      image: '',
      products: [],
    },
    description:
      "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
    id: 1,
  };
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getProduct(id: string): Products | undefined {
    this.apiService.getProductById(id).subscribe((data) => {
      // this.product = data;
      console.log(this.product);
      console.log(data);
    });
    return this.product;
  }
  createProduct(product: createProduct): Products | undefined {
    this.apiService.createProduct(product).subscribe((data) => {
      // this.product = this.items.find((product) => product._id === id);
      alert(data.message);
      console.log(data);
      this.router.navigateByUrl('/admin/product');
    });
    return this.product;
  }
  updateProduct(product: createProduct, id: string): Products | undefined {
    this.apiService.updateProduct(product, id).subscribe((data) => {
      // this.product = this.items.find((product) => product._id === id);
      alert(data.message);
      console.log(data);
      this.router.navigateByUrl('/admin/product');
    });
    return this.product;
  }
}
