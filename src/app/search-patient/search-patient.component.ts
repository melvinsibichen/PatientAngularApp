import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api:ApiService, private route:Router){}
  name=""
  searchData:any = []
  readValue = ()=>{
    let data = {"name": this.name}
    console.log(data)
    this.api.searchData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length == 0) {
          alert("Invalid Employee Code")
        } else {
          this.searchData = response
        }
      }
    )
  }
  deleteBtnClick = (id:any)=>{
    let data:any = {"id":id}
    this.api.deleteData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Employee Deleted")
          this.route.navigate(["/view"])

        } else {
          alert("Error in deletion")
        }
      }
    )
  }
}