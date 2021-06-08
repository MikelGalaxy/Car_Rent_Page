import { Component, OnInit } from '@angular/core';
import { Car } from '../../types/car';
import { CARS } from '../../mock-data/car-mock';

@Component({
  selector: 'app-car-browse',
  templateUrl: './car-browse.component.html',
  styleUrls: ['./car-browse.component.css']
})
export class CarBrowseComponent implements OnInit {

  cars: Car[] = CARS;

  constructor() { }

  ngOnInit(): void {
  }

}
