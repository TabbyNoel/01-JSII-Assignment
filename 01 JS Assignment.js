// Author: John S

// Engine class definition
class Engine {
    constructor(cylinders) {
        this.cylinders = cylinders;
        this.running = false;
    }

    // Method to start the engine
    start() {
        if (this.running) {
            console.log("The engine is already running.");
        } else {
            this.running = true;
            console.log("Engine started.");
        }
    }

    // Method to stop the engine
    stop() {
        if (!this.running) {
            console.log("The engine is already off.");
        } else {
            this.running = false;
            console.log("Engine stopped.");
        }
    }
}

// Car class definition
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.odometer = 0;
        this.engine = new Engine(4); // Assuming a 4-cylinder engine
    }

    // Method to start the car
    startCar() {
        this.engine.start();
    }

    // Method to drive the car
    drive(distance) {
        if (this.engine.running) {
            this.odometer += distance;
            console.log(`Drove ${distance} miles. Odometer: ${this.odometer} miles.`);
        } else {
            console.log("Can't drive, engine is off.");
        }
    }

    // Method to stop the car
    stopCar() {
        this.engine.stop();
    }
}

// Creating and using a car object
let myCar = new Car("Honda", "Civic", 2022);
myCar.startCar();
myCar.drive(5);
myCar.stopCar();
