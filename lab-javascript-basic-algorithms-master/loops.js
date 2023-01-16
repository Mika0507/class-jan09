let hacker1 = "Belén";
let hacker2 = "Edge";

console.log("Ejercicio 3.1")

let asdf = "";

for(let i = 0; i < hacker1.length; i++){
   asdf += `${hacker1.at(i)} `;
}

console.log("PRIMER INTENTO");
console.log(asdf.toUpperCase());

let secondTry="";

for(let i = 0; i < hacker1.length; i++){
    secondTry += `${hacker1.at(i)} `;
}

console.log("SEGUNDO INTENTO");
console.log(secondTry.toUpperCase().trim());

let third="";

for(let i = 0; i < hacker1.length; i++){
    if (i == hacker1.length - 1) {
        third += `${hacker1.at(i)}`;
    } else {
        third += `${hacker1.at(i)} `;
    }
}

console.log("TERCERO INTENTO");
console.log(third.toUpperCase());

let forth="";

for(let i = 1; i < hacker1.length; i++){
    forth += ` ${hacker1.at(i)}`;
}

console.log("CUARTO INTENTO");
console.log(hacker1.at(0) + forth.toUpperCase());

let fifth="";

for(let i = 0; i < hacker1.length - 1; i++){
    fifth += `${hacker1.at(i)} `;
}

console.log("QUINTO INTENTO");
console.log(fifth.toUpperCase() + hacker1.at(hacker1.length - 1).toUpperCase());

// Ejemplos muy avanzados de como resolver el ejercicio con ayuda.

console.log("SEXTO INTENTO");
console.log(hacker1.split('').map(x => x+" ").join("").trim().toUpperCase());

// console.log("Forma de aprender")
// console.log(hacker1.split('')[0].toUpperCase()+" "+hacker1.split('')[1].toUpperCase()+" "+hacker1.split('')[2].toUpperCase()+" "+hacker1.split('')[3].toUpperCase()+" "+hacker1.split('')[4].toUpperCase());

// EJERCICIO 3.2-----------

console.log("Ejercicio 3.2")

let reves = "";

for(let i = hacker1.length - 1; i >= 0; i--){
    reves += hacker1.at(i)
}

console.log(reves);

// EJERCICIO 3.3-------------


if(hacker1 == hacker2){
    console.log(`What?! You both have the same name?`);
}else{
    let arr = [hacker1, hacker2];
    arr.sort();
    if(arr[0] == hacker1){
        console.log(`The driver's name goes first.`);
    }else{
        console.log(`Yo, the navigator goes first definitely.`);
    }
    
} 
