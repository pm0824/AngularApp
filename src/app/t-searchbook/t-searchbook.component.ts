import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-t-searchbook',
  templateUrl: './t-searchbook.component.html',
  styleUrls: ['./t-searchbook.component.css']
})
export class TSearchbookComponent implements OnInit {

  public books=[];
  public message = '';
  public booktitle = '';
  public flag=1;

  constructor(private http: HttpClient) { }


  ngOnInit() {
  }

  public onSearch() {

    console.log('title', this.booktitle);
    this.http.post(ServerConfig.BASE_URL + '/searchbooks', {
      title: this.booktitle

    }).subscribe((response) => {
      console.log('response', response);
      this.message = 'Sent successfully';
      this.books = response['result'];
      console.log('this.books', this.books);
      if(this.books.length===0)
      {
        this.flag=0;
      }
    }, (err) => {
      console.log('error', err);
      this.message = 'Error!';
    });

    console.log('saving data');

  }



}
