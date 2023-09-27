import { Component, OnInit } from '@angular/core';
import { News } from './models/news.model';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit{
  news: News[] = []
  constructor(private readonly _newsService: NewsService){}
  ngOnInit(): void {
      this.news = this._newsService.getAll()
  }

}

