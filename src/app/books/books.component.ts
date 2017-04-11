import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Book} from '../beans/book';
import {BooksService} from '../services/books.service';
import {UserService} from '../services/user.service';
import {DataContainerService} from '../services/dataContainer.service';

import {KPagination} from '../components/kpagination/kpagination';

import {FilterFieldPipe} from '../pipes/filter-field.pipe';
import {UpdateDataPipe} from '../pipes/update-data.pipe';
import {OrderByPipe} from '../pipes/order-by.pipe';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']

})
export class BooksComponent implements OnInit {

  books: Book[]= [];
	currentPage: number = 1;

  //pagination filters
	bookNameFilter: string = '';
	booksPerPageFilter: number = 4;
	reverseOrderFilter: boolean = false;

  constructor( private router: Router,
               private booksService: BooksService, 
		           public userService: UserService,
		           public dataContainer: DataContainerService ) { }

  ngOnInit() {
    this.booksService.getBooks()
			.then((books: Book[]) => {
				this.books = books;
			});
  }

  switchPage(page:number){
		this.currentPage = page;
	}

	getRatingClass = this.booksService.getRatingClass;

  addToBasket(book: Book) {
		this.userService.basket.addProduct(book);
		this.router.navigate(['basket']);
	}
}
