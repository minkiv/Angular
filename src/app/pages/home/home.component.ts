import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Products } from 'src/common/products';
import { User } from 'src/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
}
