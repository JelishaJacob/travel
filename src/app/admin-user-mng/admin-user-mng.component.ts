import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-admin-user-mng',
  templateUrl: './admin-user-mng.component.html',
  styleUrls: ['./admin-user-mng.component.css']
})
export class AdminUserMngComponent implements OnInit {

  udata:any=[]

  constructor(private rout:Router, private ts:TravelService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.ts.getUsersApi().subscribe({
      next:(result:any)=>{
        this.udata=result.message
        console.log(this.udata);
        
      }
    })
  }

  // delete User
  remove(id:any){
    this.ts.deleteUserApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.getAllUsers()
      }
    })
  }

  // bookings(id:any){
  //   this.rout.navigateByUrl(`admin-edit-package/${id}`)
  // }

}
