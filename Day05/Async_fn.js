async function runAPIs() {
    try {
        console.log("=== Running Multiple API Calls ===\n");

        // 1. JSONPlaceholder (Todos)
        let todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
        let todos = await todosResponse.json();

        console.log("1. Todos (First 3 Completed):");

        let completedTodos = todos.filter(t => t.completed);
        let firstThree = completedTodos.slice(0, 3);

        firstThree.forEach(t => console.log(`- ${t.title}`));

        console.log("\n");


        // 2. Random User API
        let userResponse = await fetch("https://randomuser.me/api/");
        let userData = await userResponse.json();

        console.log("2. Random User:");
        console.log(
            `${userData.results[0].name.first} - ${userData.results[0].email}`
        );

        console.log("\n");


        // 3. Dog API
        let dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
        let dog = await dogResponse.json();

        console.log("3. Random Dog Image:");
        console.log(dog.message);

        console.log("\n");


        // 4. Cat Fact API
        let catResponse = await fetch("https://catfact.ninja/fact");
        let catFact = await catResponse.json();

        console.log("4. Cat Fact:");
        console.log(catFact.fact.toUpperCase());

        console.log("\n");


        // 5. Advice API
        let adviceResponse = await fetch("https://api.adviceslip.com/advice");
        let advice = await adviceResponse.json();

        console.log("5. Advice:");

        let adviceWords = advice.slip.advice.split(" ");
        console.log(adviceWords);

        console.log("\n");


        // 6. Pokémon API
        let pokemonResponse = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        let pokemonData = await pokemonResponse.json();

        let pokemonResults = pokemonData.results;

        let filteredPokemon = pokemonResults.filter(p =>
            p.name.startsWith("b")
        );

        let pokemonNames = filteredPokemon.map(p => p.name);

        console.log("6. Pokémon Names Starting with 'B':");

        if (pokemonNames.length === 0) {
            console.log("No Pokémon found.");
        } else {
            pokemonNames.forEach((name, index) => {
                console.log(`${index + 1}. ${name}`);
            });
        }

        console.log("\n");


        // 7. Age API
        let ageResponse = await fetch("https://api.agify.io/?name=arun");
        let ageData = await ageResponse.json();

        console.log("7. Predicted Age:");
        console.log(ageData.age);

        console.log("\n");


        // 8. Gender API
        let genderResponse = await fetch("https://api.genderize.io/?name=arun");
        let genderData = await genderResponse.json();

        console.log("8. Predicted Gender:");
        console.log(genderData.gender);

        console.log("\n");


        // 9. Nationality API
        let nationResponse = await fetch("https://api.nationalize.io/?name=arun");
        let nationData = await nationResponse.json();

        console.log("9. Predicted Nationality:");

        nationData.country.forEach(c => {
            console.log(c.country_id);
        });

        console.log("\n");


        // 10. Joke API
        let jokeResponse = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        let jokeData = await jokeResponse.json();

        console.log("10. Random Joke:");
        console.log("Q:", jokeData.setup);
        console.log("A:", jokeData.punchline);

    } catch (error) {
        console.error("Error:", error);
    }
}

runAPIs();

/* 
getData().then((data) => {
console.log(data);
 }).catch((error) => {
     console.error("Error:", error);
 });
 
const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
 
clearInterval(i); */