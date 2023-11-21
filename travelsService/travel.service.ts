import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  login=new BehaviorSubject(false)

  baseUrl: any = "http://localhost:5000"

  constructor(private http: HttpClient) { 
    this.header()
  }

  header(){
    if(localStorage.getItem("user")){
      this.login.next(true)
    }
  }

  // api calls

  // adminLogin
  adminLoginApi(uname: any, psw: any) {
    const body = { uname, psw }
    return this.http.post(`${this.baseUrl}/admin/login`, body)
  }

  // addPackage
  addPackageApi(body: any) {
    return this.http.post(`${this.baseUrl}/admin/add-package`, body)
  }

  getPackagesApi() {
    return this.http.get(`${this.baseUrl}/admin/packages-access`)
  }

  getPackageApi(id: any) {
    return this.http.get(`${this.baseUrl}/singleproduct-access/${id}`)
  }

  editPackageApi(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}/product-update/${id}`, bodyData)
  }

  deletePackageApi(id: any) {
    return this.http.delete(`${this.baseUrl}/package-delete/${id}`)
  }

  userRegisterApi(body: any) {
    return this.http.post(`${this.baseUrl}/user-register`, body)
  }

  userLoginApi(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-login`, body)
  }

  userBookingApi(body:any){
    return this.http.post(`${this.baseUrl}/user/add-booking`,body)
  }

  getAllUBookingApi() {
    return this.http.get(`${this.baseUrl}/admin/user-choice-booking`)
  }

  getUsersApi(){
    return this.http.get(`${this.baseUrl}/admin/users-access`)
  }

  deleteUserApi(id: any) {
    return this.http.delete(`${this.baseUrl}/users-delete/${id}`)
  }

  packageBookingApi(pid:any,bodyData:any){
    return this.http.post(`${this.baseUrl}/user/package-booking/${pid}`,bodyData)
  }

  getAllPBookingApi() {
    return this.http.get(`${this.baseUrl}/admin/pbooking-access`)
  }

  addReviewApi(uid:any,comments:any){
    const body={uid,comments}
    return this.http.post(`${this.baseUrl}/user/add-review`,body)
  }

  getReviewsApi() {
    return this.http.get(`${this.baseUrl}/user/reviews-access`)
  }
 
  deleteReviewApi(id: any) {
    return this.http.delete(`${this.baseUrl}/review-delete/${id}`)
  }

  getMyBookingsApi(email:any){
    return this.http.get(`${this.baseUrl}/user/my-bookings/${email}`)
  }

  getChoiceBookingsApi(email:any){
    return this.http.get(`${this.baseUrl}/user/choice-bookings/${email}`)
  }

  deleteUserPackageApi(id: any) {
    return this.http.delete(`${this.baseUrl}/user/package-delete/${id}`)
  }

  deleteUserChoiceApi(id: any) {
    return this.http.delete(`${this.baseUrl}/user/choice-delete/${id}`)
  }

  
}

