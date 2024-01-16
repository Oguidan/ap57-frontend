import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-get-single-day',
  templateUrl: './get-single-day.component.html',
  styleUrl: './get-single-day.component.css',
})
export class GetSingleDayComponent {
  airquinoData1: any;
  airquinoData2: any;

  station1Name = 'SMART188';
  station2Name = 'SMART189';
  dt1_from_string: string = '';
  dt2_from_string: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService
      .getSingleDay(this.station1Name, this.dt1_from_string)
      .subscribe((data) => {
        this.airquinoData1 = data;
      });

    this.dataService
      .getSingleDay(this.station2Name, this.dt2_from_string)
      .subscribe((data) => {
        this.airquinoData2 = data;
      });
  }
}
