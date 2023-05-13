import { Component } from '@angular/core';
import { User } from 'src/common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web17309';
  user: User = {
    name: 'Nguyễn thị Hiệp',
    maSV: 'PH28717',
    age: 19,
    gender: 'female',
  };
}
