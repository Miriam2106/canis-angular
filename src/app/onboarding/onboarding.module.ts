import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [CommonModule, OnboardingRoutingModule, NgbTooltipModule],
})
export class OnboardingModule {}
