import { Component, Input } from '@angular/core';

@Component({
  selector: 'aircraft-metadata-dialog',
  templateUrl: './aircraft-metadata-dialog.html',
  styleUrls: ['./aircraft-metadata-dialog.scss']
})
export class AircraftMetadataDialog {
  @Input() aircraft: any;
}
