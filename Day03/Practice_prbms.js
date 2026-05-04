console.log("1) Logging Names------------------------------------------------");

const names = ['Alice', 'Bob', 'Charlie'];

console.log("=== Greeting Names ===");
names.forEach(name => {
    console.log(`Hello, ${name}`);
});

console.log("\n2) Temperature Conversion------------------------------------------------");

const temps = [0, 10, 20, 30];
const fahrenheit = temps.map(c => c * 1.8 + 32);

console.log("\n=== Temperature Conversion (C → F) ===");
temps.forEach((c, i) => {
    console.log(`${c}°C → ${fahrenheit[i]}°F`);
});

console.log("\n3) Finding Adults------------------------------------------------");

const users = [
    { name: 'Li', age: 16 },
    { name: 'Dan', age: 22 },
    { name: 'Sarah', age: 17 }
];

const adults = users.filter(user => user.age >= 18);

console.log("\n=== Adult Users ===");
adults.forEach(user => {
    console.log(`${user.name} (${user.age} years old)`);
});

console.log("\n4) String Lengths------------------------------------------------");

function longStrings(arr) {
    return arr.filter(str => str.length > 5);
}

console.log("\n=== Strings with Length > 5 ===");
longStrings(["hello", "javascript", "coding", "hi"])
    .forEach(str => console.log(str));

console.log("\n5) Total Cost------------------------------------------------");
const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log("\n=== Total Cost ===");
console.log(`Total: $${total.toFixed(2)}`);

console.log("\n6) Counting Occurrences------------------------------------------------");

const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const count = fruits.reduce((acc, fruit) => {
    if (fruit === "apple") acc++;
    return acc;
}, 0);

console.log("\n=== Apple Count ===");
console.log(`'apple' appears ${count} times`);

console.log("\n7) Array Transformation------------------------------------------------");

const nums = [1, 2, 3, 4, 5, 6];

const result = nums
    .filter(n => n % 2 === 0)
    .map(n => n * n);

console.log("\n=== Even Numbers Squared ===");
console.log(result);

console.log("\n8) Object Extraction------------------------------------------------");

const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];

const titles = products.map(p => p.title);

console.log("\n=== Product Titles ===");
console.log(titles.join(", "));

console.log("\n9) Average------------------------------------------------");

const scores = [80, 90, 70, 100];
const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;

console.log("\n=== Average Score ===");
console.log(`Average: ${avg}`);

console.log("\n10) Flatten Array------------------------------------------------");

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log("\n=== Flattened Array ===");
console.log(flat);
