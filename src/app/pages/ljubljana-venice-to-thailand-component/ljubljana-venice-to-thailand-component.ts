import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data-service';
import { forkJoin } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ljubljana-venice-to-thailand-component',
  imports: [DatePipe],
  templateUrl: './ljubljana-venice-to-thailand-component.html',
  styleUrl: './ljubljana-venice-to-thailand-component.scss'
})
export class LjubljanaVeniceToThailandComponent implements OnInit {
  flights: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private flightDataService: FlightDataService) { }

  ngOnInit() {
    this.flightDataService.getFlightsToThailand().subscribe({
      next: (flights) => {
        if (!flights || !Array.isArray(flights)) {
          this.error = 'No flights found.';
          this.loading = false;
          return;
        }
        const aircraftModels = flights.map(f => f.aircraft?.model);
        forkJoin(
          aircraftModels.map(model => this.flightDataService.getAircraftSpecs(model))
        ).subscribe({
          next: (aircraftSpecs) => {
            this.flights = flights.map((flight, i) => ({
              ...flight,
              aircraftSpecs: aircraftSpecs[i]
            }));
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Failed to load aircraft specs.';
            this.loading = false;
          }
        });
      },
      error: (err) => {
        this.error = 'Failed to load flights.';
        this.loading = false;
      }
    });
  }
}
