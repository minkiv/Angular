import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Categories } from 'src/common/categories';

@Component({
  selector: 'app-categorymanagement',
  templateUrl: './categorymanagement.component.html',
  styleUrls: ['./categorymanagement.component.css'],
})
export class CategorymanagementComponent implements OnInit {
  displayedColumns = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<Categories>();
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe(
      (data) => {
        console.log(data);

        this.items = data;
        this.dataSource.data = this.items;
        console.log(this.items);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
