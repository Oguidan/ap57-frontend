import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrl: './session-info.component.css',
  providers: [DataService],
})
export class SessionInfoComponent {
  airquinoData: any;
  projectName = 'AQ54';

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataservice.getSessionInfo(this.projectName).subscribe((data) => {
      this.airquinoData = data;
    });
  }
}
