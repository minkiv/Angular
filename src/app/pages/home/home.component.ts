import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Products } from 'src/common/products';
import { User } from 'src/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items: any[] = [];
  categories: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
        // console.log(this.items);
      },
      (error) => {
        console.error(error);
      }
    );
    this.apiService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        // console.log(this.items);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
