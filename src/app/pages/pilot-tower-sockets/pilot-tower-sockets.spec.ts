import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotTowerSockets } from './pilot-tower-sockets';

describe('PilotTowerSockets', () => {
  let component: PilotTowerSockets;
  let fixture: ComponentFixture<PilotTowerSockets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotTowerSockets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotTowerSockets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
