
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  public branches = ['CSE', 'IT', 'ELN', 'Mech', 'Civil'];
  public selectedBranch = 'CSE';
  public message = '';
  public teachers;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  public onSearch() {


    this.http.post(ServerConfig.BASE_URL + '/listteachers', {
      branch: this.selectedBranch,
      
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Sent successfully';
      this.teachers = response['result'];
      console.log('this.teachers',this.teachers);
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');

  }
}
