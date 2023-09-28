import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './adapters/views/main/main.component'
import { CareerCardComponent } from './adapters/components/career-card/career-card.component'
import { IconComponent } from './adapters/components/icon/icon.component'

@NgModule({
  declarations: [MainComponent, CareerCardComponent, IconComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
