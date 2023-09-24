import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { RelativePipe } from './pipes/relative.pipe'
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

@NgModule({
  declarations: [NavbarComponent, FooterComponent, RelativePipe],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, RelativePipe, FontAwesomeModule],
})
export class SharedModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas)
  }
}
