import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("admin")
    this.rout.navigateByUrl("")
  }

  packagePage(){
    this.rout.navigateByUrl("admin-packagemng")
  }

  userPage(){
    this.rout.navigateByUrl("admin-user-mng")
  }

  bookingPage(){
    this.rout.navigateByUrl("admin-booking-mng")
  }

  reviewsPage(){
    this.rout.navigateByUrl("admin-reviews-mng")
  }
}
