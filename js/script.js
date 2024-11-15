const getPokemon = document.getElementById("get-pokemon")
let pokemonSelect = document.getElementById("pokemon-select")
const idPokemon = 1;


function elegirPokemon (nombrePokemon) {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    fetch(urlPokemon)
    
    .then((response) => {
        if(!response.ok)
            throw new Error("No es posible cargar el Pokémon")
                return response.json()
    })
    
    .then ((data) => {
        console.log(data)
        let crearDiv = document.querySelector("pokemon-info") // creo una variable de algo que no existe
        if (!crearDiv) {//si no existe...
            crearDiv = document.createElement("div") // lo creo
            crearDiv.className = "pokemon-info" // le doy clase
            document.querySelector(".pokemon-form").appendChild(crearDiv) // lo hago hijo del form en una sola linea
        }
        crearDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src=${data.sprites.front_default} alt="${data.name}">
        <h3>Tipo: ${data.types[0].type.name}</h3>
        <h3>Altura: ${data.height} Ft</h3>
        <h3>Peso: ${data.weight} Kg.</h3>
        `

        })
    
        .catch((error) => {
        console.error(error);
        })
    }


    pokemonSelect.addEventListener("change", () => {
        const selectedPokemon = pokemonSelect.value; // Obtener el Pokémon seleccionado
        /* elegirPokemon(selectedPokemon) */; // Llamar la función para traer los datos del Pokémon
    });
    
    // Si se hace clic en el botón, también podemos obtener la información del Pokémon seleccionado
    getPokemon.addEventListener("click", () => {
        const selectedPokemon = pokemonSelect.value; // Obtener el Pokémon seleccionado
        elegirPokemon(selectedPokemon); // Llamar la función para traer los datos del Pokémon
    });