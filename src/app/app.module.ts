import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DisplayDepComponent } from './department/display-dep/display-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DisplayDepComponent,
    AddDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEmpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
