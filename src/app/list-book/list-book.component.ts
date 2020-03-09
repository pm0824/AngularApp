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
  public titles = ['OS','TOC','DS','CPP'];
  public authors = ['ABC','PQR','XYZ','cppauth','tocauth'];
  public publishers = ['abc','pqr','xyz','cppub','tocpub'];
  public selectedTitle = '';
  public selectedAuthor='';
  public selectedPublisher='';

  public message = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

   
  public onSearch() {


    this.http.post(ServerConfig.BASE_URL + '/listbooks', {
      title: this.selectedTitle,
      author: this.selectedAuthor,
      publisher: this.selectedPublisher
    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Sent successfully';
      this.books = response['result'];
      console.log('this.books',this.books);
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');

  }


}
