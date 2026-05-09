//MODULE 1: VARIABLES & DATA TYPES

/*
1. Swap Two Numbers Without Using Third Variable
Problem:
Swap two numbers without using an extra variable.

Approach:
Use arithmetic operations to swap values.
*/ 
console.log("1.Swap Two Numbers Without Using Third Variable:");
let a1 = 10;
let b1 = 20;

console.log("Before Swap:", a1, b1);

// Swapping
[a1, b1] = [b1, a1];

console.log("After Swap:", a1, b1);

/*Output:
Before Swap: 10 20
After Swap: 20 10
*/

/*
2. Check Data Type
Problem:
Identify whether a value is number, string, boolean, null, or undefined.

Approach:
Use typeof operator and special check for null.
*/

function checkType(value) {

    if (value === null) {
        return "null";
    }

    return typeof value;
}

console.log("\n2.Check Data Type:");
console.log(checkType(10));
console.log(checkType("Arun"));
console.log(checkType(true));
console.log(checkType(null));
console.log(checkType(undefined));

/*Output:
number
string
boolean
null
undefined
*/

/*
3. Celsius to Fahrenheit Conversion
Problem:
Convert temperature from Celsius to Fahrenheit.

Formula:
F = (C × 9/5) + 32
*/
console.log("\n3. Celsius to Fahrenheit Conversion:");
let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);

/*Output:
30°C = 86°F
*/

/*
4. Simple Calculator
Problem:
Create calculator using arithmetic operators.
*/


let a2 = 20;
let b2 = 5;

console.log("\n4. Simple Calculator:");
console.log("Addition:", a2 + b2);
console.log("Subtraction:", a2 - b2);
console.log("Multiplication:", a2 * b2);
console.log("Division:", a2 / b2);
console.log("Modulus:", a2 % b2);

/*Output:
Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
Modulus: 0
*/

/*
5. Calculate Age from Birth Year
Problem:
Calculate age using birth year.

Approach:
Subtract birth year from current year.
*/

let birthYear = 2003;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("\n5. Calculate Age from Birth Year:");
console.log("Age:", age);

/*Output:
Age: 23
*/

//----------------------------------------------------------
// KEY TAKEAWAYS
//----------------------------------------------------------

/*
- Variables store data values and can be of different types (number, string, boolean, null, undefined).
- JavaScript is dynamically typed, so variable types can change.
- typeof is used for type checking.
- Arithmetic operators perform calculations.
- Template literals improve readability.
Destructuring can simplify swapping values.
*/