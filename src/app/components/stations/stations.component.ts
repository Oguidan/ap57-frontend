import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.css',
})
export class StationsComponent {
  airquinoData: any;

  projectName = 'AQ54';

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataservice.getStations(this.projectName).subscribe((data) => {
      this.airquinoData = data;
    });
  }
}
