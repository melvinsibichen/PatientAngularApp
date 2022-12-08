import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewPatients = ()=>{
    return this.http.get("http://localhost:8080/viewall");
  }
  addPatient = (data:any)=>{
    return this.http.post("http://localhost:8080/add", data);
  }

  searchData = (data:any) =>{
    return this.http.post("http://localhost:8080/search",data)
  }

  deleteData = (data:any) =>{
    console.log(data)
    return this.http.post("http://localhost:8080/delete",data)
  }
}