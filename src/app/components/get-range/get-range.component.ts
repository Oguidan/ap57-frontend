import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-get-range',
  templateUrl: './get-range.component.html',
  styleUrl: './get-range.component.css',
})
export class GetRangeComponent {
  RangeData1: any;
  RangeData2: any;

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
      .getRange(this.station1_name, this.dt1_from_string, this.dt1_to_string)
      .subscribe((data) => {
        this.RangeData1 = data;
      });
    this.dataService
      .getRange(this.station2_name, this.dt2_from_string, this.dt2_to_string)
      .subscribe((data) => {
        this.RangeData2 = data;
      });
  }
}
