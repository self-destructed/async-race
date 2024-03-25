import { API_URL } from "./config.js";

export default class Car {
  constructor({ id, name, color }) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.status = 'stopped';
    this.velocity = null;
    this.distance = null;
  }

  async startRace() {
    return new Promise(async (res, rej) => {
      try {
        // await this.stopEngine();
        await this.startEngine()
        await this.drive();
        await this.stopEngine();
        res(this)
      } catch (err) {
        await this.stopEngine();
        rej(33333)
      }
    })
  }

  async startEngine() {
    if (this.status !== 'stopped') {
      //err
    }


    const res = await fetch(`${API_URL}/engine?id=${this.id}&status=started`, {
      method: 'PATCH',
    })

    if (res.status !== 200) {
      // err
    }

    this.status = 'started'
    const data = await res.json()


    const { velocity, distance } = data;

    this.distance = distance;
    this.velocity = velocity;

    return this;
  }

  async drive() {
    if (this.status !== 'started') {
      //err
    }


    this.status = 'drive';

    const res = await fetch(`${API_URL}/engine?id=${this.id}&status=drive`, {
      method: 'PATCH',
    })

    if (res.status !== 200) {
      // err
      this.time = null;
    } else {
      this.time = Math.round(this.distance / this.velocity);
    }

    // this.status = 'stopped'

    return this;
  }

  async stopEngine() {
    if (this.status === 'stopped') {
      //err
    }



    const res = await fetch(`${API_URL}/engine?id=${this.id}&status=stopped`, {
      method: 'PATCH',
    })

    if (res.status !== 200) {
      // err
    }

    this.status = 'stopped'

    // method
    this.distance = null;
    this.velocity = null;

    return this;
  }

}

