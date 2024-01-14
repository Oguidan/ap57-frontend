import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { GetRangeComponent } from './components/get-range/get-range.component';
import { SessionInfoComponent } from './components/session-info/session-info.component';

export const routes: Routes = [
    { path: 'table', component: TableComponent },
    { path: 'historical', component: HistoricalComponent },
    {path: 'getRange', component: GetRangeComponent},
    { path: 'getSessionInfo', component: SessionInfoComponent }
];