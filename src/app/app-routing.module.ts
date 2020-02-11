import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
  {
    path:'add-student', component: AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
