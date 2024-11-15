const getPokemon = document.getElementById("get-pokemon")
let pokemonSelect = document.getElementById("pokemon-select")
const idPokemon = 1;
const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

getPokemon.addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((response) => {
        if(!response.ok)
            throw new Error("No es posible cargar el Pokémon")
                return response.json()
    })
    .then ((data) => {
        console.log(data)
        bulbasaur.innerHTML = `<h2>${data.forms[0].name}</h2>`
        })
    .catch((error) => {
        console.error(error);
    })
    })