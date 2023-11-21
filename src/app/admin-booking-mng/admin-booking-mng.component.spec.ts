import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookingMngComponent } from './admin-booking-mng.component';

describe('AdminBookingMngComponent', () => {
  let component: AdminBookingMngComponent;
  let fixture: ComponentFixture<AdminBookingMngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookingMngComponent]
    });
    fixture = TestBed.createComponent(AdminBookingMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
