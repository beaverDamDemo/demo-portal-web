import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private API_URL = `${environment.API_URL}/cars`;

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}`);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.API_URL}/${id}`);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.API_URL}`, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.API_URL}/${id}`, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  getCarsByPriceRange(minPrice: number, maxPrice: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/price`, {
      params: { minPrice, maxPrice }
    });
  }

  getCarsByBrand(brand: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/brand`, {
      params: { brand }
    });
  }

  getCarsWithPowerGreaterThan(powerPs: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/power`, {
      params: { powerPs }
    });
  }

  getCarsByWheelDrive(wheelDrive: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/drive`, {
      params: { wheelDrive }
    });
  }

  getCarsWithMinimumNumberSeats(n: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/number_seats`, {
      params: { n }
    });
  }

  getCarsByBrandFuelAndPrice(brand: string, fuelType: string, minPrice: number, maxPrice: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/filter`, {
      params: { brand, fuel: fuelType, minPrice, maxPrice }
    });
  }
}
