import { Component, Input } from '@angular/core';

@Component({
  selector: 'aircraft-metadata-dialog',
  template: `
    <div class="aircraft-metadata-dialog">
      <h3>Aircraft Details</h3>
      <ul *ngIf="aircraft">
        <li><strong>Model:</strong> {{ aircraft.model }}</li>
        <li><strong>Type:</strong> {{ aircraft.type }}</li>
        <li><strong>Manufacturer:</strong> {{ aircraft.manufacturer }}</li>
        <li><strong>Registration:</strong> {{ aircraft.registration }}</li>
        <li><strong>ICAO24:</strong> {{ aircraft.icao24 }}</li>
        <li><strong>Serial Number:</strong> {{ aircraft.serialNumber }}</li>
        <li><strong>Owner:</strong> {{ aircraft.owner }}</li>
        <li><strong>Built:</strong> {{ aircraft.built }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .aircraft-metadata-dialog {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      padding: 1rem;
      min-width: 220px;
      position: absolute;
      z-index: 1000;
    }
    h3 { margin-top: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    li { margin-bottom: 0.5rem; }
  `]
})
export class AircraftMetadataDialogComponent {
  @Input() aircraft: any;
}
