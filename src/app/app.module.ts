import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarBrowseComponent } from './components/car-browse/car-browse.component';
import { CarMiniCardComponent } from './components/car-mini-card/car-mini-card.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarSearchComponent } from './pages/car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarBrowseComponent,
    CarMiniCardComponent,
    CarCardComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
