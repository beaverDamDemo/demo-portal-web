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
    // return this.http.get('/api/thailand-routes').pipe(
    //   catchError(error => {
    //     console.error('Error fetching flights:', error);
    //     return of([]);
    //   })
    // );
    return of([
      {
        "flight_number": "TG941",
        "airline": "Thai Airways",
        "departure": {
          "airport": "Ljubljana Jože Pučnik Airport",
          "iata": "LJU",
          "scheduled": "2024-05-12T09:30:00Z"
        },
        "arrival": {
          "airport": "Bangkok Suvarnabhumi Airport",
          "iata": "BKK",
          "scheduled": "2024-05-12T23:55:00Z"
        },
        "aircraft": {
          "model": "B777-300ER",
          "iata": "77W"
        },
        "status": "scheduled"
      },
      {
        "flight_number": "EK136",
        "airline": "Emirates",
        "departure": {
          "airport": "Venice Marco Polo Airport",
          "iata": "VCE",
          "scheduled": "2024-05-12T15:25:00Z"
        },
        "arrival": {
          "airport": "Bangkok Suvarnabhumi Airport",
          "iata": "BKK",
          "scheduled": "2024-05-13T07:10:00Z"
        },
        "aircraft": {
          "model": "A380-800",
          "iata": "388"
        },
        "status": "scheduled"
      },
      {
        "flight_number": "QR306",
        "airline": "Qatar Airways",
        "departure": {
          "airport": "Venice Marco Polo Airport",
          "iata": "VCE",
          "scheduled": "2024-05-12T13:05:00Z"
        },
        "arrival": {
          "airport": "Phuket International Airport",
          "iata": "HKT",
          "scheduled": "2024-05-13T08:40:00Z"
        },
        "aircraft": {
          "model": "A350-900",
          "iata": "359"
        },
        "status": "scheduled"
      }
    ]
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
