import { Component,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})


export class AddEmpComponent {
 
  constructor(private service:SharedService){}

  @Input() emp:any;
  Id:any;
  Name:any;
  Department:any;
  Salary:any;

  ngOninit(): void{
    this.Id= this.emp.Id;
    this.Name= this.emp.Name;
    this.Department= this.emp.Department;
    this.Salary= this.emp.Salary;
  }

  saveEmployee(){
    var val={
     Id:this.Id,
     Name:this.Name,
     Department:this.Department,
     Salary:this.Salary,

    };
    this.service.AddEmployee(val).subscribe(res =>{
      alert(res.toString());
    })
  }

}
