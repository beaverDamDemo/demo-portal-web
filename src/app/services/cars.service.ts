import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseUrl = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/${id}`);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}`, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/${id}`, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getCarsByPriceRange(minPrice: number, maxPrice: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/price`, {
      params: { minPrice, maxPrice }
    });
  }

  getCarsByBrand(brand: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/brand`, {
      params: { brand }
    });
  }

  getCarsWithPowerGreaterThan(powerPs: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/power`, {
      params: { powerPs }
    });
  }

  getCarsByWheelDrive(wheelDrive: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/drive`, {
      params: { wheelDrive }
    });
  }

  getCarsWithMinimumNumberSeats(n: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/number_seats`, {
      params: { n }
    });
  }

  getCarsByBrandFuelAndPrice(brand: string, fuelType: string, minPrice: number, maxPrice: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/filter`, {
      params: { brand, fuel: fuelType, minPrice, maxPrice }
    });
  }
}
