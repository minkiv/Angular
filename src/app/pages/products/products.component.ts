import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Products } from 'src/common/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  items: any[] = [];
  categories: any[] = [];
  selectedValue: any = '';
  pageSize: number = 12; // Số phần tử trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  paginationId: string = 'pagination'; // ID của thanh phân trang
  count: number = 0;
  tableSizes: any = [3, 6, 9, 12];

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  constructor(private apiService: ApiService) {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.apiService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getAllProducts() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
  sortProductsByPrice() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => a.price - b.price);
    });
  }
  sortProductsByPriceAsc() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => b.price - a.price);
    });
  }
  sortProductsByNewest() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.sort((a, b) => b.createAt - a.createAt);
    });
  }
  getProByCate(id: string) {
    this.apiService.getCategoryById(id).subscribe((data) => {
      this.items = data.products;
    });
  }
  selectedCategory: string = '';
  getProByCat(event: any) {
    this.selectedCategory = event;
    this.apiService.getCategoryById(this.selectedCategory).subscribe((data) => {
      this.items = data.products;
    });
  }
  searchTerm: any;
  searchResults: Products[] = [];
  searchProducts(searchTerm: any) {
    // Xóa kết quả tìm kiếm trước đó
    this.searchResults = [];

    // Chuyển đổi searchTerm sang chữ thường để so sánh không phân biệt chữ hoa chữ thường
    searchTerm = searchTerm.toLowerCase();

    // Lặp qua danh sách sản phẩm và tìm kiếm theo từ khóa
    for (const product of this.items) {
      // Chuyển đổi tên sản phẩm sang chữ thường để so sánh
      const productName = product.name.toLowerCase();
      const productPrice = product.price;
      const category = product.categoryId.name.toLowerCase();
      // Kiểm tra xem sản phẩm có chứa từ khóa tìm kiếm hay không
      if (
        productName.includes(searchTerm) ||
        productPrice == searchTerm ||
        category.includes(searchTerm)
      ) {
        // Nếu có, thêm sản phẩm vào kết quả tìm kiếm
        this.searchResults.push(product);
      }
    }
    this.items = this.searchResults;
    console.log(this.searchResults);
  }
}
