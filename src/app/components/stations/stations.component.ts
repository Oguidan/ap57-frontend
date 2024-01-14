import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.css'
})
export class StationsComponent {
  airquinoData: any;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    const projectName = 'AQ54';
    this.dataservice.getStations(projectName).subscribe((data) => {
      this.airquinoData = data;
    })
  }
}
