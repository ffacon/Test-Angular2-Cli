import {Injectable, Inject} from '@angular/core';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

import {Comment} from '../beans/comment';
import {Book} from '../beans/book';

@Injectable()
export class BooksService{

	private books: Observable<Book>;

	constructor(private http: Http){}

	getBooks= (): Observable<Book> => {

		if (this.books !== undefined){
			return this.books;
		}

		return this.http.get('/data/books.json')
			.map((response: Response) => {
				let books: Book[] = <Book[]>response.json();
				return books;
			})
			.do((books: Book[]) => {
				this.books = Observable.from(books);
			})
			.flatMap((books: Book[]) => {
				return this.books;
			})
			.do((book: Book) => {
				this.includeRating(book);
			});
	}

	getBook= (id: number): Observable<Book> => {
		return this.getBooks().filter((book: Book) => {
			return book.id === id;
		});
	}

	getRatingAverage = (book: Book):number => {

		let total = 0;

		if (!book.comments) {
			return -1;
		}		

		book.comments.forEach((comment: Comment, indice: number) => {
			if (comment.rate !== undefined) {
				total += comment.rate;
			}
		});

		return Math.floor(total / book.comments.length);
	}

	private includeRating= (book: Book): void => {
		book.rating = this.getRatingAverage(book);
	}


	convertFromRating= (rate: number): string => {

		if (!rate || rate < 0 || rate > 5){
			return undefined;
		}

		let classes = ['zero', 'one', 'two', 'three', 'four', 'five'];

		return classes[rate];
	}


	getRatingClass = (book: Book): string => {

		let classes = ['zero', 'one', 'two', 'three', 'four', 'five'];

		if (!book.comments){
			return undefined;
		}

		let average = book.rating || this.getRatingAverage(book);

		return 'rating ' + this.convertFromRating(average);
	}

}