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
  public show=0
  public student;
  public message='';
  public name = '';
  public id = '';
  public rollno='';
  public class='';
  public branch = '';
  public edyear='';
  base64textString: string = null;
  imageString: string= null;
  public video;
  public canvas;
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
      this.show=1;
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
