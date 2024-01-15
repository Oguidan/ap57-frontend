import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station-status',
  standalone: true,
  imports: [],
  templateUrl: './station-status.component.html',
  styleUrl: './station-status.component.css'
})
export class StationStatusComponent {
  airquinoData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void{
    const projectId = "283164601";
    this.dataService.getStationStatus(projectId).subscribe((data) => {
      this.airquinoData = data
    })
  }
}
