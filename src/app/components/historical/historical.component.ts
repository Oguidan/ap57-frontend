import { Component, OnInit } from '@angular/core';
import csvParser from 'csv-parser';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-historical',
  standalone: true,
  imports: [NgFor],
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css'
})


export class HistoricalComponent implements OnInit {
  csvData: any[] = [];

  station_name = "SMART188";
  dt_from_string = "2024-01-05";
  dt_to_string = "2024-01-06";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHourlyAvg(this.station_name, this.dt_from_string, this.dt_to_string).subscribe(
      (data) => {
        this.csvData = data.map((item: any) => {
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
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  refresh() {
    window.location.reload();
  }
                    
}
