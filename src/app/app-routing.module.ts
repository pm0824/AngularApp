import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FindStudentComponent } from './find-student/find-student.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';


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
    path: 'list-teacher', component: ListTeacherComponent
  },
  {
    path: 'add-teacher', component: AddTeacherComponent
  }
  ,
  {
    path: 'add-book', component: AddBookComponent
  },
  { path: 'update-student/:id', component: UpdateStudentComponent },
  { path: 'find-student', component: FindStudentComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  {path: 'issue-book', component:IssueBookComponent},
  {path: 'search-book', component:SearchBookComponent},
  { path: 'update-teacher/:id', component: UpdateTeacherComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
