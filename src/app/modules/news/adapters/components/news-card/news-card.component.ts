import { Component, Input } from '@angular/core';
import { News } from '../../../entities/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html'
})
export class NewsCardComponent implements News {
  @Input()
  image!:string;
  @Input()
  tittle!: string;
  @Input()
  description!: string;

}
