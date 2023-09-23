import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component'
import { SharedModule } from '../shared/shared.module';
import { StarsPipe } from './pipes/stars.pipe'

@NgModule({
  declarations: [
    CommentsComponent,
    CommentItemComponent,
    StarsPipe
  ],
  imports: [CommonModule, CommentsRoutingModule, SharedModule],
})
export class CommentsModule {}
