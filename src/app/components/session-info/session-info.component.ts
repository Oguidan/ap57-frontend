import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-session-info',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './session-info.component.html',
  styleUrl: './session-info.component.css'
})
export class SessionInfoComponent {
  airquinoData: any;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    const projectName = 'AQ54';
    this.dataservice.getSessionInfo(projectName).subscribe((data) => {
      this.airquinoData = data; 
    })
  }
}
