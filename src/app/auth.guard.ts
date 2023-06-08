// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './services/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     // Kiểm tra logic phân quyền tại đây
//     if (this.authService.isLoggedInF()) {
//       // Nếu người dùng đã đăng nhập, cho phép truy cập vào route
//       return true;
//     } else {
//       // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
//       return this.router.navigate(['/login']);
//     }
//   }
// }
// src/app/auth/auth-guard.service.ts
// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './services/auth.service';
// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(): boolean {
//     if (!this.auth.isAuthenticated()) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }
