import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePackageComponent } from './single-package.component';

describe('SinglePackageComponent', () => {
  let component: SinglePackageComponent;
  let fixture: ComponentFixture<SinglePackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePackageComponent]
    });
    fixture = TestBed.createComponent(SinglePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
