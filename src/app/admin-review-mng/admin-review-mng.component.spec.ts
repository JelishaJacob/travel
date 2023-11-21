import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewMngComponent } from './admin-review-mng.component';

describe('AdminReviewMngComponent', () => {
  let component: AdminReviewMngComponent;
  let fixture: ComponentFixture<AdminReviewMngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReviewMngComponent]
    });
    fixture = TestBed.createComponent(AdminReviewMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
