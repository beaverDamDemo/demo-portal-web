import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  constructor(private http: HttpClient) { }

  getFlightsToThailand() {
    // Example with error handling for real HTTP:
    return this.http.get('/api/flights-to-thailand').pipe(
      catchError(error => {
        console.error('Error fetching flights:', error);
        return of([]);
      })
    );
  }

  airplanesTemp = [
    {
      "model": "Boeing 777-300ER",
      "manufacturer": "Boeing",
      "first_flight": "1997",
      "capacity": 396,
      "range_km": 13650,
      "engines": "2 × GE90-115B turbofans",
      "length_m": 73.9,
      "wingspan_m": 64.8,
      "height_m": 18.5
    }
    ,
    {
      "model": "Airbus A380-800",
      "manufacturer": "Airbus",
      "first_flight": "2005",
      "capacity": 525,
      "range_km": 15200,
      "engines": "4 × Rolls-Royce Trent 900",
      "length_m": 72.7,
      "wingspan_m": 79.8,
      "height_m": 24.1
    }
    , {
      "model": "Airbus A350-900",
      "manufacturer": "Airbus",
      "first_flight": "2013",
      "capacity": 325,
      "range_km": 15000,
      "engines": "2 × Rolls-Royce Trent XWB",
      "length_m": 66.8,
      "wingspan_m": 64.8,
      "height_m": 17.1
    }

  ];

  getAircraftSpecs(model: string) {
    // Example with error handling for real HTTP:
    // return this.http.get(`/api/aircraft/${model}`).pipe(
    //   catchError(error => {
    //     console.error('Error fetching aircraft specs:', error);
    //     return of(null);
    //   })
    // );
    return of({
      "model": "Boeing 777-300ER",
      "manufacturer": "Boeing",
      "first_flight": "1997",
      "capacity": 396,
      "range_km": 13650,
      "engines": "2 × GE90-115B turbofans",
      "length_m": 73.9,
      "wingspan_m": 64.8,
      "height_m": 18.5
    }
    );
  }
}
