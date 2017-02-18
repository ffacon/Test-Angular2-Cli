import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concat';
import 'rxjs/add/observable/of';

import {News} from '../beans/news';

@Injectable()
export class NewsService {

  private theNews: Observable<News>;

	constructor(private http: Http){}

	getNews= (): Observable<News> => {

		if ( this.theNews !== undefined ){
			return this.theNews;
		}

		return this.http.get('/api/app/news')
			.map((response: Response): Array<News> => {
				return <Array<News>>response.json();
			})
			.do((news: News[]) => {
				this.theNews = Observable.from(news);
			})
			.flatMap((news: News[]) => {
				// return Observable.fromArray(news);
				return this.theNews;
			});
	}

	addLike= (news: News) => {
		this.http.post('/api/app/news/like/' + news.id, '')
			// .catch((err: any, source: any, caught: any): any => {
			// 	console.log(err);
			// })
			.map((response: Response): News => {
				return <News>response.json();
			})
			.subscribe((updatedNews: News) => {
				news.likes = updatedNews.likes;
			});
	}

	deleteNews= (news: News) => {

		return this.http.delete('/api/app/news/' + news.id)
		.do( (response: Response) => {

			this.theNews = this.theNews
			.filter((currentNews: News) => {
				return currentNews.id !== news.id;
			});

		} );

	}

	addNews= (news: News) => {

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let postOptions= new RequestOptions({ headers: headers});

		return this.http.post('/api/app/news', JSON.stringify(news), postOptions)
		.do( (response: Response) => {
			let addedNews: News = <News>response.json();
			this.theNews = this.theNews
			.concat(Observable.of(addedNews));
		} );
	}

	randomNews= (): Observable<News> => {

		return this.http.get('/api/app/news/random')
			.map((response: Response) => {
				return <News>response.json();
			});
			
	}

}
