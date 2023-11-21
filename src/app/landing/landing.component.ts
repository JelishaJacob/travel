import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  pdata: any = []

  constructor(private ts: TravelService, private rout: Router) { }

  ngOnInit(): void {

    this.ts.getPackagesApi().subscribe({
      next: (result: any) => {
        this.pdata = result.message
        console.log(this.pdata);
      }
    })

  }

  bookNow(){
    if(localStorage.getItem("user")){
      this.rout.navigateByUrl("user-booknow")
    }
    else{
      alert("Login First")
      this.rout.navigateByUrl("user-login")
    }
  }



}
