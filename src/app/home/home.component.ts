import { Component, OnInit } from '@angular/core';

import {NewsService} from '../services/news.service';
import {News} from '../beans/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [NewsService]

})
export class HomeComponent implements OnInit {

 	message: string = 'Welcome in our shop!!!';
	news: News[];
	newsOfTheDay: News= {};
	nextNews: News = {};


	constructor(private newsService: NewsService) {}

	ngOnInit(){
		this.updateNews();
	}

	updateNews= () => {
		this.newsService
			.getNews()
			.toArray()
			.subscribe((news: News[]) => {
				this.news = news;
			});


		this.newsService.randomNews()
		.subscribe((news: News) => {
			this.newsOfTheDay = news;
		});
	}

	addLike= (news: News) => {
		this.newsService.addLike(news);
	}

	deleteNews= (news: News) => {
		this.newsService.deleteNews(news)
		.subscribe( (response: any) => {
			this.updateNews();
		} );
	}

	addNews= () => {
		this.newsService.addNews(this.nextNews)
		.subscribe((response: any) => {
			this.updateNews();
		});		
	}

}
