import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftMetadataDialog } from './aircraft-metadata-dialog';

describe('AircraftMetadataDialog', () => {
  let component: AircraftMetadataDialog;
  let fixture: ComponentFixture<AircraftMetadataDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftMetadataDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftMetadataDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
