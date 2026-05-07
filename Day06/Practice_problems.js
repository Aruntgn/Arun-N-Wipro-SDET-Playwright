
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
console.log("Q1: FLIGHT BOOKING DATA CLEANER RESULT\n");
console.log("******CLEANED FLIGHT DATA******");
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
    console.log("\nQ2: E-COMMERCE DISCOUNT APPLICATOR RESULT\n");
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
