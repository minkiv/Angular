import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {
    // goPlaces() {
    //   this.router.navigateByUrl('/users;display=verbose/sammy');
    // }
  }
  credentials = {
    username: '',
    password: '',
  };
  errorMessage: string = '';
  apiUrl = 'http://localhost:8080/api';
  alertMes = '';

  onSubmit() {
    if (this.credentials.username && this.credentials.password) {
      // Tạo object chứa dữ liệu cần gửi
      const data = {
        email: this.credentials.username,
        password: this.credentials.password,
      };

      // Định nghĩa các headers cho request
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      // Gửi request POST
      this.http.post<any>(`${this.apiUrl}/signin`, data, { headers }).subscribe(
        (response) => {
          // Xử lý response sau khi gửi thành công
          console.log('Login response:', response);
          this.alertMes = response.message;
          localStorage.setItem('Token', response.accessToken);
          if (response.user.role === 'admin') {
            alert('Đăng nhập thành công');
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            this.router.navigateByUrl('/home');
          }
        },
        (error) => {
          // Xử lý error nếu có
          console.error('Login error:', error);
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
        }
      );
    } else {
      this.errorMessage = 'Vui lòng điền vào trường này';
    }
  }
}
