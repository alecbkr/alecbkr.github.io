let validPokemon = false;

async function fetchPokemon() {
    const identity = document.getElementById("identity").value;

    let pokemonData = localStorage.getItem(identity);
    if (!pokemonData) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identity}`);
            if (!response.ok) {
                throw new Error("pokemon doesn't exist");
            }

            pokemonData = await response.json();

            try {
                localStorage.setItem(identity, JSON.stringify(pokemonData));
            }
            catch (e) {
                if (e.name === "QuotaExceededError") {
                    console.warn("Local storage exceeded, clearing cached entries");
                    localStorage.clear();
                    localStorage.setItem(identity, JSON.stringify(pokemonData));
                }
                else {throw e;}
            }
                

            console.log(`cached new data ${identity}`);
        }
        catch (fetch_error) {
            validPokemon = false;
            console.error(fetch_error);
            return;
        }
    }
    else {
        pokemonData = JSON.parse(pokemonData);
        console.log(`retrieved cached data for ${identity}`);
    }

    validPokemon = true;

    // SET SPRITE
    document.getElementById("sprite").src = pokemonData.sprites.front_default;

    // SET CRY
    document.getElementById("crysource").src = pokemonData.cries.latest;
    document.getElementById("cryplayer").load();

    
    // SET MOVES
    for (let i = 0; i < 4; i++) {
        let moveselect = document.getElementById(`move${i+1}`);
        moveselect.innerHTML = "";
        pokemonData.moves.forEach(moveEntry => {
            const option = document.createElement("option");
            option.value = moveEntry.move.name;
            option.textContent = moveEntry.move.name;
            moveselect.appendChild(option);
        });
    }
}


function addToTeam() {
    if (!validPokemon) return;

    const team_list = document.getElementById("team_list");
    const team_entry = document.createElement("div");
    team_entry.id = "team_entry";

    const sprite = document.createElement("img");
    sprite.src = document.getElementById("sprite").src;

    const move1 = document.createElement("li");
    move1.textContent = document.getElementById("move1").selectedOptions[0].text;
    const move2 = document.createElement("li");
    move2.textContent = document.getElementById("move2").selectedOptions[0].text;
    const move3 = document.createElement("li");
    move3.textContent = document.getElementById("move3").selectedOptions[0].text;
    const move4 = document.createElement("li");
    move4.textContent = document.getElementById("move4").selectedOptions[0].text;

    team_entry.append(sprite, move1, move2, move3, move4);
    team_list.appendChild(team_entry);
}