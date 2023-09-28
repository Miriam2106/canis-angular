import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './modules/shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { registerLocaleData } from '@angular/common'
import localeEsMx from '@angular/common/locales/es-MX'
registerLocaleData(localeEsMx)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, NgbModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
