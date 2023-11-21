import { Component, OnInit } from '@angular/core';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  email:any=""
  pbdata:any=[]
  ubdata:any=[]

  constructor(private ts:TravelService) { }

  ngOnInit(): void {
    this.myPackages()
    this.myChoiceBookings()
  }

  myPackages(){
    if(localStorage.getItem("user")){
      this.email = JSON.parse(localStorage.getItem("userEmail") || "")
      // console.log(this.email);
      
      this.ts.getMyBookingsApi(this.email).subscribe({
        next:(result:any)=>{
          this.pbdata=result.message
          console.log(this.pbdata);
        }
      })
    }
  }

  myChoiceBookings(){
    if(localStorage.getItem("user")){
      this.email = JSON.parse(localStorage.getItem("userEmail") || "")
      // console.log(this.email);
      
      this.ts.getChoiceBookingsApi(this.email).subscribe({
        next:(result:any)=>{
          this.ubdata=result.message
          console.log(this.ubdata);
        }
      })
    }
  }

  premove(id:any){
    this.ts.deleteUserPackageApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.myPackages()
      }
    })
  }

  uremove(id:any){
    this.ts.deleteUserChoiceApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.myChoiceBookings()
      }
    })
  }

}
