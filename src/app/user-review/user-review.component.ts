import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit{

  uid:any=""
  data:any=[]

  userReviewForm=this.fb.group({
    // email:['', [Validators.required, Validators.pattern(`[0-9a-z.@]+`)]],
    comments:['',[Validators.required]]
  })
  
  constructor(private fb:FormBuilder, private ts:TravelService, private rout:Router){}
  
  ngOnInit(): void {
    this.uid=localStorage.getItem("user")
    console.log(this.uid);

    this.getReviews()
    
  }

  addReview(){
    if(this.userReviewForm.valid){
      if(localStorage.getItem("user")){
        this.ts.addReviewApi(this.uid,this.userReviewForm.value.comments).subscribe({
          next:(result:any)=>{
            alert(result.message)
            this.userReviewForm.reset()
            this.getReviews()
          }
        })
      }
      else{
        alert("Login First")
        this.rout.navigateByUrl("user-login")
      }
    }
    else{
      alert("Fill The Form")
    }
  }

  getReviews(){
    this.ts.getReviewsApi().subscribe({
      next:(result:any)=>{
        this.data=result.message
        console.log(this.data);
        
      }
    })
  }
}
