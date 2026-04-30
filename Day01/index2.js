let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
}
console.log("Object:", obj);
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);

// String str = "Arun"; int a = 5; boolean b = true;
let str2 = "Arun";
let a2 = 5;
let b2 = true;

str2 = 23;
console.log("str2:", str2); 

function add(a, b) {
    return a + b;
}

console.log("Function add(5, 10):", add(5, 10)); // 15

const c = 5; 
console.log(c);

let l = 5;
var v = 6;

{
    let l = 10;
    var v = 20; 
    console.log("Inside block, l:", l); // 10
    console.log("Inside block, v:", v); // 20
}

console.log("Outside block, l:", l); // 5
console.log("Outside block, v:", v); // 20

let arr = [1, "Arun", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];

let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}


let choice = "A";  

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}