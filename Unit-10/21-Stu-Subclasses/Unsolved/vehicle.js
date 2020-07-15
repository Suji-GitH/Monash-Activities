class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}
module.exports = Vehicle;

class car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "Beep!");


    this.color = color;
    this.passengers = passengers;

    checkPassengers = () => {
      if(passengers > 4){
        console.log("Too Many Passengers")
      }
    };
    useHorn = () => {
      console.log(this.sound);
    };
  }
}

const car = new car("black", 3);
car.checkPassengers();
car.useHorn();