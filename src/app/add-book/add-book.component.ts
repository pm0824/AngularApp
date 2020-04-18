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
  public price='';
  public branch='';
 
  public message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSave() {
    if(this.booktitle=='' || this.author=='' || this.branch=='' || this.edition==''|| this.publisher=='' || this.price==''){
      this.message="Fill all the fields";
    }
    else{
      this.http.post(ServerConfig.BASE_URL + '/addbook', {
        booktitle: this.booktitle,
        author: this.author,
        publisher: this.publisher,
        branch:this.branch,
        edition:this.edition,
        price:this.price
      }).subscribe((response) => {
        console.log('response', response);
        this.message='Book added successfully!';
        // console.log('error',err);
      }, (err) => {
        console.log('error', err);
        this.message='Book already added';
      });
  
    }
    
    console.log('saving data');
  }


}
