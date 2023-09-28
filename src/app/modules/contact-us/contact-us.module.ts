import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { IconComponent } from './adapters/views/icon/icon.component';
import { MapComponent } from './adapters/views/map/map.component'
import { ContactUsComponent } from './adapters/views/contact-us/contact-us.component'

@NgModule({
  declarations: [
    ContactUsComponent,
    IconComponent,
    MapComponent
  ],
  imports: [CommonModule, ContactUsRoutingModule],
})
export class ContactUsModule {}
