// MODULE 7: FUNCTIONS

/*1. Greatest of Three Numbers
Problem:
Create a function that returns the greatest of three numbers.
Approach:
Use conditional statements to compare values.
*/

function greatest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    }

    else if (b >= a && b >= c) {
        return b;
    }

    return c;
}

console.log("1. Greatest of Three Numbers:");
console.log("Greatest Number:", greatest(25, 78, 45));

/*Output:
1. Greatest of Three Numbers:
Greatest Number: 78
*/

/*
2. Check Palindrome Number
Problem:
Write a function to check whether a number is palindrome.
Approach:
Reverse the digits and compare with original number.
*/

function isPalindrome(num) {

    let original = num;
    let reversed = 0;

    while (num > 0) {

        let digit = num % 10;

        reversed = reversed * 10 + digit;

        num = Math.floor(num / 10);
    }

    return original === reversed;
}

console.log("\n2. Check Palindrome Number:");
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

/*Output:
2. Check Palindrome Number:
true
false
*/

/*
3. Currency Conversion Function
Problem:
Create reusable function for currency conversion.
Approach:
Multiply amount with conversion rate.
*/

function convertCurrency(amount, rate) {

    return amount * rate;
}

console.log("\n3. Currency Conversion Function:");
console.log("Converted Amount:", convertCurrency(100, 83.5));

/*Output:
3. Currency Conversion Function:
Converted Amount: 8350
*/

/*
4. Return Only Even Numbers
Problem:
Write function that returns only even numbers from array.
Approach:
Use filter() method.
*/

function getEvenNumbers(arr) {

    return arr.filter(num => num % 2 === 0);
}

console.log("\n4. Return Only Even Numbers:");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

/*Output:
4. Return Only Even Numbers:
[ 2, 4, 6 ]
*/

/*
5. Calculator Using Functions
Problem:
Create calculator using functions.
Approach:
Create separate reusable functions.
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("\n5. Calculator Using Functions:");
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

/*Output:
5. Calculator Using Functions:
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2
*/

//------------------------------------------------------------------
// KEY TAKEAWAYS
//------------------------------------------------------------------
/*
- Functions allow us to reuse code and break problems into smaller pieces.
- We can create functions for specific tasks like finding greatest number, checking palindrome, currency conversion, etc.
- Functions can take parameters and return values, making them flexible and powerful.
- Using functions improves code readability and maintainability.
- Functions can be used in various contexts, such as array manipulation, mathematical calculations, and more.
- Always consider edge cases when writing functions, such as handling invalid input or special conditions.
- Functions can be nested and can call other functions, allowing for complex operations.
- JavaScript supports both function declarations and function expressions, giving us multiple ways to define functions.
- Arrow functions provide a concise syntax for writing functions, especially for simple operations.
- Functions are fundamental building blocks in programming and are essential for writing efficient and organized code.
- Functions can accept parameters and return values.
- Conditional logic helps solve comparison problems.
- filter() simplifies array-based operations.
- Reusable functions reduce code duplication.
- Functions are core building blocks in JavaScript.
*/