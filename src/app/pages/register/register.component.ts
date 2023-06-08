import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private router: Router, private http: HttpClient) {}
  errorMessage: string = '';
  apiUrl = 'http://localhost:8080/api';
  alert = '';
  credentials = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  onSubmit() {
    if (this.credentials.username && this.credentials.password) {
      // Tạo object chứa dữ liệu cần gửi
      const data = {
        name: this.credentials.username,
        email: this.credentials.email,
        password: this.credentials.password,
        confirmPassword: this.credentials.confirmPassword,
      };

      // Định nghĩa các headers cho request
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      // Gửi request POST
      this.http.post<any>(`${this.apiUrl}/signup`, data, { headers }).subscribe(
        (response) => {
          // Xử lý response sau khi gửi thành công
          console.log('Login response:', response);
          this.alert = response.message;
          localStorage.setItem('Token', response.accessToken);
          alert('Đăng Ký thành công');
          this.router.navigateByUrl('/login');
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
