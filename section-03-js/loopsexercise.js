// // for(expreionInicial; condicion; actualizacionDeExpresion ){
//     // body del bucle for
// // }

// // Programa para imprimir X cantidad de veces un "string en la consola"

// console.log("- FOR LOOP");
// console.log("------------------");
// // Variable que usaremos como número para poder iterar dentro de nuestra "condicion"
// const forLoopExample = 10;

// for(let iterator = 1; iterator <= forLoopExample; iterator++){
//     console.log("Esto es un ejemplo sencillo de un bucle 'for");
// }


// console.log("- FOR LOOP - USING AN ARRAY OF CITIES");
// console.log("------------------");

// const cities = ["Barcelona", "Tokyo", "Chicago", "Helsinki", "Mordor"];

// for(let city = 0; city < cities.length; city++){
//     console.log(`-. ${cities[city]}`);
// }

// console.log("----------------");

// FOR LOOP - MIXED ARRAY

// const mixedArray = [6, 45, "miami", 2, false, "barcelona", "200", "Manresa", 9, 10];
// // Condicionales con bucles
// const sum = (arrayArgument) => {
//     let mixedSum = 0;
//     for(let i = 0; i < arrayArgument.length; i++){
//         if(typeof arrayArgument[i] === "string"){
//             let str;
//             str = arrayArgument[i].split("");
//             for(let i = 0; i < str.length; i++){
//                 mixedSum += str[i].length;
//             }
//         }else if(typeof arrayArgument[i] === true){
//             mixedSum += 1;
//         }else{
//             mixedSum += arrayArgument[i];
//         }
//     }

//     return mixedSum;
// }

// console.log("Sum of any mixed array");
// console.log(sum(mixedArray));

// console.log("----------------");

// const data = [
//     { name: "Diego", age: 31, group: "A"},
//     { name: "Oscar", age: 25, group: "B"},
//     { name: "Laura", age: 20, group: "A"},
//     { name: "Daniel", age: 15, group: "C"},
// //     { name: "Alvaro", age: 38, group: "B"},
// // ];
// // console.log("Let's print the ages");

// // for(let i = 0; i < data.length; i++){
    
// //     console.log("--------");
// //     console.log(`-. ${data[i].age}`);
// //     console.log(`-. ${data[i].name}`);
// // }


// // LOOP INFINITO, NO LO HAGAS
// // for(let i = 0; i >= 0; i++){

// //     console.log("Infinite Loop :(")

// // }

// // WHILE LOOP!-------
// console.log("- WHILE LOOP");
// console.log("------------------");

// // while(condition){
// //     // body del bucle while
// // }

// let addition = 0;
// // creamos variables que contenga los metodos parseInt y prompt pata asegurarnos que el usuario impute un numero independiente de tipo de dato

// // let number = parseInt(prompt("Write any number:"));
// // // Genera el bucle while
// // while(number >= 0){
// //     // Se encarga de hacer nuestra suma
// //     addition += number;
// //     number = parseInt(prompt("Write another number:"));
// // }

// console.log(`The total sum of these two numbers using a while loop is; ${addition}`);


// // Ejemplo con un array

// console.log("- WHILE LOOP - CITIES");
// console.log("------------------");

// const whileLoopArrayExample = ["Barcelona", "Tokyo", "Chicago", "Helsinki", "Mordor"];


// // Almacenaremos la longitud de la array whileLoopArrayExample dentro de una variable para poder usarla dentro del while loop

// let lengthofWhileArrayExample = whileLoopArrayExample.length;
// // verificamos que recibimos el valor de la long del array mencionado previamente
// console.log(lengthofWhileArrayExample);
// // definimos variable inicialmente en 0 para agregarle el valor individual del array

// let countOfWhileLoopArray = 0;
// while (lengthofWhileArrayExample--){
//     console.log(whileLoopArrayExample[countOfWhileLoopArray]);
//     countOfWhileLoopArray++;
// }

// console.log("------------------");

// console.log("Printing names");

// const whileLoopArrayOfObjectsExample = [
//     { name: "Diego", age: 31, group: "A"},
//     { name: "Oscar", age: 25, group: "B"},
//     { name: "Laura", age: 20, group: "A"},
//     { name: "Daniel", age: 15, group: "C"},
//     { name: "Alvaro", age: 38, group: "B"},
// ];

// let lengthOfWhileArrayObjectExample = whileLoopArrayOfObjectsExample.length;

// let count2 = 0;

// while(lengthOfWhileArrayObjectExample--){
//     console.log(whileLoopArrayOfObjectsExample[count2].age);
// }

// DO WHILE

console.log("- DO WHILE LOOP");
console.log("------------------");

// Programa para imprimir algo en Console

console.log("Imprimir del 1 al 10");

let index = 1;

let doWhileLoopExample = 10;
// usamos el famoso do-while

do{
    console.log(index);
    index++;
}while(index <= doWhileLoopExample);

console.log("- FOR OF LOOP");
console.log("------------------");

let iterable = [10, 20, 30];

for (let value of iterable){
    value += 1;
    console.log(value);
}

const dataSimple = ["Barcelona", "Tokyo", "Berlín", "Helsinki"];
for(let value of dataSimple){
    value += " is our city";
    console.log(value);
}

const dataTwo = [
        { name: "Diego", age: 31, group: "A"},
        { name: "Oscar", age: 25, group: "B"},
        { name: "Laura", age: 20, group: "A"},
        { name: "Daniel", age: 15, group: "C"},
        { name: "Alvaro", age: 38, group: "B"},
    ];
for(let value of dataTwo){
    value.name += " is the best";
    console.log(value.name);
}
  
console.log("------------------");