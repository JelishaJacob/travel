import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-single-package',
  templateUrl: './single-package.component.html',
  styleUrls: ['./single-package.component.css']
})
export class SinglePackageComponent implements OnInit {

  pid:any=""
  pdata:any=[]
  uid:any=""

  packageBookForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z. ]+')]],
    email: ['', [Validators.required, Validators.pattern(`[0-9a-z.@]+`)]],
    phn: ['', [Validators.required, Validators.pattern('[0-9 ]+')]],
    sdate: ['', [Validators.required, Validators.pattern('[0-9-:, ]+')]],
  })

  constructor(private ar:ActivatedRoute, private ts:TravelService, private rout:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.ar.params.subscribe(data=>{
      this.pid=data['id']
      console.log(this.pid);
    })

    this.singlePackage()

  }

  singlePackage(){
    this.ts.getPackageApi(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        
      }
    })
  }

  packageBook(){
    const path = this.packageBookForm.value
    let body = {
      name: path.name,
      email: path.email,
      phn: path.phn,
      sdate: path.sdate,
    }

    if(localStorage.getItem("user")){

      if(this.packageBookForm.valid){
        this.uid=localStorage.getItem("user")
        this.ts.packageBookingApi(this.pid,body).subscribe({
          next:(result:any)=>{
            alert(result.message)
            this.packageBookForm.reset()
          }
        })
      }
      else{
        alert("Please Fill The Form")
      }

    }
    else{
      alert("Login First")
      this.rout.navigateByUrl("user-login")
    }

  }
}
