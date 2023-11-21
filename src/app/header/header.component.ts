import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:any=false

  constructor(private rout:Router, private ts:TravelService) { }

  ngOnInit(): void {

    this.ts.login.subscribe((logData:any)=>{
      this.login=logData
    })

  }

  addReview(){
    if(localStorage.getItem("user")){
      this.rout.navigateByUrl("user-add-review")
    }
    else{
      alert("Login First")
      this.rout.navigateByUrl("user-login")
    }
  }

  myBookingsPage(){
    this.rout.navigateByUrl("my-bookings")
  }

  logout(){
    localStorage.removeItem("user")
    localStorage.removeItem("userEmail")
    
    this.ts.login.next(false)
    this.rout.navigateByUrl("")
  }

}
