import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NewsRoutingModule } from './news-routing.module';
import { NewsCardComponent } from './adapters/components/news-card/news-card.component';
import { NewsComponent } from './adapters/views/news/news.component'

@NgModule({
  declarations: [
    NewsCardComponent,
    NewsComponent
  ],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
