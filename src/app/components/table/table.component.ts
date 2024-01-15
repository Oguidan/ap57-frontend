import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [DataService],
})
export class TableComponent {
  airqinoData1: any;
  airqinoData2: any;
  mergedData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const stationName1 = 'SMART188';
    this.dataService.getCurrentValues(stationName1).subscribe((data) => {
      this.airqinoData1 = data;
    });
  
    const stationName2 = 'SMART189';
    this.dataService.getCurrentValues(stationName2).subscribe((data) => {
      this.airqinoData2 = data;
  
      if (this.airqinoData1) {
        this.mergeData();
      }
    });
  }
  
  mergeData(): void {
    this.mergedData = this.airqinoData1.values.map((item1: any) => {
      const item2 = this.airqinoData2.values.find(
        (item: any) => item.sensor === item1.sensor
      );
      return {
        sensor: item1.sensor,
        value1: item1.value,
        unit1: item1.unit,
        value2: item2 ? item2.value : null,
        unit2: item2 ? item2.unit : null,
      };
    });
  }
}
