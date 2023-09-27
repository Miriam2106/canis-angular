import { Component, OnInit } from '@angular/core';
import { News } from '../../../entities/news';
import { NewsService } from '../../../use-cases/get-all-news.interactor.service';

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

