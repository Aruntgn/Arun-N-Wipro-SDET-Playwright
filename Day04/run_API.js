async function runAPIs() {
    try {
        console.log("=== Running Multiple API Calls ===\n");

        // 1. JSONPlaceholder (Todos)
        let todos = await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json());
        console.log("1. Todos (First 3 Completed):");
        todos.filter(t => t.completed).slice(0, 3)
            .forEach(t => console.log(`- ${t.title}`));
        console.log("\n");

        // 2. Random User API
        let user = await fetch("https://randomuser.me/api/")
            .then(res => res.json());
        console.log("2. Random User:");
        console.log(user.results[0].name.first, user.results[0].email);
        console.log("\n");

        // 3. Dog API
        let dog = await fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json());
        console.log("3. Random Dog Image:");
        console.log(dog.message);
        console.log("\n");

        // 4. Cat Fact API
        let catFact = await fetch("https://catfact.ninja/fact")
            .then(res => res.json());
        console.log("4. Cat Fact:");
        console.log(catFact.fact);
        console.log("\n");

        // 5. Advice API
        let advice = await fetch("https://api.adviceslip.com/advice")
            .then(res => res.json());
        console.log("5. Advice:");
        console.log(advice.slip.advice);
        console.log("\n");

        
        // ===============================
        // POKEMON API
        // ===============================
        console.log("6. Pokemon Names:");
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then(res => res.json())

            // Extract results
            .then(data => data.results)

            // Filter names starting with 'b'
            .then(pokemon => pokemon.filter(p => p.name.startsWith("b")))

            // Map only names
            .then(pokemon => pokemon.map(p => p.name))

            // Print formatted output
            .then(names => {
                console.log("\n=== Pokémon Names Starting with 'B' ===");
                if (names.length === 0) {
                    console.log("No Pokémon found.");
                } else {
                    names.forEach((name, index) => {
                        console.log(`${index + 1}. ${name}`);
                    });
                }
            })

            // Error handling
            .catch(err => console.error("Error fetching Pokémon:", err));

        // 7. Age API
        let age = await fetch("https://api.agify.io/?name=arun")
            .then(res => res.json());
        console.log("7. Predicted Age:");
        console.log(age.age);
        console.log("\n");

        // 8. Gender API
        let gender = await fetch("https://api.genderize.io/?name=arun")
            .then(res => res.json());
        console.log("8. Predicted Gender:");
        console.log(gender.gender);
        console.log("\n");

        // 9. Nationality API
        let nation = await fetch("https://api.nationalize.io/?name=arun")
            .then(res => res.json());
        console.log("9. Predicted Nationality:");
        nation.country.forEach(c => console.log(c.country_id));
        console.log("\n");

        // 10. Joke API
        let joke = await fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json());
        console.log("10. Random Joke:");
        console.log(joke.setup);
        console.log(joke.punchline);

    } catch (error) {
        console.error("Error:", error);
    }
}

runAPIs();