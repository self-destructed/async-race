import { API_URL } from "./config.js";

export default class Car {
  constructor({ id, name, color }) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.status = 'stopped';
    this.velocity = null;
    this.distance = null;
    this.time = null;
  }

  async startRace() {
    return new Promise(async (res, rej) => {
      const isStarted = await this.startEngine()
      const isDrive = await this.drive();
      this.stopEngine();

      if (isStarted && isDrive) {
        res(this)
      } else {
        res(null)
      }
    })
  }

  async startEngine() {
    return new Promise(async (res, rej) => {
      // if (this.status !== 'stopped') {
      //   res(false)
      // }

      const response = await fetch(`${API_URL}/engine?id=${this.id}&status=started`, {
        method: 'PATCH',
      })

      if (response.status !== 200) {
        // err
        res(false)
      }

      this.status = 'started'
      const data = await response.json()

      const { velocity, distance } = data;

      this.distance = distance;
      this.velocity = velocity;

      res(true)
    })

  }

  async drive() {
    return new Promise(async (res, rej) => {
      if (this.status !== 'started') {
        res(false)
      }

      // this.status = 'drive';

      const response = await fetch(`${API_URL}/engine?id=${this.id}&status=drive`, {
        method: 'PATCH',
      })


      if (response.status !== 200) {
        // err
        res(false)
      }

      this.status = 'drive';
      this.time = Math.round(this.distance / this.velocity);
      // this.status = 'stopped'

      res(true)
    })

  }

  async stopEngine() {
    return new Promise(async (res, rej) => {
      if (this.status === 'stopped') {
        res(false)
      }

      const response = await fetch(`${API_URL}/engine?id=${this.id}&status=stopped`, {
        method: 'PATCH',
      })

      if (response.status !== 200) {
        // err
        res(false)
      }

      this.status = 'stopped'
      return this;
    })
  }

  resetStats() {
    this.distance = null;
    this.velocity = null;
    this.time = null;
  }

}

