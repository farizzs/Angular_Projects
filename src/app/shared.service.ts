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
    return this.http.get<any[]>(this.APIUrl+ '/department/');
  }

  AddDepartmet(val:any){
    return this.http.post(this.APIUrl+'/department/',val);
  }


  UpdateDeprtment(val:any){
    return this.http.put(this.APIUrl+'/department/',val);
  }


  DeleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/department/',val);
  }

  
  GetEmployeee():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+ '/Employee/');
  }

  AddEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee/',val);
  }


  UpdateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee/',val);
  }


  DeleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/',val);
  }
}
