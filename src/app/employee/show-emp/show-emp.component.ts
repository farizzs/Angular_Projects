import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {

  constructor(private service:SharedService){}

  EmployeeList:any=[];


  ModalTitle:any;
  ActivateAddEdit:boolean=false;
  emp:any;


  ngOnInit():void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      Id:0,
      Name:"",
      Department:"",
      Salary:""
    
    }

    this.ModalTitle="Add Employee";
    this.ActivateAddEdit=true;
  }





refreshEmpList(){
    this.service.GetEmployeee().subscribe(data=>{
      this.EmployeeList=data
    })
  }

}
