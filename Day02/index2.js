console.log("Day02-->index2 is working!");
console.log("Random Function-------------------------------\n");
console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100

// floor(2.2, 8.999) // [2, 8]
// ceil(0.1, 9.999) // [1, 10]

console.log("Type Conversion-------------------------------\n");
let str_num = "007";
console.log(Number(str_num));
console.log(String(007));

let val = "3.7";
console.log(parseInt(val)); // 3
console.log(parseFloat(val)); // 3.7

console.log("Array Methods-------------------------------\n");
let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.indexOf("black")); // 4
console.log(colors.includes("pink")); // false
console.log(colors.length); // 5
console.log(colors[3]); // "white"
console.log(colors[colors.length - 1]); // "black"
colors.push("pink"); // Adds "pink" to the end of the array
console.log(colors); // ["red", "green", "blue", "white", "black", "pink"]
colors.pop(); // Removes the last element ("pink")
console.log(colors); // ["red", "green", "blue", "white", "black"]
colors.unshift("violet"); // Adds "violet" to the beginning of the array
console.log(colors); // ["violet", "red", "green", "blue", "white", "black"]
colors.shift(); // Removes the first element ("violet")
console.log(colors); // ["red", "green", "blue", "white", "black"]
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));
