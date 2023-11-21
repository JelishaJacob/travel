import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  userBookingForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z. ]+')]],
    email: ['', [Validators.required, Validators.pattern(`[0-9a-z.@]+`)]],
    phn: ['', [Validators.required, Validators.pattern('[0-9 ]+')]],
    destination: ['', [Validators.required, Validators.pattern(`[0-9a-zA-Z.,' ]+`)]],
    duration: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z. ]+')]],
    sdate: ['', [Validators.required, Validators.pattern('[0-9-:, ]+')]],
    travellers: ['', [Validators.required, Validators.pattern('[0-9 ]+')]]
  })

  constructor(private fb: FormBuilder, private rout: Router, private ts: TravelService) { }

  ngOnInit(): void {
  }

  book() {
    const path = this.userBookingForm.value
    let body = {
      name: path.name,
      email: path.email,
      phn: path.phn,
      destination: path.destination,
      duration: path.duration,
      sdate: path.sdate,
      travellers: path.travellers
    }

    if (this.userBookingForm.valid) {
      if(localStorage.getItem("user")){
        this.ts.userBookingApi(body).subscribe({
          next: (result: any) => {
            alert(result.message)
            this.userBookingForm.reset()
          },
          error: (result: any) => {
            alert(result.error.message)
            this.userBookingForm.reset()
          }
        })
      }
      
    }
    else {
      alert("Please Fill The Form")
    }
  }

}
