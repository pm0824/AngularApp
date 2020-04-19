import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  
  public books;
  public title = '';
  public author ='';
  public publisher = '';
  

  public message = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.post(ServerConfig.BASE_URL + '/getallbooks', {
      
    }).subscribe((response) => {
      console.log('response', response);
     
      this.books = response['result'];
     
      console.log('this.books',this.books);
    }, (err) => {
      console.log('error', err);
      this.message = 'Something went wrong...';
    });

    console.log('saving data');

  }

   
  public onSearch() {


    this.http.post(ServerConfig.BASE_URL + '/listbooks', {
      title: this.title,
      
    }).subscribe((response) => {
      console.log('response', response);
     
      this.books = response['result'];
      if(this.books.length == 0){
        this.message="Book is not available"
      }
      console.log('this.books',this.books);
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');

  }


}
