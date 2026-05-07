
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

console.log("******CLEANED FLIGHT DATA******");
console.log(cleanFlights(rawFlights));