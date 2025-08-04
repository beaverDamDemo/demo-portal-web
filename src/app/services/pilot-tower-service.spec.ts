import { TestBed } from '@angular/core/testing';

import { PilotTowerService } from './pilot-tower-service';

describe('PilotTowerService', () => {
  let service: PilotTowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotTowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
