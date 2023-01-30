/*
Ejercicio 1:
Muestra por consola toda la información de tu pokemon favorito usando la API https://pokeapi.co*/

let myPokemon = 
    fetch("https://pokeapi.co/api/v2/pokemon/flareon")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))


/*
Ejercicio 2:
Permite al usuario introducir un número entre el 0 y el 151, que son los únicos pokemon que merecen la pena. Devuélvele la info del pokemon con la id correspondiente.
*/

let searchById = () => {
    const pokemonId = document.querySelector("#pokemonId").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    }
