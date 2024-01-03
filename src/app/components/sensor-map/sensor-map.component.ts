import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-map',
  templateUrl: './sensor-map.component.html',
  styleUrls: ['./sensor-map.component.css']
})
export class SensorMapComponent implements OnInit {
  sensors: any[] | undefined;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(data => {
      this.sensors = data;
      // Initialize and display the map with sensor locations
    });
  }
}
