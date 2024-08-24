const car = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    speed: 0,
    started: false,
    passengers: 0,  // Corrected typo from 'passenders'

    start: function() {
        if (!this.started) {
            this.started = true;
            console.log(`The ${this.make} ${this.model} has started.`);
        }
    },

    stop: function() {
        if (this.started) {
            this.started = false;
            console.log(`The ${this.make} ${this.model} has stopped.`);
        }
    },

    brake: function() {
        if (this.speed > 0) {
            this.speed = 0;
            console.log(`The ${this.make} ${this.model} has braked.`);
        }
    },

    drive: function(speed) {
        if (this.started) {
            this.speed = speed;
            console.log(`The ${this.make} ${this.model} is driving at ${speed} miles an hour.`);
        } else {
            console.log(`The car must be started before you can drive.`);
        }
    }
};

console.log(car);
console.log(`${car.make} ${car.model}`);
car.speed = 100; // Setting speed to 100, assuming you want to display it before driving.
console.log(`The ${car.make} ${car.model} is running at ${car.speed} miles an hour`);
car.passengers = 3;
console.log(car.passengers);

car.start();
car.drive(50); // You must specify a speed value when calling drive
car.brake();
car.stop();
