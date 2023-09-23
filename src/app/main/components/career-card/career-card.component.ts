import { Component, Input } from '@angular/core';
import { Career } from '../../models/career.model'

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html'
})
export class CareerCardComponent implements Career {
  @Input()
  title!: string
  @Input()
  description!: string
}
