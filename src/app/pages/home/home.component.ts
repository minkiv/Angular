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
      name: 'Đầm đi bay',
      price: 234000,
      image:
        'https://i.pinimg.com/736x/25/a6/9f/25a69f3eada30b011c1e72f079364331.jpg',
      quantity: 34,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      name: 'Đầm đi lắc',
      price: 235000,
      image:
        'https://i.pinimg.com/originals/eb/4a/8c/eb4a8ccb23ea05d978ccc523604e93b5.jpg',
      quantity: 12,
      description:
        "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      name: 'Đầm đi nhảy',
      price: 236000,
      image:
        'https://i.pinimg.com/originals/b8/f5/72/b8f572469aba36623a3e2b673d58bb81.jpg',
      quantity: 43,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
}
