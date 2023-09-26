import { Component, OnInit } from '@angular/core'
import { GetAllCommentsInteractorService } from '../../../use-cases/get-all-comments.interactor.service'
import { Comment } from '../../../entities/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = []

  constructor(private readonly _getAllComments: GetAllCommentsInteractorService) {}

  ngOnInit(): void {
    this.comments = this._getAllComments.execute()
  }
}
