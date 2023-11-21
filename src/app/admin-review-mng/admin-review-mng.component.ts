import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-admin-review-mng',
  templateUrl: './admin-review-mng.component.html',
  styleUrls: ['./admin-review-mng.component.css']
})
export class AdminReviewMngComponent implements OnInit {

  data:any=[]

  constructor(private rout:Router, private ts:TravelService) { }

  ngOnInit(): void {
    this.getReviews()
  }

  getReviews(){
    this.ts.getReviewsApi().subscribe({
      next:(result:any)=>{
        this.data=result.message
        console.log(this.data);
      }
    })
  }

  remove(id:any){
    this.ts.deleteReviewApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.getReviews()
      }
    })
  }
}
