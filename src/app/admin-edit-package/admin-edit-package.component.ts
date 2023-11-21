import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-admin-edit-package',
  templateUrl: './admin-edit-package.component.html',
  styleUrls: ['./admin-edit-package.component.css']
})
export class AdminEditPackageComponent implements OnInit{

  pid:any=""
  pdata:any={}
  
  editPackageForm = this.fb.group({
    title: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z,'",.$@/! ]+`)]],
    place: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z, ]+')]],
    duration: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
    travellers: ['', [Validators.required, Validators.pattern('[0-9 ]+')]],
    image: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z@'"-_ :;,.#%*&$/?\]+`)]],
    rating: ['', [Validators.required, Validators.pattern('[0-9. ]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9 ]+')]],
    image1: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z@'"-_ :;,.#%*&$/?\]+`)]],
    image2: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z@'"-_ :;,.#%*&$/?\]+`)]],
    image3: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z@'"-_ :;,.#%*&$/?\]+`)]]
  })

  constructor(private ar:ActivatedRoute, private ts:TravelService, private fb:FormBuilder,private rout:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      this.pid=data['id']
      console.log(this.pid);
    })

    this.ts.getPackageApi(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata); 
      }
    })
  }

  update(){
    const path=this.editPackageForm.value
    let pdata={
      title:path.title,
      place:path.place,
      duration:path.duration,
      travellers:path.travellers,
      image:path.image,
      rating:path.rating,
      price:path.price,
      image1:path.image1,
      image2:path.image2,
      image3:path.image3
    }


    if(this.editPackageForm.valid){
      this.ts.editPackageApi(this.pid,pdata).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl('admin-packagemng')
        }
      })
    }
    else{
      alert("Please Fill The Form")
    }
  }

  back(){

  }
}
