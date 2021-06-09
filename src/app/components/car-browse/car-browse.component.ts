import { Component, OnInit } from '@angular/core';
import { Car } from '../../types/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-browse',
  templateUrl: './car-browse.component.html',
  styleUrls: ['./car-browse.component.css']
})
export class CarBrowseComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((cars) => this.cars = cars);
  }

}
