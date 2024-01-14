import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { GetRangeComponent } from './components/get-range/get-range.component';
import { SessionInfoComponent } from './components/session-info/session-info.component';
import { GetSingleDayComponent } from './components/get-single-day/get-single-day.component';
import { StationsComponent } from './components/stations/stations.component';

export const routes: Routes = [
    { path: 'table', component: TableComponent },
    { path: 'historical', component: HistoricalComponent },
    {path: 'getRange', component: GetRangeComponent},
    { path: 'getSessionInfo', component: SessionInfoComponent },
    {path: 'getSingleDay', component: GetSingleDayComponent},
    {path: 'stations', component: StationsComponent}
];