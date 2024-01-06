import { Component, OnInit } from '@angular/core';
import csvParser from 'csv-parser';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-historical',
  standalone: true,
  imports: [],
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
    this.dataService.getHistoricalValues(this.station_name, this.dt_from_string, this.dt_to_string).subscribe(
      (csvText: string) => {
        this.csvData = this.parseCSV(csvText);
      },
      error => {
        console.error('Error fetching CSV data:', error);
      }
    );
  }

  private parseCSV(csvText: string): any[] {
    const parsedData: any[] = [];

    // Use csv-parser to parse the CSV data
    csvParser({ headers: true })
      .on('data', (row: any) => {
        parsedData.push(row);
      })
      .on('end', () => {
        console.log('CSV parsing complete:', parsedData);
      });

    // Feed the CSV text to the parser
    const readableStream = require('stream').Readable.from([csvText]);
    readableStream.pipe(csvParser());

    return parsedData;
  }
}
