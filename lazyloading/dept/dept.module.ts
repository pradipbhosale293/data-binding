import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntcComponent } from './entc/entc.component';
import { CompComponent } from './comp/comp.component';
import { MechComponent } from './mech/mech.component';
import { ElectComponent } from './elect/elect.component';



@NgModule({
  declarations: [
    EntcComponent,
    CompComponent,
    MechComponent,
    ElectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeptModule { }
