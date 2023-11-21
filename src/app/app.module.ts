import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PackageManagementComponent } from './package-management/package-management.component';
import { AdminAddPackageComponent } from './admin-add-package/admin-add-package.component';
import { AdminEditPackageComponent } from './admin-edit-package/admin-edit-package.component';
import { SinglePackageComponent } from './single-package/single-package.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BookNowComponent } from './book-now/book-now.component';
import { AdminUserMngComponent } from './admin-user-mng/admin-user-mng.component';
import { AdminBookingMngComponent } from './admin-booking-mng/admin-booking-mng.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { AdminReviewMngComponent } from './admin-review-mng/admin-review-mng.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    PackageManagementComponent,
    AdminAddPackageComponent,
    AdminEditPackageComponent,
    SinglePackageComponent,
    UserLoginComponent,
    UserRegisterComponent,
    BookNowComponent,
    AdminUserMngComponent,
    AdminBookingMngComponent,
    UserReviewComponent,
    AdminReviewMngComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
