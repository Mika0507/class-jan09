// // Loops 1
// // Crea un for loop que cuente de 0 a 100 y en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.
// console.log("Loop 1");
// let sumaNum = 0;

// let contador;

// for(contador = 0; contador <= 100; contador++){
//     sumaNum += contador;
// }

// console.log(sumaNum);



// // Loops 2
// // Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.
// console.log("Loop 2");
// const numbers = [-8700,-7600,-6500, -6900, -5400, -4300, -3200, -2100, -1010, -9900, -2100];

// let numBigger = Number.NEGATIVE_INFINITY;
// let numMinor = Number.POSITIVE_INFINITY;

// // console.log(numBigger);

// for ( let num = 0; num <= numbers.length; num++){
//     if(numbers[num] > numBigger){
//         numBigger = numbers[num];
//     }
//     if(numbers[num]< numMinor){
//         numMinor = numbers[num];
//     }
// }

// console.log(numBigger);
// console.log(numMinor);

// console.log("Loop 2.1");
// const numbers1 = [222, 87, 54, 687, 99, 10, 41, 325, 54, 76, 20];
// let numBigger0 = 0;
// let numMinor0 = Number.POSITIVE_INFINITY;

// // console.log(numBigger);

// for ( let num = 0; num <= numbers1.length; num++){
//     if(numbers1[num] > numBigger0){
//         numBigger0 = numbers1[num];
//     }
//     if(numbers1[num]< numMinor0){
//         numMinor0 = numbers1[num];
//     }
// }

// console.log(numBigger0);
// console.log(numMinor0);




// Loops 3
// Utiliza un bucle while para imprimir los números pares del 2 al 20.
// console.log("Loop 3");

// // Declaro una vaariable donde ver los números que queremos
// let numPares = 20;
// // Con esta variable le estoy diciendo que empiece en 2
// let i = 2;

// // dentro del bucle tenemos «i <= numPares» aquí le estamos diciendo que cuando el numero introducido (la variable i) sea menor o igual al número introducido, entonces se escribe en el console y hacemos que salga la variable i
// while(i <= numPares){
//     console.log(i += 2);
// }

// // Otra forma de resolver el while loop

// let evenNumber = 2;

// while(evenNumber <= 20){
//     console.log(evenNumber);
//     evenNumber += 2;
// }





// Loops 4
// Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

let numEros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numeroAdivinar = 5;
let numeroIngresado = 0;
let numeroIntentos;

do{
    numeroIngresado = numEros[numeroIntentos];
    numeroIntentos++
}while(numeroIngresado != numeroAdivinar)

console.log(`${numeroAdivinar} se ha asivinado en ${numeroIntentos}`);