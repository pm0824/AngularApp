import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public name = 'abcdefgh';
  public id = '';
  public branch = '';
  base64textString: string = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSave() {

    this.http.post(ServerConfig.BASE_URL + '/addstudent', {
      name: this.name,
      id: this.id,
      branch: this.branch,
      image: this.base64textString
    }).subscribe((response) => {
      console.log(response);
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
