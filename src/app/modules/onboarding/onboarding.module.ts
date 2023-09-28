import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OnboardingRoutingModule } from './onboarding-routing.module'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { OnboardingComponent } from './adapters/views/onboarding.component'

@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [CommonModule, OnboardingRoutingModule, NgbTooltipModule],
})
export class OnboardingModule {}
