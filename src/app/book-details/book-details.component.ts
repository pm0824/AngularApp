import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public books;
  public bookcopies;
  public message = '';
  public base_url;
  public bookid;
  public show=0;
  public flag=1;
  public barcode;
  base64textString: string = null;
  imageString: string= null;
  public video;
  public canvas;



 

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) {
    this.base_url=ServerConfig.BASE_URL;
   }

  ngOnInit() {

    this.video = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
   


    this.init().then((result) => {
      console.log('result', result);
    });


    this.activatedRoute.paramMap.subscribe((result)=>{
      console.log('book-details',result);
      const id=result['params']['id'];
      this.bookid=id;
      console.log('id',id);

      this.http.post(ServerConfig.BASE_URL + '/getbook', {
        id:id
      }).subscribe((response) => {
        console.log('response', response);
        this.message='successful';
        this.books=response['result'];
        // name = this.student.name
        // console.log('error',err);
      }, (err) => {
        console.log('error', err);
        this.message='Error';
      });
  
      console.log('saving data');

      
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
  


  public findCopies() {


    this.http.post(ServerConfig.BASE_URL + '/listbookcopy', {
      id: this.bookid
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Record found successfully';
      this.bookcopies = response['result'];
      console.log('this.bookcopies',this.bookcopies);
      if((this.bookcopies).length!==0)

      {
        this.show=1;
      }
      else{
        this.flag=0;
      }
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');
  }

  public addCopy(){
    this.http.post(ServerConfig.BASE_URL + '/scanbarcode', {
      bookid:this.bookid,
      barcode:this.base64textString
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Book copy added successfully';
     
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');
  

  }

  public deleteCopy(bookcopyid){

    this.http.post(ServerConfig.BASE_URL + '/deletebookcopy', {
      bookcopyid:bookcopyid
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Deleted successfully';
     
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');
  


  }

}
