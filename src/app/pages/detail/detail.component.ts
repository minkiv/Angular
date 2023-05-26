import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../../common/products';
import { ProductService } from '../../product.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  product: Products | undefined;
  items: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const productId = String(this.route.snapshot.paramMap.get('id'));
    console.log(productId);
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.product = this.items.find((product) => product._id === productId);
      console.log(this.product);
    });
    // this.product = this.productService.getProduct(productId);
  }
}
