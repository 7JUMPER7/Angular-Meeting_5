import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-CarViewer',
  templateUrl: './CarViewer.component.html',
  styleUrls: ['./CarViewer.component.css']
})
export class CarViewerComponent implements OnInit {
  @Input()
  car!: Car;
  @Input()
  url!: string;
  constructor() { }

  ngOnInit() {
  }

}
