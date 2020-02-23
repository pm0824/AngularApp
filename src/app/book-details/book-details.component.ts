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
  public show=1;
  public barcode='';
 

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) {
    this.base_url=ServerConfig.BASE_URL;
   }

  ngOnInit() {

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

  public findCopies() {


    this.http.post(ServerConfig.BASE_URL + '/listbookcopy', {
      id: this.bookid
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Record found successfully';
      this.bookcopies = response['result'];
      console.log('this.bookcopies',this.bookcopies);
      if((this.bookcopies).length==0)

      {
        this.show=0;
      }
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');
  }

  public addCopy(){
    this.http.post(ServerConfig.BASE_URL + '/addbookcopy', {
      bookid:this.bookid,
      barcode:this.barcode
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
