// MODULE 8: SCOPE AND HOISTING

/*
1. Variable Hoisting Example
Problem:
Predict output of variable hoisting.
Approach:
Understand how JavaScript moves declarations to top.
*/
console.log("1. Variable Hoisting Example:");
    
console.log(message);

var message = "Hello JavaScript";

/*Output:
undefined
Explanation:
- var message is hoisted and initialized as undefined
- message is assigned "Hello JavaScript" after the first console.log
In Detail Explanation:
JavaScript internally treats it like:
var message;
console.log(message);
message = "Hello JavaScript";
*/

/*
2. Block Scope Using let
Problem:
Demonstrate block scope using let.
Approach:
Variables declared with let exist only inside blockes.
*/

console.log("\n2. Block Scope Using let:");
{
    let age = 22;
    console.log(age);
}

// console.log(age);

/*Output:
22
*/

/*Explanation:
- age is accessible inside the block where it is declared
- Trying to access age outside block gives ReferenceError
*/

/*
3. Closure Behavior
Problem:
Demonstrate closure in JavaScript.
Approach:
Inner function accesses outer function variable even after outer execution.
*/

function outer() {

    console.log("3. Closure Behavior:");

    let count = 0;

    return function inner() {

        count++;

        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();

/*Output:
3. Closure Behavior:
1
2
3
*/

/* Explanation:
- outer() creates a local variable count and returns inner function
- inner() forms a closure that retains access to count even after outer() finishes
- Each call to counter() increments and logs the count value
*/

/*
4. Nested Functions and Outer Variables
Problem:
Access outer variables inside nested functions.
Approach:
Inner functions can access variables from parent scope.
*/

function parent() {

    console.log("\n4. Nested Functions and Outer Variables:");
    let language = "JavaScript";

    function child() {

        console.log(`Learning ${language}`);
    }

    child();
}

parent();

/*
Output:
4. Nested Functions and Outer Variables:
Learning JavaScript
*/
/*
Explanation:
- parent() defines a variable language and a nested function child()
- child() can access language due to scope chain, demonstrating nested function access to outer variables
*/

/*
5. Incorrect Variable Scoping
Problem:
Debug incorrect variable scoping.
Approach:
Use let instead of var inside loops.
*/
console.log("\n5. Incorrect Variable Scoping:");
for (let i = 1; i <= 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 1000);
}

/*Output:
1
2
3
*/

/*Explanation:
- Using let for loop variable i creates a new binding for each iteration, preserving the correct value in the closure created by setTimeout
- If var was used instead, all timeouts would log 4 (the final value of i after loop ends)
- let creates separate block scope for each iteration.
*/

//------------------------------------------------------------------
// KEY TAKEAWAYS
//------------------------------------------------------------------

/*
- JavaScript hoists variable declarations but not initializations.
- let and const are block-scoped, while var is function-scoped.
- Closures allow inner functions to access outer variables even after the outer function has executed.
- Proper scoping is crucial to avoid bugs, especially in loops and asynchronous code.
- Understanding scope and hoisting helps in writing cleaner and more efficient code.
- Always prefer let and const over var to avoid unintended consequences of hoisting and scope issues.
- Function declarations are hoisted completely, allowing them to be called before their definition in the code.
- Arrow functions do not have their own this or arguments, and they are not hoisted like function declarations.
- Be mindful of variable scope when working with nested functions and closures to prevent memory leaks and unintended side effects.
- Use block scope to limit the visibility of variables and prevent conflicts in larger codebases.
- Hoisting moves declarations to the top.
- var is initialized as undefined.
- let and const remain in Temporal Dead Zone.
- Scope controls variable accessibility.
- Closures preserve outer variables.
- Nested functions can access parent scope.
- let prevents common scoping bugs in loops.
*/