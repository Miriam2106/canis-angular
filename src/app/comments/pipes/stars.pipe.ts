import { Pipe, PipeTransform } from '@angular/core'
import { Rating } from '../models/comment.model'

@Pipe({
  name: 'stars',
})
export class StarsPipe implements PipeTransform {
  transform(value: Rating): string {
    return '★'.repeat(value).padEnd(5, '☆')
  }
}
