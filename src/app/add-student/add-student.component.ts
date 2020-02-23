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
  imageString: string= null;
  public video;
  public canvas;

  public message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.video = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
   


    this.init().then((result) => {
      console.log('result', result);
    });
  }

  public async init() {
    try {
      const constraints = {
        audio: true,
        video: {
          width: 320, height: 240
        }
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.handleSuccess(stream);
    } catch (e) {
      console.log(`navigator.getUserMedia error:${e.toString()}`);
    }
  }
  public handleSuccess(stream) {
    //window.stream = stream;
    this.video.srcObject = stream;
  }

  public onCapture(): void {
    console.log(this.video);


    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);

    /** Code to merge image **/
    /** For instance, if I want to merge a play image on center of existing image **/
    const playImage = new Image();
    // playImage.src = 'path to image asset';
    // playImage.onload = () => {
    const startX = (this.video.videoWidth / 2) - (playImage.width / 2);
    const startY = (this.video.videoHeight / 2) - (playImage.height / 2);
    this.canvas.getContext('2d').drawImage(this.video, startX, startY, playImage.width, playImage.height);
    this.canvas.toBlob((blob) => {
      console.log('blob', blob);
      this.createImageFromBlob(blob);
      // const img = new Image();
      // img.src = window.URL.createObjectURL(blob);
      // console.log('img.src',img.src);
      // };
    });


  }
  public imageBlobUrl: any;
  public createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
      console.log("image",typeof(this.imageBlobUrl));
      this.imageString=this.imageBlobUrl;
      console.log("imgstr",this.imageString);
      this.base64textString = this.imageString.slice(this.imageString.indexOf(",")+1);
      console.log("string",this.base64textString);
    }, false);
    if (image) {
      // reader.readAsBinaryString(image);
      reader.readAsDataURL(image);
    }
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

  
}
