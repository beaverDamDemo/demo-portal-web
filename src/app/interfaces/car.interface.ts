export interface Car {
  id?: number;
  brand?: string;
  model?: string;
  yearOfIntroduction?: number;
  price?: number;
  ccm?: number;
  cyl?: number;
  fuelType?: string; // Java uses Character, but Angular uses string
  powerPs?: number;
  powerRpm?: number;
  torqueKgm?: number;
  torqueRpm?: number;
  wheelDrive?: string; // Java uses Character
  weightKg?: number;
  numberSeats?: number;
  kmh?: number;
  acceleration0To100?: number;
  fuelConsumptionKmPerL?: number;
  co2Emission?: number;
}
