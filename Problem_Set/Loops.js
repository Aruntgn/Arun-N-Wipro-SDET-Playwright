//MODULE 6: LOOPS

/*1. Print Star Pyramid Pattern
Problem:
Print pyramid star pattern using loops.
Approach:
Use nested loops for spaces and stars.
*/

let rows = 5;

console.log("1. Print Star Pyramid Pattern:");

for (let i = 1; i <= rows; i++) {

    let pattern = "";

    // spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    
    console.log(pattern);
}

/*Output:
    *
   ***
  *****
 *******
*********
*/

/*
2. Multiplication Tables from 1 to 10
Problem:
Print multiplication tables from 1 to 10.
Approach:
Use nested loops.
*/

console.log("\n2. Multiplication Tables from 1 to 10:");
for (let i = 1; i <= 10; i++) {

    console.log(`\nTable of ${i}`);

    for (let j = 1; j <= 10; j++) {

        console.log(`${i} x ${j} = ${i * j}`);
    }
}

/*Output:
Table of 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
*/  

/*
3. Sum of Even Numbers Between 1 and 100
Problem:
Find sum of all even numbers from 1 to 100.
Approach:
Check divisibility using modulo operator.
*/

let sum = 0;

console.log("\n3. Sum of Even Numbers Between 1 and 100:");
for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of Even Numbers:", sum);

/*Output:
Sum of Even Numbers: 2550
*/

/*
4. Print Prime Numbers Between 1 and 100
Problem:
Print all prime numbers between 1 and 100.
Approach:
Check divisibility for each number.
*/

console.log("\n4. Print Prime Numbers Between 1 and 100:");
for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

/*Output:
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
*/

/*5. Number Guessing Game
Problem:
Create a number guessing game.
Approach:
Generate random number and compare guesses.
*/

let secret = Math.floor(Math.random() * 10) + 1;

let guess = 7;

console.log("\n5. Number Guessing Game:");
if (guess === secret) {
    console.log("Correct Guess!");
} else {
    console.log(`Wrong Guess! Number was ${secret}`);
}

/*Output:
Correct Guess! (if guess is 7)
or
Wrong Guess! Number was (some number between 1 and 10) (if guess is not 7)
*/

//----------------------------------------------------------------
//KEY TAKEAWAYS
//----------------------------------------------------------------
/*
- Use nested loops for patterns and tables.
- Use modulo operator to check even numbers.
- Check for prime numbers by testing divisibility.
- Generate random numbers for games.
- Loops automate repetitive tasks.
- Nested loops are useful for patterns and tables.
- Modulo operator helps identify even and prime numbers.
- Prime number logic improves problem-solving skills.
- Random number generation can create games and simulations.
- Loops are fundamental for algorithms and data processing.
*/  
