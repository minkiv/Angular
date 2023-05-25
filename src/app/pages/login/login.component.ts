import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {
    // goPlaces() {
    //   this.router.navigateByUrl('/users;display=verbose/sammy');
    // }
  }
  credentials = {
    username: '',
    password: '',
  };
  errorMessage: string = '';
  onSubmit() {
    if (this.credentials.username && this.credentials.password) {
      // Thực thi các hành động sau khi submit hợp lệ
      console.log('Login submitted:', this.credentials);
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác
      this.errorMessage = 'Vui lòng điền vào trường này';
    }
    // Goi API
  }
}
