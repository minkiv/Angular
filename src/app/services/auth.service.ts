// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private isLoggedIn = false;
//   constructor(private http: HttpClient) {}

//   isLoggedInF() {
//     // Trả về trạng thái đăng nhập hiện tại
//     const checkToken = localStorage.getItem('Token');
//     console.log(checkToken);
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + checkToken,
//       }),
//     };
//     this.http
//       .post('http://localhost:8080/api/checkAuth', null, httpOptions)
//       .subscribe(
//         (response: any) => {
//           // Xử lý kết quả thành công
//           console.log(response.role);
//           // alert();
//           if (response.role === 'admin') {
//             // alert('Welcome Admin');
//             this.isLoggedIn = true;
//             this.islogged();
//           }
//         },
//         (error) => {
//           // Xử lý lỗi
//           console.error('Error:', error);
//           alert(error.error.message);
//         }
//       );

//     return this.isLoggedIn;
//   }
//   islogged() {
//     console.log(this.isLoggedIn);

//     return this.isLoggedIn;
//   }
// }

import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  permit = true;
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('Token');
    // Check whether the token is expired and return
    // true or false
    console.log(token);

    return !token ? false : true;
  }
}

// export class AuthService {
//   url='http://127.0.0.1:3000/auth/';
//   tocken:string=null;
//   constructor(private http:HttpClient) {}
//   setTocken(tocken:string){
//   this.tocken=tocken;
//   }
//   getTocken(){
//   return this.tocken;
//   }
//   signUp(email:string,pass:string){
//   return this.http.post(this.url+'register',
//   {
//   "email": email,
//   "password": pass,
//   "typeUser":0
//   }
//   );
//   }
//   signIn(email:string,pass:string){
//   return this.http.post(this.url+'login',
//   {
//   "email": email,
//   "password": pass,
//   "typeUser":0
//   }
//   );
//   }
//  }
