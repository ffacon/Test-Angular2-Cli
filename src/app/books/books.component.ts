import { Component, OnInit } from '@angular/core';
import { Book} from '../beans/book';
import { BooksService} from '../services/books.service';
import { DataContainerService} from '../services/data-container.service'
import { FilterFieldPipe } from '../pipes/filter-field.pipe';
import { UpdateDataPipe } from '../pipes/update-data.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


 
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
  books: Book[];

  constructor(private router: Router,
    private booksService: BooksService, 
    public userService: UserService,
    public dataContainer: DataContainerService) { }

  ngOnInit() {
    this.booksService.getBooks().then((books: Book[]) => {
      this.books = books;
    });
  }

  getRatingClass = this.booksService.getRatingClass;

  switchPage(page:number){
    	this.currentPage = page;
  }

  addToBasket(book: Book) {
		this.userService.basket.addProduct(book);
		this.router.navigate(['basket']);
  }

}
