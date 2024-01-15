import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-station-hourly',
  standalone: true,
  imports: [NgFor],
  templateUrl: './station-hourly.component.html',
  styleUrl: './station-hourly.component.css'
})
export class StationHourlyComponent {
  airquinoData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    const stationId = "283164601";
    const startDate = '20230114-1100'
    const endDate = '20230114-1200'
    this.dataService.getStationHourly(stationId, startDate, endDate).subscribe((data) => {
      this.airquinoData = data;
    })
  }
}
