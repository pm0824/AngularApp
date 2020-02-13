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

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    AddBookComponent,
    ListBookComponent,
    AddTeacherComponent
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
