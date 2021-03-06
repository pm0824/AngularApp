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
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { LibLoginComponent } from './lib-login/lib-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TIssuebookComponent } from './t-issuebook/t-issuebook.component';
import { TReturnbookComponent } from './t-returnbook/t-returnbook.component';
import { TSearchbookComponent } from './t-searchbook/t-searchbook.component';


const routes: Routes = [
  {
    path:'' , redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
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
  {path: 'librarian', component:LibrarianComponent},
  {path: 'student', component:StudentComponent},
  {path: 'teacher', component:TeacherComponent},
  {
    path:'return-book', component:ReturnBookComponent
  },{
    path:'lib-login', component:LibLoginComponent
  },{
    path:'about-us', component:AboutUsComponent
  },
  {
    path:'t-issuebook',component:TIssuebookComponent
  },
  {
    path:'t-returnbook',component:TReturnbookComponent
  },
  {
    path:'t-searchbook',component:TSearchbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
