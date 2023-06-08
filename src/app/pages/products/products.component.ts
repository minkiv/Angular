import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  items: any[] = [];
  categories: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
      },
      (error) => {
        console.error(error);
      }
    );
    this.apiService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getAllProducts() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
  sortProductsByPrice() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => b.price - a.price);
    });
  }
  sortProductsByPriceAsc() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => a.price - b.price);
    });
  }
}
