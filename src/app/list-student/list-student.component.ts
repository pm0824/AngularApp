import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  public students;
  public branches = ['CSE', 'IT', 'ELN', 'Mech', 'Civil'];
  public classes = ['FE', 'SE', 'TE', 'BE']
  public year = '2019-2020'
  public selectedBranch = 'CSE';
  public selectedClass = 'BE';
  public message = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSearch() {


    this.http.post(ServerConfig.BASE_URL + '/liststudents', {
      branch: this.selectedBranch,
      class: this.selectedClass,
      year: this.year
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Sent successfully';
      this.students = response['result'];
      console.log('this.students',this.students);
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');

  }

}
