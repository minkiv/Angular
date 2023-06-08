import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Products } from 'src/common/products';
import { OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css'],
})
export class ProductmanagementComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'price',
    'quantity',
    'description',
    'action',
  ];
  dataSource = new MatTableDataSource<Products>();
  index: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  items: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getItems().subscribe(
      (data) => {
        this.items = data;
        this.dataSource.data = this.items;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  deleteProduct(id: string) {
    console.log(id);

    this.apiService.deleteProduct(id).subscribe(
      (data) => {
        console.log(data);
        alert('Xóa thành công');
        this.router.navigateByUrl('/admin/product');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

// const ELEMENT_DATA: Products[] = items;
