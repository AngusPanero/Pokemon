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
    })