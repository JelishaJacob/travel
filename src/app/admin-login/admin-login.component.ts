import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm = this.fb.group({
    auname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    apsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@*&%#.]+')]]
  })

  constructor(private rout: Router, private fb: FormBuilder,private ts:TravelService) { }

  ngOnInit(): void {
  }

  adminlogin() {

    var uname = this.adminLoginForm.value.auname
    var psw = this.adminLoginForm.value.apsw

    if (this.adminLoginForm.valid) {
      this.ts.adminLoginApi(uname,psw).subscribe({
        next:(result:any)=>{
          alert(result.message)
          localStorage.setItem("admin", result._id)
          this.rout.navigateByUrl("admin-home")
        },
        error:(result:any)=>{
          alert(result.error.message)
        }
      })
    }
    else{
      alert("Please Provide Login Details")
    }
  }

}
