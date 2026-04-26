import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { AircraftMetadataDialog } from './aircraft-metadata-dialog/aircraft-metadata-dialog';
import { FlightDataService } from '../../services/flight-data-service';
import { forkJoin } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-ljubljana-venice-to-thailand-component',
  imports: [DatePipe, AircraftMetadataDialog, CommonModule],
  templateUrl: './ljubljana-venice-to-thailand-component.html',
  styleUrl: './ljubljana-venice-to-thailand-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LjubljanaVeniceToThailandComponent implements OnInit {
  flights = signal<any[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  hoveredAircraft = signal<any | null>(null);
  hoveredPosition = signal<{ x: number, y: number; } | null>(null);

  showAircraftMetadata(aircraft: any, event: MouseEvent) {
    this.hoveredAircraft.set(aircraft);
    this.hoveredPosition.set({ x: event.clientX, y: event.clientY });
  }

  hideAircraftMetadata() {
    this.hoveredAircraft.set(null);
    this.hoveredPosition.set(null);
  }

  constructor(private flightDataService: FlightDataService) { }

  ngOnInit() {
    this.flightDataService.getFlightsToThailand().subscribe({
      next: (flights) => {
        if (!flights || !Array.isArray(flights)) {
          this.error.set('No flights found.');
          this.flights.set([]);
        } else {
          // Fix date strings: pad hour to two digits if needed
          const fixedFlights = flights.map(flight => {
            const fixDate = (dateStr: string) =>
              dateStr.replace(/T(\d:)/, 'T0$1');
            return {
              ...flight,
              departure: {
                ...flight.departure,
                scheduled: fixDate(flight.departure.scheduled)
              },
              arrival: {
                ...flight.arrival,
                scheduled: fixDate(flight.arrival.scheduled)
              }
            };
          });
          this.flights.set(fixedFlights);
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load flights.');
        this.flights.set([]);
        this.loading.set(false);
      }
    });
  }
}
