import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl = 'http://44.201.227.0:1000';  // Replace with your Golang backend URL

  constructor(private http: HttpClient) { }

  getCurrentValues(stationName: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getCurrentValues/${stationName}`;
    return this.http.get(apiUrl);
  }
  
  getHourlyAvg(stationName: string, dt_from_string: string, dt_to_string: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getHourlyAvg/${stationName}/${dt_from_string}/${dt_to_string}`;
    return this.http.get(apiUrl);
  }
}
