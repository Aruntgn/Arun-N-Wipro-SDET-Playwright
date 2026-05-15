// MODULE 9: CALLBACK FUNCTIONS & setTimeout

/*
1. Delayed Greeting Message
Problem:
Create delayed greeting message using setTimeout().
Approach:
Use setTimeout() to delay execution.
*/

console.log("1. Delayed Greeting Message:");

setTimeout(() => {

    console.log("Hello, Welcome to JavaScript!");

}, 2000);

/*
Output (after 2 seconds):
Hello, Welcome to JavaScript!
*/

/*
Explanation:
- setTimeout() delays execution of function
- 2000 means 2000 milliseconds = 2 seconds
- JavaScript continues execution without blocking other code
*/


/*
2. Countdown Timer
Problem:
Build countdown timer.
Approach:
Use setInterval() and decrement value continuously.
*/

console.log("\n2. Countdown Timer:");

let count = 5;

let timer = setInterval(() => {

    console.log(count);

    count--;

    if (count < 0) {

        clearInterval(timer);

        console.log("Countdown Finished!");
    }

}, 1000);

/*
Output:
5
4
3
2
1
0
Countdown Finished!
*/

/*
Explanation:
- setInterval() repeatedly runs code every second
- count value decreases each iteration
- clearInterval() stops interval execution
*/

/*

3. Callback-based Calculator
Problem:
Create calculator using callback functions.
Approach:
Pass operation function dynamically as callback.
*/

function calculator(a, b, operation) {

    return operation(a, b);
}

function add(x, y) {

    return x + y;
}

function multiply(x, y) {

    return x * y;
}

console.log("\n3. Callback-based Calculator:");

console.log(calculator(10, 5, add));

console.log(calculator(10, 5, multiply));

/*
Output:
15
50
*/

/*
Explanation:
- calculator() accepts another function as parameter
- add and multiply functions act as callbacks
- This creates reusable and flexible logic
*/


/*
4. Food Ordering System Using Callbacks
Problem:
Simulate food ordering system using callbacks.
Approach:
Execute next function after order preparation.
*/

function placeOrder(callback) {

    console.log("Order placed...");

    setTimeout(() => {

        console.log("Food prepared");

        callback();

    }, 2000);
}

function deliverFood() {

    console.log("Food delivered!");
}

console.log("\n4. Food Ordering System:");

placeOrder(deliverFood);

/*
Output:
Order placed...
Food prepared
Food delivered!
*/

/*
Explanation:
- Food preparation takes time using setTimeout()
- Once completed, callback function executes
- Simulates asynchronous real-world operations
*/


/*
5. Sequential Function Execution Using Callbacks
Problem:
Execute functions sequentially.
Approach:
Use nested callbacks to maintain execution order.
*/

function step1(callback) {

    console.log("Step 1 Completed");

    callback();
}

function step2(callback) {

    console.log("Step 2 Completed");

    callback();
}

function step3() {

    console.log("Step 3 Completed");
}

console.log("\n5. Sequential Function Execution:");

step1(() => {

    step2(() => {

        step3();
    });
});

/*
Output:
Step 1 Completed
Step 2 Completed
Step 3 Completed
*/

/*
Explanation:
- step1 executes first
- step2 waits until step1 completes
- step3 waits until step2 completes
- This demonstrates callback chaining
*/


//------------------------------------------------------------------
// KEY TAKEAWAYS
//------------------------------------------------------------------

/*
- setTimeout() delays execution.
- setInterval() repeats execution.
- Callback functions allow dynamic behavior.
- Callbacks help manage asynchronous flow.
- Sequential callbacks simulate async operations.
- Async concepts are important for APIs and real-world applications.
- JavaScript executes asynchronous tasks without blocking the main thread.
- clearInterval() is used to stop repeated execution.
*/