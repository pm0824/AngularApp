import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../server-config';

import * as xlsx from 'xlsx';

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

  public filename="BookList.xlsx";
  

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

  onDownload() {
    /* table id is passed over here */   
    let element = document.getElementById('excel-sheet'); 
    const ws: xlsx.WorkSheet =xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    xlsx.writeFile(wb, this.filename);
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
