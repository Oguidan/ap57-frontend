import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl = 'http://localhost:8080';  // Replace with your Golang backend URL

  constructor(private http: HttpClient) { }

  getCurrentValues(stationName: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getCurrentValues/${stationName}`;
    return this.http.get(apiUrl);
  }
  
  getHistoricalValues(stationName: string, dt_from_string: string, dt_to_string: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getHistoricalValues/${stationName}/${dt_from_string}/${dt_to_string}`;
    return this.http.get(apiUrl);
  }
}
