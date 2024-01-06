import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HistoricalComponent } from './components/historical/historical.component';

export const routes: Routes = [
    { path: 'table', component: TableComponent },
    { path: 'historical', component: HistoricalComponent },
];