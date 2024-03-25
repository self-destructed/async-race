import App from "./app.js";
import Car from "./car.js";
import Garage from "./garage.js";


const app = new App()
app.init();
// console.log(app)
// const car = new Car(1, "Tesla", "#e6e6fa")

// console.log(car)
// console.log(car)
// await car.startRace()
// console.log(car

// const API_URL = 'http://127.0.0.1:3000';

// const $app = document.getElementById('app');


// const fetchGarageCars = async () => {
//   const res = await fetch(`${API_URL}/garage`);
//   return res.json()
// }

// const createGarageList = arr => {
//   const ul = document.createElement('ul');

//   ul.append(...arr.map(createGarageListItem));

//   return ul;
// }

// class DragRace {
//   constructor(id) {
//     this.id = id;
//   }

//   async start() {
//     const res = await fetch(`${API_URL}/engine?id=${this.id}&status=started`, {
//       method: 'PATCH',
//     })

//     const data = await res.json()

//     return data;
//   }

//   async drive() {
//     const res = await fetch(`${API_URL}/engine?id=${this.id}&status=drive`, {
//       method: 'PATCH',
//     })

//     // const data = await res.json()

//     return res;
//   }

//   async run() {
//     const { velocity, distance } = await this.start()
//     const startDate = Date.now();
//     console.log(velocity, distance)
//     const driveResponse = await this.drive();
//     const endDate = Date.now()
//     console.log(driveResponse)

//     if (driveResponse.ok) {
//       console.log('time diff:', endDate - startDate)
//       console.log('calc dist/vel:', distance / velocity)
//     }

//     console.log(driveResponse)

//   }

// }

// const dr1 = new DragRace(1)
// dr1.run()


// const createDragRace = (id, color) => {
//   const div = document.createElement('div');

//   const startBtn = document.createElement('button');

//   const endBtn = document.createElement('button');

// }

// const createGarageListItem = item => {
//   const { name, color, id } = item;
//   const li = document.createElement('li');
//   const info = document.createElement('span');
//   info.textContent = `id: ${id} name: ${name}`
//   // createDragRace

//   const icon = document.createElement('span')
//   icon.textContent = '▶'
//   icon.style.color = color;

//   li.append(info, icon)

//   return li;
// }

// const renderGarage = (cars) => {
//   $app.replaceChildren(createGarageList(cars));
// }


// fetchGarageCars().then(renderGarage)