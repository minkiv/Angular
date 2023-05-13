import { Component } from '@angular/core';
import { Products } from 'src/common/products';
import { User } from 'src/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'web17309';
  user: User = {
    name: 'Nguyễn thị Hiệp',
    maSV: 'PH28717',
    age: 19,
    gender: 'female',
  };
  products: Products[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 234000,
      image: 'https://i.imgur.com/ZTkt4I5.jpg',
      quantity: 34,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      name: 'Product 2',
      price: 235000,
      image: 'https://i.imgur.com/ZTkt4I5.jpg',
      quantity: 12,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      name: 'Product 3',
      price: 236000,
      image: 'https://i.imgur.com/ZTkt4I5.jpg',
      quantity: 43,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
}
