import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-get-range',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-range.component.html',
  styleUrl: './get-range.component.css'
})
export class GetRangeComponent {
  RangeData: any;

  station_name = "SMART188";
  dt_from_string = "2024-01-05";
  dt_to_string = "2024-01-06";

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.dataService.getRange(this.station_name, this.dt_from_string, this.dt_to_string).subscribe(
      (data) => {
        this.RangeData = data;
        console.log(this.RangeData);
      }
    )
  }
}
