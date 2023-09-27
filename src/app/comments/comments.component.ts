import { Component, OnInit } from '@angular/core'
import { Comment } from './models/comment.model'
import { CommentService } from './services/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = []

  constructor(private readonly _commentService: CommentService) {}

  ngOnInit(): void {
    this.comments = this._commentService.getAll()
  }
}
