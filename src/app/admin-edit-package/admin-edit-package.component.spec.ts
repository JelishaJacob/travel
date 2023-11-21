import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPackageComponent } from './admin-edit-package.component';

describe('AdminEditPackageComponent', () => {
  let component: AdminEditPackageComponent;
  let fixture: ComponentFixture<AdminEditPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditPackageComponent]
    });
    fixture = TestBed.createComponent(AdminEditPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
