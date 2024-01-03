import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors: any[] | undefined;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(data => {
      this.sensors = data;
    });
  }
}
