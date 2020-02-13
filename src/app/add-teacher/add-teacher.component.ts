import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  public name = '';
  public id = '';
  public branch = '';
  base64textString: string = null;

  public message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSave() {

    this.http.post(ServerConfig.BASE_URL + '/addteacher', {
      name: this.name,
      id: this.id,
      branch: this.branch,
      image: this.base64textString
    }).subscribe((response) => {
      console.log('response', response);
      this.message='Teacher added successfully';
      // console.log('error',err);
    }, (err) => {
      console.log('error', err);
      this.message='Duplicate Teacher ID';
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
