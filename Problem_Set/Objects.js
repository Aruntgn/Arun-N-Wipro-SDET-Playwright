//MODULE 5: OBJECTS

/*
1. Student Object and Display Properties Dynamically
Problem:
Create a student object and display all properties dynamically.
Approach:
Use for...in loop to iterate object properties.
*/

let student = {
    name: "Arun",
    age: 22,
    course: "AI & DS"
};

console.log("\n1. Student Object and Display Properties Dynamically:");
for (let key in student) {

    console.log(`${key}: ${student[key]}`);
}

/*Output:
name: Arun 
age: 22
course: AI & DS
*/

/*
2. Count Number of Keys in Object
Problem:
Count total keys present in an object.
Approach:
Use Object.keys() method.
*/

let employee = {
    id: 101,
    name: "Arun",
    role: "Developer"
};

let count = Object.keys(employee).length;

console.log("\n2. Count Number of Keys in Object:");
console.log("Total Keys:", count);

/*Output:
Total Keys: 3
*/

/*
3. Merge Two Objects
Problem:
Merge two objects into one.
Approach:
Use spread operator.
*/

let obj1 = {
    name: "Arun"
};

let obj2 = {
    city: "Chennai"
};

let merged = {
    ...obj1,
    ...obj2
};

console.log("\n3. Merge Two Objects:");
console.log(merged);

/*Output:
{ name: 'Arun', city: 'Chennai' }
*/

/*
4. Convert Object into Array of Keys and Values
Problem:
Convert object into arrays of keys and values.
Approach:
Use Object.keys() and Object.values().
*/

let user = {
    name: "Arun",
    age: 22,
    country: "India"
};

console.log("\n4. Convert Object into Array of Keys and Values:");
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));

/*Output:
Keys: [ 'name', 'age', 'country' ]
Values: [ 'Arun', 22, 'India' ]
*/

/*
5. Shopping Cart Object and Total Bill
Problem:
Calculate total bill amount from shopping cart.
Approach:
Loop through cart items and sum prices.
*/

let cart = {
    laptop: 50000,
    mouse: 1200,
    keyboard: 2500
};

let total = 0;

for (let item in cart) {

    total += cart[item];
}

console.log("\n5. Shopping Cart Object and Total Bill:");
console.log("Cart Items:", cart);
console.log("Total Bill:", total);

/*Output:
Cart Items: { laptop: 50000, mouse: 1200, keyboard: 2500 }
Total Bill: 53700
*/

//----------------------------------------------------------
//KEY TAKEAWAYS
//----------------------------------------------------------
/*
- Objects are collections of key-value pairs or it store data using key-value pairs.
- Use loops and built-in methods to manipulate objects.
- for...in loop iterates object properties.
- Object.keys() and Object.values() extract object data.
- Spread operator simplifies object merging.
- Objects are widely used for real-world data representation.
- Dynamic property access improves flexibility.
*/