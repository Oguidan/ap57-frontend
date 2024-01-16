import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station-hourly',
  templateUrl: './station-hourly.component.html',
  styleUrl: './station-hourly.component.css',
})
export class StationHourlyComponent {
  airquinoData1: any;
  airquinoData2: any;

  stationId1 = '283164601';
  dt1_from_string: string = '';
  dt1_to_string: string = '';

  stationId2 = '283181971';
  dt2_from_string: string = '';
  dt2_to_string: string = '';

  constructor(private dataService: DataService, private cdr:ChangeDetectorRef) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService
      .getStationHourly(
        this.stationId1,
        this.dt1_from_string,
        this.dt1_to_string
      )
      .subscribe((data) => {
        this.airquinoData1 = data;
        this.cdr.detectChanges(); 
      });
    this.dataService
      .getStationHourly(
        this.stationId2,
        this.dt2_from_string,
        this.dt2_to_string
      )
      .subscribe((data) => {
        this.airquinoData2 = data;
        this.cdr.detectChanges(); 
      });
  }
}
