import { Component, OnInit } from '@angular/core';
import { Book} from '../beans/book';
import { BooksService} from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private booksService:BooksService ) { }

  ngOnInit() {
    this.booksService.getBooks()
    .then((books: Book[]) => {
      this.books = books;
    }
  }

}
