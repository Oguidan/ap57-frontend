import { Component, NgModule, OnInit } from '@angular/core';
import csvParser from 'csv-parser';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-historical',
  standalone: false,
  // imports: [NgFor, ReactiveFormsModule],
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css',
})
export class HistoricalComponent implements OnInit {
  csvData: any[] = [];

  station_name = 'SMART188';
  // checkoutForm = this.formBuilder.group({
    // name: '',
    // // address: ''
  // });
  // name = new FormControl('');
  // dt_from_string = this.checkoutForm.value.name;
  dt_from_string: any;
  dt_to_string = '';

  // onKey1(value: string) {
  // this.dt_from_string = value;
  // }

  onKey2(value: string) {
    this.dt_to_string = value;
    console.log(this.dt_from_string);
  }

  constructor(private dataService: DataService, private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService
  .getHourlyAvg(this.station_name, this.dt_from_string, this.dt_to_string)
  .subscribe(
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
