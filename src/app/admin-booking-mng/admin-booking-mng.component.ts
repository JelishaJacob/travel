import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-admin-booking-mng',
  templateUrl: './admin-booking-mng.component.html',
  styleUrls: ['./admin-booking-mng.component.css']
})
export class AdminBookingMngComponent implements OnInit {

  pbdata:any=[]
  ubdata:any=[]

  constructor(private rout:Router, private ts:TravelService) { }

  ngOnInit(): void {
    this.getpBookings()

    this.getUBookings()
  }

  getpBookings(){
    this.ts.getAllPBookingApi().subscribe({
      next:(result:any)=>{
        this.pbdata=result.message
        console.log(this.pbdata);
      }
    })
  }

  getUBookings(){
    this.ts.getAllUBookingApi().subscribe({
      next:(result:any)=>{
        this.ubdata=result.message
        console.log(this.ubdata);
      }
    })
  }

  premove(id:any){
    this.ts.deleteUserPackageApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.getpBookings()
      }
    })
  }

  uremove(id:any){
    this.ts.deleteUserChoiceApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.getUBookings()
      }
    })
  }


}
