import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import DisplayService from './display.service';
import { Plane } from './plane';
import { Ship } from './ship';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayService]
})
export class AppComponent implements OnInit {
  plane!: Plane;
  car!: Car;
  ship!: Ship;
  selectedObject: string = '';

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
    this.plane = this.displayService.getPlane();
    this.car = this.displayService.getCar();
    this.ship = this.displayService.getShip();
  }

  changeSelectedObject(event: Event): void {
    this.selectedObject = (event.target as HTMLElement).innerText;
  }
}
