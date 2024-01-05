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
}
