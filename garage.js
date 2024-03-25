import Car from "./car.js"


export default class Garage {
  constructor(cars = []) {
    this.cars = cars.map(car => new Car(car))
  }

  async race() {
    // this.cars.map(car => car.stopEngine());
    const res = this.cars.map(car => car.startRace());
    // const res = await Promise.allSettled(this.cars.map(car => car.startRace()));
    console.log(res)
  }
}