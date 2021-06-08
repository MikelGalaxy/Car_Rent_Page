import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-car-mini-card',
  templateUrl: './car-mini-card.component.html',
  styleUrls: ['./car-mini-card.component.css']
})
export class CarMiniCardComponent implements OnInit {

  @Input() car:Car;

  constructor() { }

  ngOnInit(): void {
  }

}
