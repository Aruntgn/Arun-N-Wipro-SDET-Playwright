// MODULE 10: ARROW FUNCTIONS

/*
1. Convert Normal Function into Arrow Function
Problem:
Convert traditional function into arrow function.
Approach:
Replace function keyword with arrow syntax.
*/

console.log("1. Normal Function to Arrow Function:");

// Normal Function
function greet(name) {

    return `Hello ${name}`;
}

// Arrow Function
const greetArrow = (name) => {

    return `Hello ${name}`;
};

console.log(greetArrow("Arun"));

/*
Output:
Hello Arun
*/

/*
Explanation:
- Arrow functions provide shorter syntax
- => replaces function keyword
- Useful for cleaner modern JavaScript
*/


/*
2. One-line Arrow Function
Problem:
Create one-line arrow function with implicit return.
Approach:
Remove return keyword and curly braces.
*/

console.log("\n2. One-line Arrow Function:");

const square = num => num * num;

console.log(square(5));

/*
Output:
25
*/

/*
Explanation:
- Single-line arrow functions automatically return value
- No need for return keyword
- Makes code concise
*/


/*
3. Arrow Functions with map()
Problem:
Use arrow functions with map().
Approach:
Transform array elements using map().
*/

console.log("\n3. Arrow Function with map():");

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);

console.log(doubled);

/*
Output:
[2, 4, 6, 8, 10]
*/

/*
Explanation:
- map() transforms every array element
- Arrow functions simplify callback syntax
- Commonly used in functional programming
*/


/*
4. Even/Odd Checker
Problem:
Build even/odd checker using arrow function.
Approach:
Use modulo operator and ternary operator.
*/

console.log("\n4. Even / Odd Checker:");

const checkEvenOdd = num => {

    return num % 2 === 0 ? "Even" : "Odd";
};

console.log(checkEvenOdd(10));

console.log(checkEvenOdd(7));

/*
Output:
Even
Odd
*/

/*
Explanation:
- % checks remainder
- Ternary operator simplifies condition checking
- Arrow functions keep logic compact
*/


/*
5. Student Grade Calculator
Problem:
Create student grade calculator using arrow functions.
Approach:
Use conditions to determine grades.
*/

console.log("\n5. Student Grade Calculator:");

const calculateGrade = marks => {

    if (marks >= 90) {

        return "A Grade";
    }

    else if (marks >= 75) {

        return "B Grade";
    }

    else if (marks >= 50) {

        return "C Grade";
    }

    return "Fail";
};

console.log(calculateGrade(92));

console.log(calculateGrade(68));

/*
Output:
A Grade
C Grade
*/

/*
Explanation:
- Arrow functions can contain complex logic
- Conditional statements determine grade category
- Functions become reusable and modular
*/


//------------------------------------------------------------------
// KEY TAKEAWAYS
//------------------------------------------------------------------

/*
- Arrow functions provide shorter syntax.
- Implicit return simplifies one-line functions.
- Arrow functions work effectively with array methods.
- Ternary operators simplify conditions.
- Arrow functions are widely used in modern JavaScript.
- Functional programming improves code readability.
- Arrow functions do not have their own this keyword.
- Arrow functions are commonly used as callbacks.
*/