let getNewCar = {
  city: "Toronto",
  passengers: 0,
  gas: 100,
}

console.log(getNewCar);

function addCar(cars, newCar) {
  cars.push(newCar);
  return `Adding new car to fleet. Fleet size is now ${cars.length}.`;
}

let cars = [
]

console.log(addCar(cars, getNewCar));
console.log(addCar(cars, getNewCar));
console.log(addCar(cars, getNewCar));
