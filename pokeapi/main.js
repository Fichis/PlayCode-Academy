const listaPokemon = document.querySelector("#contenedor");
const URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map( (type) => 
        `<p class = "${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if(pokeId.length === 1) {
        pokeId = "00" + pokeId;
    }else if(pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.id = "poke-card";
    div.innerHTML = `
        <p id="id-back">
            #${pokeId}
        </p>
        <div id="poke-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt = "${poke.name}">
        </div>
        <div id="poke-info">
            <div id="nombre-contenedor">
                <p id="poke-id">
                    #${pokeId}
                </p>
                <h2 id="poke-nombre">
                    ${poke.name}
                </h2>
            </div>
        </div>
        <div id="poke-tipos">
            ${tipos}
        </div>
        <div id="poke-stats">
            <p class = "stat">${poke.height}m</p>
            <p class = "stat">${poke.weight}kg</p>
        </div>
    `;
    listaPokemon.append(div);
}
console.log(listaPokemon);


/**
 * <div id="poke-card">
        
    </div>
 */