import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardInfoComponent } from './dashboard/card-info/card-info.component'
import { Dashboard } from './dashboard/dashboard.component'
@NgModule({
  declarations: [
    AppComponent,Header, FooterComponent, CardInfoComponent,Dashboard,CardInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
