import {Input, Component, OnInit } from '@angular/core';
import { Plane } from '../plane';

@Component({
  selector: 'app-PlaneViewer',
  templateUrl: './PlaneViewer.component.html',
  styleUrls: ['./PlaneViewer.component.css']
})
export class PlaneViewerComponent implements OnInit {
  @Input()
  plane!: Plane;
  @Input()
  url!: string;
  constructor() { }

  ngOnInit() {
  }

}
