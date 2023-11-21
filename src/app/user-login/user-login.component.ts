import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(`[0-9a-z.@]+`)]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@*&%#.]+')]]
  })

  constructor(private fb: FormBuilder, private rout: Router, private ts: TravelService) { }

  ngOnInit(): void {
  }

  login() {

    if (this.userLoginForm.valid) {
      this.ts.userLoginApi(this.userLoginForm.value.email, this.userLoginForm.value.psw)
        .subscribe({
          next: (result: any) => {
            alert(result.message)
            localStorage.setItem("user", result._id)
            localStorage.setItem("userEmail", JSON.stringify(this.userLoginForm.value.email))

            this.rout.navigateByUrl("")
            // this.ts.header()
          },
          error: (result: any) => {
            alert(result.error.message)
            this.rout.navigateByUrl("")
          }
        })
    }
    else {
      alert("Please Fill The Form")
    }
  }

}
