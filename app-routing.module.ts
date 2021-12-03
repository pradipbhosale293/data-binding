import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { FirstComponent } from './datashraing/first/first.component';
import { ParentComponent } from './datashraing/parent/parent.component';
import { SecondComponent } from './datashraing/second/second.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AboutusModule } from './lazyloading/aboutus/aboutus.module';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'student', component: StudentComponent, resolve:[AuthGuard]},
  {path: 'staff1/:id/:name', component:StaffComponent, canActivate:[AuthGuard]},
  {path:'home', redirectTo: '', },
  {path:'contact', component: ContactComponent},
  {path:'parent', component: ParentComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {
    path:'aboutus', loadChildren:()=>import('./lazyloading/aboutus/aboutus.module').then(mod=>mod.AboutusModule)
  },
  {
    path:'admission', loadChildren: ()=>import('./lazyloading/admission/admission.module').then(mod=>mod.AdmissionModule)
  },
  {
    path:'dept', loadChildren: ()=>import('./lazyloading/dept/dept.module').then(mod=>mod.DeptModule)
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {