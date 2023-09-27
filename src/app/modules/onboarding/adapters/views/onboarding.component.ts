import { AfterViewInit, Component, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core'
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap'
import { GetAllSectionsInteractorService } from '../../use-cases/get-all-sections.interactor.service'
import { Section } from '../../entities/section'

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent implements OnInit, AfterViewInit {
  @ViewChildren('tooltip')
  tooltipQueries!: QueryList<NgbTooltip>
  tooltips: NgbTooltip[] = []
  sections: Section[] = []
  currIndex = 0

  constructor(private readonly _getAllSections: GetAllSectionsInteractorService) {}

  ngOnInit(): void {
    this.sections = this._getAllSections.execute()
  }

  ngAfterViewInit(): void {
    this.tooltips = this.tooltipQueries.toArray()
    this.tooltips[0].open()
  }

  @HostListener('document:click')
  toggleTooltip() {
    this.tooltips[this.currIndex].close()
    this.currIndex = (this.currIndex + 1) % this.tooltips.length
    this.tooltips[this.currIndex].open()
  }
}
