import { Component, Input } from '@angular/core';
import { Quarter } from '../../models/quarter.model'
import { Color } from '../../models/color.model'

@Component({
  selector: 'app-quarter-card',
  templateUrl: './quarter-card.component.html'
})
export class QuarterCardComponent implements Quarter {
  @Input({ required: true })
  quarterNumber!: number
  @Input({ required: true })
  isInternships!: boolean
  @Input({ required: true })
  subjects?: string[]
  @Input()
  color?: Color
}
