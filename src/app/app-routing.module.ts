import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalComponent } from './components/historical/historical.component';
import { GetRangeComponent } from './components/get-range/get-range.component';
import { SessionInfoComponent } from './components/session-info/session-info.component';
import { GetSingleDayComponent } from './components/get-single-day/get-single-day.component';
import { StationsComponent } from './components/stations/stations.component';
import { StationStatusComponent } from './components/station-status/station-status.component';
import { StationHourlyComponent } from './components/station-hourly/station-hourly.component';
import { CurrentComponent } from './components/current/current.component';

const routes: Routes = [
    { path: 'current', component: CurrentComponent },
    { path: 'historical', component: HistoricalComponent },
    {path: 'getRange', component: GetRangeComponent},
    { path: 'getSessionInfo', component: SessionInfoComponent },
    {path: 'getSingleDay', component: GetSingleDayComponent},
    {path: 'stations', component: StationsComponent},
    {path: 'stationStatus', component: StationStatusComponent},
    {path: 'stationHourly', component: StationHourlyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
