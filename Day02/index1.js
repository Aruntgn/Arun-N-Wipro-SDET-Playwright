console.log("Day02 is working!");

let a = "Arun";
let b = "Arul";
let c = "Arunesh";

console.log("Concatenation and Template Literals-------------------------------");
let d = "Hello " + a + ", " + b + " and " + c + "!"; // Concatenation
console.log(d);
let e = `Hello ${a}, ${b} and ${c}!`; // Template literals
let f = `The length of a is ${a.length * 2}`; // Using template literals to get length
console.log(e);
console.log(f);

console.log("Table Using string concatenation-------------------------------\n");

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}


console.log("Arrow function for addition-------------------------------\n");
let sum = (x, y) => x + y; 
console.log("Sum of 2 and 4:", sum(2, 4)); // 6

console.log("Array & Filter Functions-------------------------------\n");
let arr = [1, 2, 3, 4, 5, "Arun"];

arr.filter(x => typeof x === "number").map(y => y * 2).forEach(table => console.log("Element after * 2:", table * 2));
console.log(arr.find(x => x === "Arun N")); // undefined


