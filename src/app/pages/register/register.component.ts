import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials = {
    username: '',
    email: '',
    password: '',
  };
  onSubmit() {
    console.log('Register submitted:', this.credentials);
    // Goi API
  }
}
