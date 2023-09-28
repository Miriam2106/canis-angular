import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './adapters/views/home/home.component';
import { CareerCardComponent } from './adapters/components/career-card/career-card.component';
import { QuarterCardComponent } from './adapters/components/quarter-card/quarter-card.component'
import { SharedModule } from '../shared/shared.module'
import { NgbCollapseModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    HomeComponent,
    CareerCardComponent,
    QuarterCardComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, NgbCollapseModule, NgbAccordionModule],
})
export class HomeModule {}
