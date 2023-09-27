import { Component, Input } from '@angular/core'
import { Comment, Rating } from '../../../entities/comment'

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
