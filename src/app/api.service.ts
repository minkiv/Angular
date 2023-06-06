import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products, createProduct } from 'src/common/products';
import { Categories } from 'src/common/categories';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api'; // URL của server Node.js
  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('Token');
    console.log(token);

    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('authorization', token);
      console.log(headers);
    }
    console.log(headers);

    return headers;
  }
  getItems(): Observable<any[]> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<any[]>(url);
  }
  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/products/${id}`;
    return this.http.get<Products>(url);
  }
  createProduct(product: createProduct): Observable<any> {
    const url = `${this.apiUrl}/products`;
    const headers = this.getHeaders();
    return this.http.post<Products>(url, product, { headers });
  }
  updateProduct(product: createProduct, id: string): Observable<any> {
    const url = `${this.apiUrl}/products/${id}`;
    const headers = this.getHeaders();
    return this.http.put<Products>(url, product, { headers });
  }
  deleteProduct(id: string): Observable<any[]> {
    const url = `${this.apiUrl}/products/${id}`;
    const headers = this.getHeaders();
    return this.http.delete<any[]>(url, { headers });
  }
  //categories
  getCategories(): Observable<any[]> {
    const url = `${this.apiUrl}/categories`;
    return this.http.get<any[]>(url);
  }
  getCategoryById(id: string): Observable<any[]> {
    const url = `${this.apiUrl}/categories/${id}`;
    return this.http.get<any[]>(url);
  }
  createCategory(category: Categories): Observable<Categories> {
    const url = `${this.apiUrl}/categories`;
    return this.http.post<Categories>(url, category);
  }
  updateCategory(category: Categories): Observable<Categories> {
    const url = `${this.apiUrl}/categories/${category._id}`;
    return this.http.put<Categories>(url, category);
  }
  deleteCategory(id: string): Observable<Categories> {
    const url = `${this.apiUrl}/categories/${id}`;
    return this.http.delete<Categories>(url);
  }
}
