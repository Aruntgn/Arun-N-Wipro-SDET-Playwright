console.log("Guest List Formatter------------------------------------------\n");

function formatGuests(names) {
    let guests = names.slice(1); // remove first name
    let formatted = guests.map(name => `Guest: ${name}`);
    return formatted.join("\n");
}

// Test
let list = ["Ramanujan", "Arun", "Mike", "Jyson"];
console.log(formatGuests(list));

console.log("\nLogic Gate------------------------------------------\n");
let getHighNumbers = (arr) => {
    // random threshold (1–50)
    let threshold = Math.floor(Math.random() * 50) + 1;

    console.log("Threshold:", threshold);

    return arr
        .filter(x => typeof x === "number")   // keep numbers
        .filter(x => x > threshold);          // filter > threshold
};

// Test
console.log(getHighNumbers([10, "a", 60, 25, "hello", 80]));

console.log("\nPrice Calculator------------------------------------------\n");
let prices = ["100", "200", "50", "25"]; // last is handling fee


let handlingFee = prices.pop(); // remove last item


let numericPrices = prices.map(p => Number(p)); // convert to numbers

// sum using arrow function
let total = numericPrices.reduce((sum, val) => sum + val, 0);


console.log(`Total Price: $${total}`);
console.log(`Handling Fee: $${handlingFee}`);
