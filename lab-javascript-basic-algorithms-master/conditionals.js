let hacker1 = "Belén";

let hacker2 = "Edge";

console.log(`The driver's name is  ${hacker1}`);

console.log(`The navigator's name is ${hacker2}` );



if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// TERNARY OPERATOR
// ----------------------------

hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`) : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);


hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`) : hacker1.length === hacker2.length ? console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);

// // Ejercicio Entradas cine
// let edad = parseInt(prompt("¿Cuántos años tienes?:"));



// if(edad <= 5){
//     console.log("Tiene entrada gratis");
// }else if(edad > 5 && edad < 15){
//     console.log("Tienes un 20% de descuento");
// }else if(edad >= 15 && edad <=60 ){
//     console.log("Pagan el precion normal");
// }else if(edad > 60){
//     console.log("Tienes un 40% de descuento");
// };




// const yourName = prompt("¿Cuál es tu nombre?:");
// const action = prompt("Pide un acción (saludar, despedirse, preguntar, gritar, descansar");

// switch(action){
//     case "saludar":
//         alert(`Hello, ${yourName}!`);
//         break;
//     case "despedirse":
//         alert(`Bye bye ${yourName}!`);
//         break;
//     case "preguntar":
//         alert(`How are you today, ${yourName}?`);
//         break;
//     case "gritar":
//         alert(`AHHHHHHHHHH!!!!!!!!!`);
//         break;
//     case "Descansar":
//         alert(`I'm signing off now.`)
//     default:
//         alert("I don't know how to do that yet, I'm just a little program :(");
//         break;
// }
