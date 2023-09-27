import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { IconComponent } from './components/icon/icon.component';
import { MapComponent } from './components/map/map.component'
import { ContactUsComponent } from './contact-us.component'

@NgModule({
  declarations: [
    ContactUsComponent,
    IconComponent,
    MapComponent
  ],
  imports: [CommonModule, ContactUsRoutingModule],
})
export class ContactUsModule {}
