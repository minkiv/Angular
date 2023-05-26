import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api'; // URL của server Node.js

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<any[]>(url);
  }
  getCategories(): Observable<any[]> {
    const url = `${this.apiUrl}/categories`;
    return this.http.get<any[]>(url);
  }
  // Các phương thức khác
}
