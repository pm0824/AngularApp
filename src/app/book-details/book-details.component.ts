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
      this.message = 'Sent successfully';
      this.bookcopies = response['result'];
      console.log('this.bookcopies',this.bookcopies);
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');
  }

}
