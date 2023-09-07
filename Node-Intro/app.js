var name = "Jason Maingot";

var myNumber = 22;

const port = 3000;

// Objects
var car = {
    make:"Audi",
    model:"55",
    year:2023
}

// Functions or Methods that can return value
function addTwo(someNumber) {
    return someNumber + 2;
}

// Functions that perform a task
function outputSomething(output) {
    console.log("You wrote " + output);
}

outputSomething("Write something here.. I'm having fun with node");

var result = addTwo(10);

outputSomething(result);

outputSomething(addTwo(10));

console.log("Hello class!");

console.log(car);

// Access object properties with .
outputSomething(car.make);

console.log("My name is " + name + " and mu favorite number is " + myNumber);

console.log(name + myNumber);
console.log(myNumber + myNumber);
console.log(myNumber + "2");