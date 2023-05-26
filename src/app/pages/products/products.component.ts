import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  sortProductsByPrice() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => b.price - a.price);
      console.log(this.items);
    });
  }
  sortProductsByPriceAsc() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => a.price - b.price);
      console.log(this.items);
    });
  }
}
