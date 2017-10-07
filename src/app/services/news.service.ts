import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {News} from '../beans/news';

@Injectable()
export class NewsService{

	private theNews: Promise<News[]>;

	constructor(private http: Http){}

	getNews(): Promise<News[]> {

		if(!this.theNews){
			this.theNews = this.http.get('/api/app/news')
			.toPromise().then( (response) : Promise<News[]> => {
				return response.json();
			} )
		}
		return this.theNews;
	}

	addLike= (news: News) => {
		this.http.post('/api/app/news/like/'+news.id,'')
		.toPromise()
		.then( (response) =>  { 
			let updatedNews : News = response.json();
			news.likes = updatedNews.likes;
			 } )
	}

	deleteNews= (news: News) => {

		return this.http.delete('/api/app/news/'+news.id).
		toPromise().
		then( () => {
			this.theNews = this.getNews().then((allNews: News[] ) => { 
				return allNews.filter((currentNews:News) => currentNews.id !== news.id)
				} )
		} )
	}

	addNews= (news: News)  => {

		let headers = new Headers();
        headers.append('Content-Type', 'application/json');
		let postOptions= new RequestOptions({ headers: headers});
		
		return this.http.post('api/app/news',JSON.stringify(news),postOptions)
		.toPromise()
		.then((response :Response) => {
			let addedNews: News = <News> response.json();
			return addedNews
		})
	}

	randomNews= (): Promise<News> => {
		return this.http.get('api/app/news/random')
		.toPromise()
		.then( (response : Response) => { 
			return response.json()} )
	}
}