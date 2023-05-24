import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor(private http:HttpClient) { }

  GetDepartment():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+ '/Department/');
  }

  AddDepartmet(val:any){
    return this.http.post(this.APIUrl+'/Department/',val);
  }


  UpdateDeprtment(val:any){
    return this.http.put(this.APIUrl+'/Department/',val);
  }


  DeleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/',val);
  }

  
  GetEmployeee():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+'/EmployeeAPI/');
  }

  AddEmployee(val:any){
    return this.http.post(this.APIUrl+'/EmployeeAPI/',val);
  }


  UpdateEmployee(val:any){
    return this.http.put(this.APIUrl+'/EmployeeAPI/',val);
  }


  DeleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/EmployeeAPI/',val);
  }
}
