import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css',
})
export class HistoricalComponent implements OnInit {
  csvData1: any[] = [];
  csvData2: any[] = [];

  mergedData: any;

  station1_name = 'SMART188';
  dt1_from_string: string = '';
  dt1_to_string: string = '';

  station2_name = 'SMART189';
  dt2_from_string: string = '';
  dt2_to_string: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService
      .getHourlyAvg(
        this.station1_name,
        this.dt1_from_string,
        this.dt1_to_string
      )
      .subscribe(
        (data: any[]) => {
          this.csvData1 = data.map((item: any) => {
            const key = Object.keys(item)[0];
            const value = item[key];
            const columns = key.split(';');
            const values = value.split(';');
            return columns.reduce((obj: any, column: string, i: number) => {
              obj[column] = values[i];
              return obj;
            }, {});
          });
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        }
      );
    this.dataService
      .getHourlyAvg(
        this.station2_name,
        this.dt2_from_string,
        this.dt2_to_string
      )
      .subscribe(
        (data: any[]) => {
          this.csvData2 = data.map((item: any) => {
            const key = Object.keys(item)[0];
            const value = item[key];
            const columns = key.split(';');
            const values = value.split(';');
            return columns.reduce((obj: any, column: string, i: number) => {
              obj[column] = values[i];
              return obj;
            }, {});
          });
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  refresh() {
    window.location.reload();
  }
}
