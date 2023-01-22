// // Estructura de un function

// // function nameOfFunction (parametros, parametrosdos, parametrostres){
// //     // Function body
// //         return parameter + parameter2
// // }

// // nameOfFunction(se le pone uno de los parametros);

// // Ejemplo de uso de un function - Sin parámetros

// console.log("-------------");
// console.log("FUNCIONS");

// function greet(){
//     console.log("Hola a todos");
// }

// greet();


// // Ejemplo de uso de un function - Con parámetros

// function greeWithParams(tortilla){
//     console.log(`Hola ${tortilla}`);
// }

// let userName = prompt("Please, enter your name:");

// greeWithParams(userName);

// console.log("-------------");
// console.log("FUNCIONS WHIT PARAMETERS");

// // Ejemplo de uso de un function - Con dos parámetros

// function greetWhitTwoParams(tacos, ramen){
//     console.log(`Hola ${tacos} y ${ramen}`);
// }

// let myName = "Belén";
// let nameUser = prompt("Escribe tu nombre:");

// greetWhitTwoParams(myName, nameUser);

// console.log("-------------");
// console.log("FUNCIONS WHIT PARAMETERS");

// // Otro ejemplo con más de 1 parámetro

// function addTwoNumbers (numerUno, elvisCrespo){
//     console.log(`El total de esta suma es de : ${numerUno + elvisCrespo}`);
// }

// let numberOne = 10;
// let numberTwo = 5;


// addTwoNumbers(numberOne, numberTwo);
// addTwoNumbers(20, 12);
// addTwoNumbers(21, 85);
// addTwoNumbers(65, 9);

// console.log("-------------");
// console.log("FUNCIONS USING KEYWORD RETURN");

// // Declarar funciones con return

// function addWithReturn (numero1, numero2){
//     return numero1 + numero2;
// }

// let returnNumberOne = parseFloat(prompt("Input first number:"));
// let returnNumberTwo = parseFloat(prompt("Input second number:"));

// let operationResult = addWithReturn(returnNumberOne, returnNumberTwo);
// alert(`The total sum of these two numbers using a function that handles the return statement is: ${operationResult}`);

// Funciones tipo flecha

// console.log("-------------");
// console.log("FUNCIONS, ARROW TYPE");

// function exampleFunctionOldSchool (x, y){
//     return x + y;
// }

// // let o const para guardar funciones dentro de variables

// let exampleFunctionArrowOne = (x, y) => { return x + y }
// console.log(exampleFunctionArrowOne (4, 8));

// // Si solo tenemos una linea de codigo dentro del body podemos ahorrarnos los claudetes
// let exampleFunctionArrowTwo = (x, y) =>  x + y
// console.log(exampleFunctionArrowTwo (2, 6));

// // Ejemplo de un Arrow function - con parámetros

// let oneArgument = (fiveGuys) => console.log(`Hello ${fiveGuys}`);
// oneArgument("Michael Jordan");

// // Ejemplo arrow function- FFuncion anónima no tiene nombre por definicion y se autoejecuta- esta autoejecucion la asociaremos a una condicional- mediante el Ternario

// let age = 34;
// let welcome = age <= 21 ? () => alert(`Eres muy joven para formar parte de esta banda`) : () => alert(`Perfecto conoces a Miles Davis, John Coltrane`);
// welcome();

// // Ejemplo arrow function- params multiple- return statement

// let sumTwoNumbers = (oneNumber, twoNumber) => {
//     let myName = "Belén";
//     let myAge = 34;
//     let resultOfSum = oneNumber + twoNumber
//     return resultOfSum;
// }

// let resultOfSumTwoNumbers = sumTwoNumbers(80, 360);
// console.log(resultOfSumTwoNumbers);

// console.log("-------------");

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.
//console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));

const functionExerciseOne = (name, age, livesIn) => {
    if(livesIn.livesInCity){
        return `${name} tiene ${age} y vive en la ciudad`;
    }else{
        return `${name} tiene ${age} y vive en un pueblo`;
    }
    
}

console.log(functionExerciseOne("Jarko", 25, {livesInCity: true, livesInTown: false}));


// Esta función flecha puede ponerse sin claudetes pero en el caso de poner "return" debe tenerlas
const arrFunctTernary = (name, age, livesIn) => 
    livesIn.livesInCity ? `${name} tiene ${age} y vive en la ciudad`:  `${name} tiene ${age} y vive en un pueblo`;


console.log(arrFunctTernary("Laia", 78, { livesInCity: false, livesInTown: true }));