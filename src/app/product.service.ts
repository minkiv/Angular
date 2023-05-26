import { Injectable } from '@angular/core';
import { Products } from '../common/products';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  items: any[] = [];
  product = {
    images: Array(0),
    _id: '646f84cbe7606c603dd48d7e',
    name: 'Đầm đi lắc',
    price: 235000,
    image:
      'https://i.pinimg.com/originals/eb/4a/8c/eb4a8ccb23ea05d978ccc523604e93b5.jpg',
    quantity: 12,
    description:
      "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
    id: 1,
  };
  constructor(private apiService: ApiService) {}

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
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.product = this.items.find((product) => product._id === id);
      console.log(this.product);
    });
    return this.product;
  }
}
