// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { ApiService } from '../api.service';
import decode from 'jwt-decode';
// @Injectable()
// export class RoleGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     // this will be passed from the route config
//     // on the data property
//     const expectedRole = route.data['expectedRole'];
//     const token = localStorage.getItem('Token');
//     // decode the token to get its payload
//     const tokenPayload = decode(token as string) as { role: string };
//     console.log(tokenPayload);

//     if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
//       console.log(tokenPayload.role);

//       this.router.navigate(['login']);
//       return false;
//     }
//     console.log(tokenPayload.role);
//     return true;
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private apiService: ApiService
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    //lay role duoc truong tai route
    const role = route.data['expectedRole'];
    const token = localStorage.getItem('Token');
    let permit = false;
    // decode the token to get its payload
    var idUser: any;
    if (token) {
      idUser = decode(token);
    } else {
      alert('Bạn chưa đăng nhập');
      this.router.navigate(['login']);
      return false;
    }
    console.log(!token ? true : false);
    this.apiService.getAuth(idUser).subscribe((data) => {
      console.log(this.auth.isAuthenticated());
      if (!token || data.user.role !== role) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    });
    return true;
  }
}
