import { Component, Input } from '@angular/core'
import { Comment, Rating } from '../../models/comment.model'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent implements Comment {
  @Input()
  author!: string
  @Input()
  comment!: string
  @Input()
  rating!: Rating
  @Input()
  createdAt!: Date
}
