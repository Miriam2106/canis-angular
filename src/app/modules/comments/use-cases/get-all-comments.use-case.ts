import { UseCase } from 'src/app/kernel/contract'
import { Comment } from '../entities/comment'

export interface GetAllCommentsUseCase extends UseCase<undefined, Comment[]> {}
