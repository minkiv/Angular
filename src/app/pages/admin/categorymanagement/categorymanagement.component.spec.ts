import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymanagementComponent } from './categorymanagement.component';

describe('CategorymanagementComponent', () => {
  let component: CategorymanagementComponent;
  let fixture: ComponentFixture<CategorymanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorymanagementComponent]
    });
    fixture = TestBed.createComponent(CategorymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
