import { Plane } from "./plane";
import { Car } from "./car";
import { Ship } from "./ship";

export default class DisplayService {
  plane = new Plane();
  car = new Car();
  ship = new Ship();

  getPlane(): Plane {
    return this.plane;
  }
  getCar(): Car {
    return this.car;
  }
  getShip(): Ship {
    return this.ship;
  }
}
