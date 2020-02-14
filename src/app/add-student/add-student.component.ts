import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public name = '';
  public id = '';
  public rollno='';
  public class='';
  public branch = '';
  public edyear='';
  public branches=['CSE', 'IT', 'ELN','MECH','CIVIL'];
  public classes=['FE','SE','TE','BE']
  base64textString: string = null;

  public message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSave() {

    this.http.post(ServerConfig.BASE_URL + '/addstudent', {
      name: this.name,
      id: this.id,
      rollno:this.rollno,
      branch:this.branch,
      class:this.class,
      edyear:this.edyear,
      image: this.base64textString
    }).subscribe((response) => {
      console.log('response', response);
      this.message='Student added successfully';
      // console.log('error',err);
    }, (err) => {
      console.log('error', err);
      this.message='Duplicate Student ID';
    });

    console.log('saving data');
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}
