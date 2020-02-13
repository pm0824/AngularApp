import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';


const routes: Routes = [
  {
    path: 'add-student', component: AddStudentComponent
  },
  {
    path: 'list-student', component: ListStudentComponent
  },
  {
    path: 'list-book', component: ListBookComponent
  },
  {
    path: 'add-teacher', component: AddTeacherComponent
  }
  ,
  {
    path: 'add-book', component: AddBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
