import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './components/current/current.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HistoricalComponent } from './components/historical/historical.component';
import { FormsModule } from '@angular/forms';
import { GetRangeComponent } from './components/get-range/get-range.component';
import { SessionInfoComponent } from './components/session-info/session-info.component';
import { GetSingleDayComponent } from './components/get-single-day/get-single-day.component';
import { StationStatusComponent } from './components/station-status/station-status.component';
import { StationsComponent } from './components/stations/stations.component';
import { StationHourlyComponent } from './components/station-hourly/station-hourly.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrentComponent,
    HistoricalComponent,
    GetRangeComponent,
    SessionInfoComponent,
    GetSingleDayComponent,
    StationStatusComponent,
    StationsComponent,
    StationHourlyComponent
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
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
