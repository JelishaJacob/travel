import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  pswCheck: any = false

  userRegisterForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z. ]+')]],
    email: ['', [Validators.required, Validators.pattern(`[0-9a-z.@]+`)]],
    phn: ['', [Validators.required, Validators.pattern('[0-9 ]+')]],
    address: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z.,'@() ]+`)]],
    state: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    city: ['', [Validators.required, Validators.pattern('[a-zA-Z, ]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@*&%#.]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@*&%#.]+')]]
  })

  constructor(private fb: FormBuilder, private rout: Router, private ts: TravelService) { }

  ngOnInit(): void {
  }

  register() {
    const path = this.userRegisterForm.value
    let body = {
      uname: path.uname,
      email: path.email,
      phn: path.phn,
      address: path.address,
      state: path.state,
      city: path.city,
      psw: path.psw,
      cpsw: path.cpsw
    }

    if (this.userRegisterForm.valid) {
      if (body.psw == body.cpsw) {
        this.pswCheck = false

        this.ts.userRegisterApi(body).subscribe({
          next:(result:any)=>{
            alert(result.message)
            this.rout.navigateByUrl("user-login")
          },
          error:(result:any)=>{
            alert(result.error.message)
          }
        })
      }

      else {
        this.pswCheck = true
      }
    }

    else {
      alert("Please Fill The Form")
    }
  }
}
