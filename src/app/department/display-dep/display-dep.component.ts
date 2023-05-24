import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-display-dep',
  templateUrl: './display-dep.component.html',
  styleUrls: ['./display-dep.component.css']
})
export class DisplayDepComponent {

  constructor(private service:SharedService){}

  DepartmentList:any=[];

  ModalTitle:any;
  ActivateAddEdit:boolean=false;
  dep:any;

  ngOnInit():void{
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      Dep_id:0,
      Dep_name:""
    }

    this.ModalTitle="Add Department";
    this.ActivateAddEdit=true;
  }


refreshDepList(){
    this.service.GetDepartment().subscribe(data=>{
      this.DepartmentList=data
    })
  }
}
