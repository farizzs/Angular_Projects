import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent {
  constructor(private service:SharedService){}
  @Input() dep:any;
  Dep_id:any;
  Dep_name:any;

  ngOnInit(): void{
    this.Dep_id = this.dep.Dep_id;
    this.Dep_name=this.dep.Dep_name;
  }

  SaveDepartment(){
    var val = {Dep_id:this.Dep_id,Dep_name:this.Dep_name};
    this.service.AddDepartmet(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
