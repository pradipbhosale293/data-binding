import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { HostelComponent } from './hostel/hostel.component';



@NgModule({
  declarations: [
    OverviewComponent,
    HostelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdmissionModule { }
