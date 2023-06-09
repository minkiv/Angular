import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import decode from 'jwt-decode';
import { IUser } from 'src/common/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser = {
    user: {
      _id: '1',
      name: 'Hiệp',
      email: 'hiepntph28717@fpt.edu.vn',
      role: 'member',
    },
  };
  constructor(private apiService: ApiService, private router: Router) {
    const token = localStorage.getItem('Token');
    // decode the token to get its payload
    var idUser: any;
    if (token) {
      idUser = decode(token);
    }
    console.log(idUser);
    this.apiService.getAuth(idUser).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
  logout() {
    localStorage.removeItem('Token');
    this.router.navigateByUrl('/home');
  }
}
