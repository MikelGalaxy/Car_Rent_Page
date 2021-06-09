import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Car } from '../types/car';
import { CARS } from '../mock-data/car-mock'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:';

  constructor(private httpClient:HttpClient) { }

  getAllCars(): Observable<Car[]> {
    const tasks = of(CARS);
    return tasks;
    // return this.httpClient.get<Car[]>(this.apiUrl);
  }
}
