import { Component, inject, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../interfaces/car.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cars',
  imports: [CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars implements OnInit {
  private carsService = inject(CarsService);

  cars: Car[] = [];
  selectedCar?: Car;

  brandFilter = '';
  minPrice?: number;
  maxPrice?: number;
  powerFilter?: number;
  wheelDriveFilter = '';
  minSeats?: number;
  fuelTypeFilter = '';
  advancedBrand = '';
  advancedFuel = '';
  advancedMinPrice?: number;
  advancedMaxPrice?: number;
  carIdToLoad?: number;

  ngOnInit(): void {
    this.loadAllCars();
  }

  loadAllCars(): void {
    this.carsService.getAllCars().subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to load cars', err)
    });
  }
  loadCarById(): void {
    if (!this.carIdToLoad) return;
    this.carsService.getCarById(this.carIdToLoad).subscribe({
      next: (car) => this.selectedCar = car,
      error: (err) => console.error(`Failed to load car with ID ${this.carIdToLoad}`, err)
    });
  }

  filterByBrand(): void {
    this.carsService.getCarsByBrand(this.brandFilter).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to filter by brand', err)
    });
  }

  filterByPrice(): void {
    if (this.minPrice == null || this.maxPrice == null) return;
    this.carsService.getCarsByPriceRange(this.minPrice, this.maxPrice).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to filter by price range', err)
    });
  }

  filterByPower(): void {
    if (!this.powerFilter) return;
    this.carsService.getCarsWithPowerGreaterThan(this.powerFilter).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to filter by power', err)
    });
  }

  filterByDrive(): void {
    this.carsService.getCarsByWheelDrive(this.wheelDriveFilter).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to filter by wheel drive', err)
    });
  }

  filterBySeats(): void {
    if (!this.minSeats) return;
    this.carsService.getCarsWithMinimumNumberSeats(this.minSeats).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to filter by number of seats', err)
    });
  }

  advancedFilter(): void {
    if (!this.advancedBrand || !this.advancedFuel || this.advancedMinPrice == null || this.advancedMaxPrice == null) return;
    this.carsService.getCarsByBrandFuelAndPrice(
      this.advancedBrand,
      this.advancedFuel,
      this.advancedMinPrice,
      this.advancedMaxPrice
    ).subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to apply advanced filter', err)
    });
  }

  deleteCar(id: number): void {
    this.carsService.deleteCar(id).subscribe({
      next: () => {
        this.cars = this.cars.filter(car => car.id !== id);
      },
      error: (err) => console.error(`Failed to delete car with ID ${id}`, err)
    });
  }
}
