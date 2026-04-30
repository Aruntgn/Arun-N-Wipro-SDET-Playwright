console.log("1) The Swapper------------------------------- ");

let a = 5;
let b = 10;
 console.log("Before swap:", a, b);
// swap
[a, b] = [b, a];

console.log("After swap:", a, b); // 10, 5

console.log("2) Type checking-------------------------------")

function checkType(input) {
    if (input === null) {
        console.log("This is null");
    } else if (Array.isArray(input)) {
        console.log("This is an array");
    } else {
        console.log(`This is a ${typeof input}`);
    }
}

// Test cases : 
checkType(10); // numb
checkType("Hello"); // string
checkType(true); // bool
checkType(undefined); // undefined
checkType(null); // null
checkType([1, 2, 3]); // arr
checkType({}); // obj
checkType(function(){}); // fun

console.log("3) Initial creator-------------------------------");

let fullName = "John Doe";

let initials = fullName.split(" ")[0][0] + fullName.split(" ")[1][0];

console.log(initials); // JD

console.log("4) The Cleaner------------------------------------------");
let messy = " Javascript is fun ";

let clean = messy.trim().toLowerCase();

console.log(clean); // "javascript is fun"

console.log("5) Grocery List-------------------------------------------");

let cart = ["Bread", "Butter", "Cheese"];

// add Milk to end
cart.push("Milk");

// add Eggs to beginning
cart.unshift("Eggs");

// remove last item
cart.pop();

console.log(cart);

console.log("6) Value Finder-------------------------------------------");

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30)); // true
console.log(numbers.indexOf(50)); // 4