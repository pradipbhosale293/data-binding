import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutpandharpurComponent } from './aboutpandharpur/aboutpandharpur.component';
import { AboutsveriComponent } from './aboutsveri/aboutsveri.component';
import { AboutcoepComponent } from './aboutcoep/aboutcoep.component';
import { AboutexamComponent } from './aboutexam/aboutexam.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
  {path:'', component: AboutcoepComponent},
  {path: 'exam', component:AboutexamComponent},
  {path: 'pandharpur', component: AboutpandharpurComponent},
  {path: 'sveri', component: AboutsveriComponent}
]

@NgModule({
  declarations: [
    AboutpandharpurComponent,
    AboutsveriComponent,
    AboutcoepComponent,
    AboutexamComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class AboutusModule { }
