// ==========================================================
// PROTOTYPE OBJECTS
// ==========================================================

/*
Definition:
Prototype is a mechanism through which objects inherit
properties and methods from another object.
*/


// ----------------------------------------------------------
// EXAMPLE 1: PROTOTYPE METHOD
// ----------------------------------------------------------

/*
Question:
Add shared method using prototype.
*/


function Start() {

    console.log("Car Started");
}


// Creating objects
const c1 = new Start();
const c2 = new Start();


// Adding shared method
Start.prototype.stop = function () {

    console.log("Car Stopped");
};


console.log("\n=== Prototype Method Example ===");

c1.stop();
c2.stop();


/*
Explanation:
Both c1 and c2 share the same stop() method
through prototype.
*/


// ----------------------------------------------------------
// EXAMPLE 2: OBJECT.CREATE()
// ----------------------------------------------------------

/*
Question:
Create inheritance using Object.create()
*/


const animal = {
    eats: true
};


// rabbit inherits from animal
const rabbit = Object.create(animal);


rabbit.carrot = () => {
    console.log("Rabbit is eating carrot");
};


console.log("\n=== Object.create Example ===");

console.log(rabbit.eats);

rabbit.carrot();


/*
Output:
true
Rabbit is eating carrot

Explanation:
rabbit inherits eats property from animal.
*/


// ----------------------------------------------------------
// EXAMPLE 3: hasOwnProperty()
// ----------------------------------------------------------

/*
Question:
Check inherited and own properties.
*/


console.log("\n=== hasOwnProperty Example ===");

console.log(rabbit.hasOwnProperty("eats"));

console.log(rabbit.hasOwnProperty("carrot"));


/*
Output:
false
true

Explanation:
- eats is inherited from prototype
- carrot belongs directly to rabbit
*/


// ----------------------------------------------------------
// EXAMPLE 4: ARRAY METHODS & ITERATION
// ----------------------------------------------------------

/*
Question:
Use built-in prototype methods and iterate array.
*/


const arr = [1, 2, 3, -1];


arr.reverse();

arr.sort((a, b) => a - b);


console.log("\n=== Array Iteration Example ===");

for (let e of arr) {

    console.log(e);
}


/*
Explanation:
- reverse() and sort() come from Array prototype
- for...of iterates values
- for...in iterates indexes
*/


// ==========================================================
// FINAL SUMMARY
// ==========================================================

/*
Hoisting:
- Moves declarations to top
- var -> undefined
- let/const -> TDZ
- function declarations fully hoisted

Prototype:
- Enables inheritance
- Shares methods between objects
- Saves memory
*/