import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-session-info',
  standalone: true,
  imports: [],
  templateUrl: './session-info.component.html',
  styleUrl: './session-info.component.css'
})
export class SessionInfoComponent {
  airquinoData: any;

  constructor(private dataservice: DataService) {}

  // ngOnInit
}
