import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'travelsService/travel.service';

@Component({
  selector: 'app-package-management',
  templateUrl: './package-management.component.html',
  styleUrls: ['./package-management.component.css']
})
export class PackageManagementComponent implements OnInit{

  pdata:any=[]
  id:any
  constructor(private rout:Router, private ts:TravelService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  addPackage(){
    this.rout.navigateByUrl("admin-add-package")
  }

  getAllProducts(){
    this.ts.getPackagesApi().subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        
      }
    })
  }

  editPage(id:any){
    this.rout.navigateByUrl(`admin-edit-package/${id}`)
  }

  // deletePackage
  remove(id:any){
    this.ts.deletePackageApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.getAllProducts()
      }
    })
  }


}
