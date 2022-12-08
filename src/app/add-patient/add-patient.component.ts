import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  constructor(private api: ApiService, private route: Router) { }
  name = ""
  image = ""
  address = ""
  phone = ""
  dateofappointment = ""
  doctorname = ""
  readValues = () => {
    let data: any = {
      "image": this.image,
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
      "dateofappointment": this.dateofappointment,
      "doctorname": this.doctorname
    }
    this.api.addPatient(data).subscribe(
      (response: any) => {
        if(response == "success"){
          alert("Patient added successfully")
        }
      }
    )
    this.name = ""
    this.image = ""
    this.address = ""
    this.phone = ""
    this.dateofappointment = ""
    this.doctorname = ""
    console.log("Success")
    this.route.navigate(["/"])
    console.log(data)
  }
}