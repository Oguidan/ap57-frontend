import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-get-single-day',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './get-single-day.component.html',
  styleUrl: './get-single-day.component.css'
})
export class GetSingleDayComponent {
  airquinoData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const stationName = 'SMART188';
    const dtFromString = '2024-01-14'
    this.dataService.getSingleDay(stationName, dtFromString).subscribe((data) => {
      this.airquinoData = data;
    })
  }
}
