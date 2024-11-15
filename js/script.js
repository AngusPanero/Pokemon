const getPokemon = document.getElementById("get-pokemon")
const bulbasaur = document.querySelector(".bulbasaur");
const charmander = document.querySelector(".charmander");
const squirtle = document.querySelector(".squirtle");
const idPokemon = 1;
const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

function pokemonFetch (){
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((response) => {
        if(!response.ok)
            throw new Error("No es posible cargar el Pokémon")
                return response.json()
    })
    .then ((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    };
    pokemonFetch();