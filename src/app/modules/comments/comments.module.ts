import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommentsRoutingModule } from './comments-routing.module'
import { SharedModule } from '../shared/shared.module'
import { StarsPipe } from './adapters/pipes/stars.pipe'
import { CommentsComponent } from './adapters/views/comments/comments.component'
import { CommentItemComponent } from './adapters/components/comment-item/comment-item.component'

@NgModule({
  declarations: [
    CommentsComponent,
    CommentItemComponent,
    StarsPipe
  ],
  imports: [CommonModule, CommentsRoutingModule, SharedModule],
})
export class CommentsModule {}
