import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './components/current/current.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoricalComponent } from './components/historical/historical.component';
import { FormsModule } from '@angular/forms';
import { GetRangeComponent } from './components/get-range/get-range.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrentComponent,
    HistoricalComponent,
    GetRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
