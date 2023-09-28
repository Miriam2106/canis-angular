import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NewsComponent } from './adapters/views/news/news.component'

const routes: Routes = [
  {path:'',component: NewsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}