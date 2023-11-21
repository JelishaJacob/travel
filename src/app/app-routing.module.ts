import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
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
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-home",component:AdminHomeComponent},
  { path: "admin-packagemng",component:PackageManagementComponent},
  { path: "admin-add-package",component:AdminAddPackageComponent},
  { path: "admin-edit-package/:id",component:AdminEditPackageComponent},
  { path: "singlepackage-view/:id",component:SinglePackageComponent},
  { path: "user-login",component:UserLoginComponent},
  { path: "user-register",component:UserRegisterComponent},
  { path: "user-booknow",component:BookNowComponent},
  { path: "admin-user-mng",component:AdminUserMngComponent},
  { path: "admin-booking-mng",component:AdminBookingMngComponent},
  { path: "user-add-review",component:UserReviewComponent},
  { path: "admin-reviews-mng",component:AdminReviewMngComponent},
  { path: "my-bookings",component:MyBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
