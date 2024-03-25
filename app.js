import { API_URL } from "./config.js";
import Garage from "./garage.js";


export default class App {
  constructor() {
    this.init()
  }

  async init() {
    const cars = await this.fetchCars();
    this.garage = new Garage(cars);
    this.garage.race();
  }

  async fetchCars() {
    const res = await fetch(`${API_URL}/garage`);
    // if err []

    return res.json()
  }

}