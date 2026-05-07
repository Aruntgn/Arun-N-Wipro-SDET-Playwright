
// Q1: FLIGHT BOOKING DATA CLEANER

/*
Approach:
1. Split the raw flight string into route and price.
2. Convert the route into source and destination cities.
3. Convert price into Number and validate invalid values.
4. Filter flights between $100 and $500.
5. Sort flights by ascending price.
6. Convert the final result into JSON format.
*/

const rawFlights = [
    "Chennai-Singapore:320",
    "Sydney-Bali:invalid",
    "Toronto-Vancouver:480",
    "Seoul-Bangkok:90",
    "Madrid-Lisbon:210"
];

function cleanFlights(flights) {

    // S1: Convert raw strings into objects
    let formattedFlights = flights.map(flight => {

        // Split route and price
        let [route, rawPrice] = flight.split(":");

        // Split source and destination
        let [from, to] = route.split("-");

        // Convert price into Number
        let price = Number(rawPrice);

        // Validation
        if (isNaN(price)) {
            price = 0;
        }

        return {
            from,
            to,
            price
        };
    });

    // S2: Filter flights between $100 and $500
    let filteredFlights = formattedFlights.filter(
        flight => flight.price >= 100 && flight.price <= 500
    );

    // S3: Sort by ascending price
    filteredFlights.sort((a, b) => a.price - b.price);

    // S4: Return JSON string
    return JSON.stringify(filteredFlights, null, 2);
}
console.log("Q1) FLIGHT BOOKING DATA CLEANER RESULT:\n");
console.log("------CLEANED FLIGHT DATA------");
console.log(cleanFlights(rawFlights));



// Q2: E-COMMERCE DISCOUNT APPLICATOR

/*
Approach:
1. Create a callback function to identify eligible products.
2. Check whether the product belongs to Electronics category
   and has price greater than $200.
3. Use map() to transform the cart items.
4. Apply 10% discount for eligible products.
5. Add isDiscounted property to all products.
6. Track total discounted items and savings amount.
7. Use template literals for summary output.
8. Use setTimeout() to simulate delayed server response.
*/

const cart = [
    { name: "Gaming Laptop", price: 1200, category: "Electronics" },
    { name: "Coffee Maker", price: 85, category: "Kitchen" },
    { name: "Wireless Earbuds", price: 300, category: "Electronics" },
    { name: "Study Chair", price: 180, category: "Furniture" },
    { name: "Mechanical Keyboard", price: 220, category: "Electronics" }
];

// Callback Fn
function isEligible(product) {

    return (
        product.category === "Electronics" &&
        product.price > 200
    );
}

// Main Fn
function applyPromo(cart, promoCallback) {

    let discountedCount = 0;
    let totalSavings = 0;

    // Transform cart
    let updatedCart = cart.map(product => {

        if (promoCallback(product)) {

            let discount = product.price * 0.10;
            discountedCount++;
            totalSavings += discount;

            return {
                ...product,
                price: product.price - discount,
                isDiscounted: true
            };
        }

        return {
            ...product,
            isDiscounted: false
        };
    });
    // Final Summary
    console.log("\nQ2) E-COMMERCE DISCOUNT APPLICATOR RESULT:\n");
    console.log(
        `Promotion applied! ${discountedCount} products received discounts with a total savings of $${totalSavings.toFixed(2)}`
    );
    // Delayed Return
    setTimeout(() => {

        console.log("\n------UPDATED SHOPPING CART------");
        console.log(updatedCart);

    }, 1000);
}
// Fn Call
applyPromo(cart, isEligible);


// Q3: MOVIE STREAM ANALYTICS

/*
Approach:
1. Split the raw movie string into name, genre, and views.
2. Convert views into Number and validate corrupted values.
3. Create structured movie objects.
4. Filter only Action and Sci-Fi movies with views > 5000.
5. Sort movies by highest views first.
6. Return the final result as a JSON string.
*/

const rawMovies = [
    "Interstellar|Sci-Fi|18000",
    "Kung Fu Panda|Animation|9500",
    "John Wick|Action|14000",
    "Avatar|Sci-Fi|invalid",
    "The Dark Knight|Action|22000",
    "How to Train Your Dragon|Animation|4000"
];

function analyzeMovies(movies) {

    // S1: Convert raw str's into obj's
    let formattedMovies = movies.map(movie => {

        let [name, genre, rawViews] = movie.split("|");
        let views = Number(rawViews);
        // Validation
        if (isNaN(views)) {
            views = 0;
        }
        return {
            name,
            genre,
            views
        };
    });

    // S2: Filter Action and Sci-Fi movies with views > 5000
    let filteredMovies = formattedMovies.filter(movie =>
        (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
        movie.views > 5000
    );
    // S3: Sort by descending views
    filteredMovies.sort((a, b) => b.views - a.views);
    // S4: Return JSON string
    return JSON.stringify(filteredMovies, null, 2);
}
console.log("\nQ3) MOVIE STREAM ANALYTICS RESULT:\n");
console.log(analyzeMovies(rawMovies));


// Q4: AUTOMATED PAYROLL PROCESSOR

/*
Approach:
1. Create a callback function to determine tax percentage.
2. Apply 20% tax for salary > 5000, otherwise 10%.
3. Use map() to process employee payroll details.
4. Calculate tax amount and net salary.
5. Add employee status based on net salary.
6. Calculate total payout for all employees.
7. Use template literals for summary output.
8. Use setTimeout() to simulate payroll processing delay.
*/

const employees = [
    { id: 201, name: "Arun", salary: 7200 },
    { id: 202, name: "Manoj", salary: 4200 },
    { id: 203, name: "Nitesh", salary: 5600 },
    { id: 204, name: "Shiva", salary: 3000 }
];


// Callback Fn
function taxLogic(salary) {

    if (salary > 5000) {
        return 0.20;
    }
    return 0.10;
}

// Main Payroll Fn
function calculatePayroll(employees, taxCallback) {

    let totalNetPayout = 0;

    // Process payroll
    let processedEmployees = employees.map(employee => {

        let taxRate = taxCallback(employee.salary);
        let taxAmount = employee.salary * taxRate;
        let netSalary = employee.salary - taxAmount;
        totalNetPayout += netSalary;

        return {
            ...employee,
            tax: taxAmount,
            netSalary: netSalary,
            status: netSalary > 4000 ? "Premium" : "Standard"
        };
    });

    // Payroll Summary
    console.log(
        `Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed(2)} for ${employees.length} employees.`
    );

    // Delayed Return
    setTimeout(() => {
        console.log("\nQ4) AUTOMATED PAYROLL PROCESSOR RESULT:\n");
        console.log("\n------FINAL PAYROLL DATA------");
        console.log(processedEmployees);

    }, 2000);
}

// Fn Call
calculatePayroll(employees, taxLogic);