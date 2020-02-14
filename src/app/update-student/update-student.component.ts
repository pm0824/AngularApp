import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  //const id=0;
  public student;
  public message='';
  public name = '';
  public id = '';
  public rollno='';
  public class='';
  public branch = '';
  public edyear='';
  base64textString: string = null;
  public branches=['CSE', 'IT', 'ELN','MECH','CIVIL'];
  public classes=['FE','SE','TE','BE']

  public base_url;

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) {
    this.base_url=ServerConfig.BASE_URL;
   }

  ngOnInit() {

    
    this.activatedRoute.paramMap.subscribe((result)=>{
      console.log('update-student',result);
      const id=result['params']['id'];
      console.log('id',id);

      this.http.post(ServerConfig.BASE_URL + '/getstudent', {
        id:id
      }).subscribe((response) => {
        console.log('response', response);
        this.message='successful';
        this.student=response['result'][0];
        // name = this.student.name
        // console.log('error',err);
      }, (err) => {
        console.log('error', err);
        this.message='Duplicate Student ID';
      });
  
      console.log('saving data');

      
    });

  }

  public onUpdate() {

    this.http.post(ServerConfig.BASE_URL + '/updatestudent', {
      studentid: this.student.studentid,
      name: this.student.name,
      id: this.student.id,
      rollno:this.student.rollno,
      branch:this.student.branch,
      class:this.student.sclass,
      edyear:this.student.edyear,
      image: this.base64textString
    }).subscribe((response) => {
      console.log('response', response);
      this.message='Student updated successfully';
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
