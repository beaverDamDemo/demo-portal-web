import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, catchError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  private API_URL = `${environment.API_URL}/flights-to-thailand`;

  constructor(private http: HttpClient) { }

  getFlightsToThailand() {
    return this.http.get(`${this.API_URL}`).pipe(
      catchError(error => {
        console.error('Error fetching flights:', error);
        return of([]);
      })
    );
  }
}
