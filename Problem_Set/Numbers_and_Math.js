//MODULE 3: NUMBERS & MATH

/*
1. Generate Random Number Between 1 and 100
Problem:
Generate a random number between 1 and 100.
Approach:
Use Math.random() and Math.floor().
*/

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("\n1. Generate Random Number Between 1 and 100:");
console.log("Random Number:", randomNumber);

/*Output:
Random Number: (some number between 1 and 100) eg. 77
*/

/*
2. Check Prime Number
Problem:
Check whether a number is prime.
Approach:
Check divisibility from 2 up to n-1.
*/

let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {

    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log("\n2. Check Prime Number:");
console.log("Number:", num);
console.log(isPrime ? "Prime Number" : "Not Prime");

/*Output:
Number: 17
Prime Number
*/

/*
3. Find Factorial Using Loops
Problem:
Find factorial of a number.
Formula:
5! = 5 × 4 × 3 × 2 × 1
*/

let num1 = 5;

let factorial = 1;

for (let i = 1; i <= num1; i++) {
    factorial *= i;
}

console.log("\n3. Find Factorial Using Loops:");
console.log("Number:", num1);
console.log("Factorial:", factorial);

/*Output:
Number: 5
Factorial: 120
*/

/*
4. Fibonacci Series
Problem:
Print Fibonacci series up to n numbers.
Approach:
Use previous two numbers to generate next number.
*/

let n = 10;

let a = 0;
let b = 1;

console.log("\n4. Fibonacci Series:");

for (let i = 1; i <= n; i++) {

    console.log(a);

    let next = a + b;

    a = b;
    b = next;
}

/*Output:
0
1
1
2
3 
5
8
13
21
34
*/

/*
5. Armstrong Number
Problem:
Check whether a number is an Armstrong number.
Example:
153 = 1³ + 5³ + 3³
*/

let num2 = 153;
let temp = num2;
let sum = 0;

while (temp > 0) {

    let digit = temp % 10;

    sum += digit ** 3;

    temp = Math.floor(temp / 10);
}

console.log("\n5. Armstrong Number:");
console.log("Number:", num2);
if (sum === num2) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}

/*Output:
Number: 153
Armstrong Number
*/

//----------------------------------------------------------
// KEY TAKEAWAYS
//----------------------------------------------------------
/*
- Use Math.random() and Math.floor() to generate random numbers.
- Check prime numbers by testing divisibility.
- Loops are useful for repetitive calculations.
- Fibonacci series demonstrates sequence generation logic.
- Calculate factorial using loops.
- Generate Fibonacci series iteratively.
- Check Armstrong numbers by summing cubes of digits.
*/