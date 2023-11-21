import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-admin-add-package',
  templateUrl: './admin-add-package.component.html',
  styleUrls: ['./admin-add-package.component.css']
})
export class AdminAddPackageComponent implements OnInit {

  addPackageForm = this.fb.group({
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

  constructor(private fb: FormBuilder, private rout: Router, private ts: TravelService) { }

  ngOnInit(): void {
  }

  addPackage() {
    const path = this.addPackageForm.value
    let body = {
      title: path.title,
      place: path.place,
      duration: path.duration,
      travellers: path.travellers,
      image: path.image,
      rating: path.rating,
      price: path.price,
      image1: path.image1,
      image2: path.image2,
      image3: path.image3
    }

    if (this.addPackageForm.valid) {
      this.ts.addPackageApi(body).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.addPackageForm.reset()
        }
      })
    }
    else {
      alert("Please Fill The Form")
    }
  }

  back(){
    this.rout.navigateByUrl("admin-packagemng")
  }
}
