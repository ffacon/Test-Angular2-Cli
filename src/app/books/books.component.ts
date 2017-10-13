import { Component, OnInit } from '@angular/core';
import { Book} from '../beans/book';
import { BooksService} from '../services/books.service';
import { DataContainerService} from '../services/data-container.service'
import { FilterFieldPipe } from '../pipes/filter-field.pipe';
import { UpdateDataPipe } from '../pipes/update-data.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';

 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksPerPageFilter: number = 4;
  currentPage: number = 1; 
  bookNameFilter: string = '';
  reverseOrderFilter: boolean = false;
  bookOrderBy: string;
  books: Book[];

  constructor(private booksService: BooksService, public dataContainer: DataContainerService ) { }

  ngOnInit() {
    this.booksService.getBooks().then((books: Book[]) => {
      this.books = books;
    });
  }

  getRatingClass = this.booksService.getRatingClass;

  switchPage(page:number){
    	this.currentPage = page;
  }


}
