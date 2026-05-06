
// OBJECT-ORIENTED PROGRAMMING (OOPS) IN JAVASCRIPT:

// CLASS & OBJECT IN JAVASCRIPT
/*
1. CLASS

Definition:
A Class is a blueprint/template used to create objects.

It contains:
- Properties (variables)
- Methods (functions)

Real-world Example:
Class = Car Design Blueprint
Object = Actual Car
*/


// Example 1: Student Class
class Student {

    // constructor initializes object data
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


// Creating Objects
const s1 = new Student("Arun", 22);
const s2 = new Student("Gautham", 21);


console.log("=== Class & Object Example 1 ===");

s1.introduce();
s2.introduce();




/*
2. OBJECT

Definition:
An Object is an instance of a class.

Objects contain:
- Actual values
- Access to methods from the class
*/


// Example 2: Car Class
class Car {

    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    details() {
        console.log(`Car Brand: ${this.brand}`);
        console.log(`Car Color: ${this.color}`);
    }
}


// Creating Objects
const car1 = new Car("BMW E39", "Black");
const car2 = new Car("Ferrari F40", "White");


console.log("\n=== Class & Object Example 2 ===");

car1.details();

console.log("");

car2.details();




/*
3. SIMPLE OBJECT WITHOUT CLASS

JavaScript also allows direct object creation using object literals.
*/


const employee = {
    name: "Arun",
    role: "SDET Trainee",

    work() {
        console.log(`${this.name} is working as ${this.role}`);
    }
};


console.log("\n=== Direct Object Example ===");

console.log("Employee Name:", employee.name);

employee.work();




/*

KEY DIFFERENCE BETWEEN CLASS & OBJECT

Class:
- Blueprint/template
- Used to create objects

Object:
- Real instance created from class
- Holds actual values

Example:
class Student {}   -> Blueprint
new Student()      -> Object
*/


console.log("\n=== CLASS & OBJECT COMPLETED SUCCESSFULLY ===");

// 1. ENCAPSULATION

/*
Definition:
Encapsulation means wrapping data and methods into a single unit
(class/object) and restricting direct access to the data.
*/


// Example 1: Bank Account
class BankAccount {
    #balance = 0; // private field

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

acc.deposit(500);

console.log("=== Encapsulation Example 1 ===");
console.log("Balance:", acc.getBalance());


// Example 2: Student
class Std {
    #marks;

    constructor(marks) {
        this.#marks = marks;
    }

    getMarks() {
        return this.#marks;
    }
}

const s_1 = new Std(95);

console.log("\n=== Encapsulation Example 2 ===");
console.log("Marks:", s_1.getMarks());


// 2. INHERITANCE

/*
Definition:
Inheritance allows one class to acquire properties and methods
from another class.
*/


// Example 1: Animal -> Dog
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

const d = new Dog();

console.log("\n=== Inheritance Example 1 ===");
d.sound();
d.bark();


// Example 2: Vehicle -> Car
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Cars extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

const c = new Cars();

console.log("\n=== Inheritance Example 2 ===");
c.start();
c.drive();



// 3. POLYMORPHISM

/*
Definition:
Polymorphism means the same method behaves differently
for different objects/classes.
*/


// Example 1: Method Overriding
class Animal2 {
    sound() {
        console.log("Animal sound");
    }
}

class Cat extends Animal2 {
    sound() {
        console.log("Meow");
    }
}

const cat = new Cat();

console.log("\n=== Polymorphism Example 1 ===");
cat.sound();


// Example 2: Shapes
class Shape {
    area() {
        console.log("Calculating area");
    }
}

class Circle extends Shape {
    area() {
        console.log("Area of Circle");
    }
}

class Square extends Shape {
    area() {
        console.log("Area of Square");
    }
}

console.log("\n=== Polymorphism Example 2 ===");

new Circle().area();
new Square().area();


// 4. ABSTRACTION

/*
Definition:
Abstraction means hiding internal implementation details
and showing only essential functionality.
*/


// Example 1: Car Engine
class CarEngine {
    start() {
        this.#igniteEngine();
        console.log("Car started");
    }

    #igniteEngine() {
        console.log("Engine ignited");
    }
}

const car = new CarEngine();

console.log("\n=== Abstraction Example 1 ===");
car.start();


// Example 2: Coffee Machine
class CoffeeMachine {
    makeCoffee() {
        this.#boilWater();
        console.log("Coffee is ready");
    }

    #boilWater() {
        console.log("Boiling water...");
    }
}

const coffee = new CoffeeMachine();

console.log("\n=== Abstraction Example 2 ===");
coffee.makeCoffee();


console.log("\n=== OOPS CONCEPTS COMPLETED SUCCESSFULLY ===");