import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl = 'http://localhost:8080';  // Replace with Golang backend URL

  constructor(private http: HttpClient) { }

  getCurrentValues(stationName: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getCurrentValues/${stationName}`;
    return this.http.get(apiUrl);
  }
  
  getHourlyAvg(stationName: string, dt_from_string: string, dt_to_string: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getHourlyAvg/${stationName}/${dt_from_string}/${dt_to_string}`;
    return this.http.get(apiUrl);
  }

  getRange(stationName: string, dt_from_string: string, dt_to_string: string): Observable<any> {
    const apiUrl = `${this.backendUrl}/api/getRange/${stationName}/${dt_from_string}/${dt_to_string}`;
    return this.http.get(apiUrl);
  }

  getSessionInfo(projectName: string) {
    const apiURL = `${this.backendUrl}/api/getSessionInfo/${projectName}`;
    return this.http.get(apiURL);
  }

  getSingleDay(stationName: string, dt_from_string: string): Observable<any> {
    const apiURL = `${this.backendUrl}/api/getSingleDay/${stationName}/${dt_from_string}`;
    return this.http.get(apiURL);
  }

  getStations(projectName: string): Observable<any> {
    const apiURL = `${this.backendUrl}/api/getStations/${projectName}`;
    return this.http.get(apiURL);
  }

  getStationStatus(projectId: string): Observable<any> {
    const apiURL = `${this.backendUrl}/api/getStationStatus/${projectId}`;
    return this.http.get(apiURL);
  }
}
