import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { Career } from '../../../entities/career'
import { Quarter } from '../../../entities/quarter'
import { Color } from '../../../entities/color'
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
})
export class CareerCardComponent implements Career {
  @Input({ required: true })
  title!: string
  @Input({ required: true })
  curriculum!: Quarter[]
  @Input()
  color?: Color
  isCollapsed: boolean = true
  isHidden: boolean = true

  onToggle(isHiding: boolean) {
    if (!isHiding) this.isHidden = false
  }

  setHidden() {
    this.isHidden = true
  }
}
