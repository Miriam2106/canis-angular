import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BlogRoutingModule } from './blog-routing.module'
import { BlogComponent } from './adapters/views/blog/blog.component'

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
