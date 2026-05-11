// Advanced JavaScript Concepts

// Default Parameters, Spread Operator, Rest Operator, Destructuring

function welcome(name = "Guest") { // default params
    console.log(`Welcome ${name}!`);
}
console.log("1. Default Parameters:");
welcome("Arun")
welcome("Bhavi")
welcome()

const nums = [1, 2, 3, 4, 5]; // spread operator
const newNums = [...nums, 6, 7, 8];
console.log("\n2. Spread Operator:");
console.log(newNums);

const obj = {name: "Arun"};
const updatedObj = {...obj, age: 22};
console.log(updatedObj);

const cal = { // rest operator
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}

console.log("\n3. Rest Operator:");
console.log(cal.sum(1, 2, 43, 4))

// destructuring
// const arr = ["Arun", "Bhavi", "Chandru", "Dhanush"];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth, fifth] = ["Arun", "Bhavi", "Chandru", "Dhanush"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log("\n4. Destructuring:");
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

const { name, age } = {name: "Arun", age: 22}; // key-based extracted
console.log(name, age);