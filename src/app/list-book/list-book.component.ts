import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  public books = [];
  public authors = ['CSE', 'IT', 'Mech'];
  public selectedBook = '';

  constructor() { }

  ngOnInit() {
  }

  public onSearch(){
    
  }

}
