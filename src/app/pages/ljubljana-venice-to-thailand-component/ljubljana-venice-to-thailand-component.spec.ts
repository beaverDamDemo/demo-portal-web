import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjubljanaVeniceToThailandComponent } from './ljubljana-venice-to-thailand-component';

describe('LjubljanaVeniceToThailandComponent', () => {
  let component: LjubljanaVeniceToThailandComponent;
  let fixture: ComponentFixture<LjubljanaVeniceToThailandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LjubljanaVeniceToThailandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LjubljanaVeniceToThailandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
