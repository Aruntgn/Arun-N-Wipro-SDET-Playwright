
// 1. HOISTING

/*
Definition:
Hoisting is JavaScript's default behavior of moving
declarations to the top of the scope before execution.

- var is hoisted and initialized as undefined
- let and const are hoisted but remain in Temporal Dead Zone
- Function declarations are completely hoisted
*/


// EXAMPLE 1: VAR HOISTING

/*
Question:
What happens when we access a var variable before declaration?
*/

console.log(greet); // undefined

var greet = "Hello, World!";

console.log(greet);


/*
Explanation:
Internally JavaScript treats it like:

var greet;
console.log(greet);
greet = "Hello, World!";
console.log(greet);
*/


// EXAMPLE 2: LET HOISTING

/*
Question:
What happens when we access let before declaration?
*/

/*
console.log(message);

let message = "Hi";
*/


/*
Output:
ReferenceError

Reason:
let variables stay inside Temporal Dead Zone (TDZ)
until initialization.
*/


// EXAMPLE 3: FUNCTION HOISTING

/*
Question:
Can function declarations be called before definition?
*/

sayHi();

function sayHi() {
    console.log("Hello from function declaration");
}


/*
Output:
Hello from function declaration

Reason:
Entire function is hoisted.
*/


// EXAMPLE 4: FUNCTION EXPRESSION


/*
Question:
Can arrow functions be called before declaration?
*/

/*
sayHello();

var sayHello = () => {
    console.log("Hello");
};
*/


/*
Output:
TypeError: sayHello is not a function

Reason:
Only variable declaration is hoisted,
NOT the arrow function itself.
*/

