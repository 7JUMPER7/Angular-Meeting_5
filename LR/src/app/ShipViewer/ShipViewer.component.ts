import { Component, Input, OnInit } from '@angular/core';
import { Ship } from '../ship';

@Component({
  selector: 'app-ShipViewer',
  templateUrl: './ShipViewer.component.html',
  styleUrls: ['./ShipViewer.component.css']
})
export class ShipViewerComponent implements OnInit {
  @Input()
  ship!: Ship;
  @Input()
  url!: string;
  constructor() { }

  ngOnInit() {
  }

}
