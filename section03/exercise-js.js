let stringToLog = '    JavaScript is fun! ';
console.log(stringToLog);
// 23
console.log(stringToLog.length);
// 'JavaScript is fun!'
console.log(stringToLog.trim());
// ['java', 'cript i', ' fun!']
console.log(stringToLog.trim().split());
// 'JAVASCRIPT IS FUN!'
console.log(stringToLog.toUpperCase());
// 'f'
console.log(stringToLog.trim().at(14));
// 5
console.log(stringToLog.indexOf("a"));
// 15
console.log(stringToLog.lastIndexOf("i"));
// 'CSS is fun!'
console.log(stringToLog.replace("JavaScript", "CSS"));

console.log("------------------------------");
console.log("Ejercicio 2");

const original = 'Hello world!';
let stringToChange = 'Hello world!';

let stringToChange1 = stringToChange.slice(0, 5);
console.log(stringToChange1.endsWith('o')); // true
let stringToChange2 = stringToChange.replace("Hello", "Rrrr");
console.log(stringToChange2.charAt(3)); // 'r'
let stringToChange3 = stringToChange.replace("world!", "hello");
console.log(stringToChange3.includes('hello')); // true
let stringToChange4 = stringToChange.slice(3);
console.log(stringToChange4.lastIndexOf('o')); // 4
let stringToChange5 = stringToChange.slice(7);
console.log(stringToChange5.indexOf('w')); // -1

// console.log(stringToChange.endsWith('!')); // true
// console.log(stringToChange.charAt(8)); // 'r'
// console.log(stringToChange.includes('world')); // true
// console.log(stringToChange.lastIndexOf('o', 4)); // 4
// console.log(stringToChange.indexOf('z')); // -1

console.log("------------------------------");
console.log("Ejercicio 3");

let number = 3100 / 30;

console.log(number);

console.log(number.toFixed(2));

console.log("------------------------------");
console.log("Ejercicio 4");

// En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000FF sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff.

// Ejemplo de color -> #0000ff

let colorR = 0;
let colorG = 0;
let colorB = 255;

colorR += 33;
colorG += 66;
colorB += 55;

colorB -= 255;

console.log(colorR, colorG, colorB);

colorR = colorR.toString(16);
colorG = colorG.toString(16);
colorB = colorB.toString(16);

console.log(colorR, colorG, colorB);
let newColor = "#" + colorR + colorG + colorB;

console.log(newColor);