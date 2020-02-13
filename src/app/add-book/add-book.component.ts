import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public booktitle = '';
  public author = '';
  public publisher = '';
  public edition='';
  public price=0;

 
  public message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSave() {

    this.http.post(ServerConfig.BASE_URL + '/addbook', {
      booktitle: this.booktitle,
      author: this.author,
      publisher: this.publisher,
      edition:this.edition,
      price:this.price
    }).subscribe((response) => {
      console.log('response', response);
      this.message='Book added successfully';
      // console.log('error',err);
    }, (err) => {
      console.log('error', err);
      this.message='Duplicate Student ID';
    });

    console.log('saving data');
  }


}
