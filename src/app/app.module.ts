import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    AddBookComponent,
    ListBookComponent,
    AddTeacherComponent,
    FindStudentComponent,
    BookDetailsComponent,
    IssueBookComponent,
    SearchBookComponent,
    UpdateTeacherComponent,
    ListTeacherComponent,
    DashboardComponent,
    LibrarianComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
