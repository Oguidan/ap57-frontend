import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station-status',
  templateUrl: './station-status.component.html',
  styleUrl: './station-status.component.css'
})
export class StationStatusComponent {
  airquinoData1: any;
  airquinoData2: any;

  projectId1 = "283164601";
  projectId2 = "283181971";

  constructor(private dataService: DataService) {}

  ngOnInit(): void{
    this.fetchData();
  }

  fetchData() {
    this.dataService.getStationStatus(this.projectId1).subscribe((data) => {
      this.airquinoData1 = data
    });
    this.dataService.getStationStatus(this.projectId2).subscribe((data) => {
      this.airquinoData2 = data
    });
  }
}
