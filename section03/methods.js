console.log("Array Methods Class - JS");

// const arr = [1, 2,, 3, 4, 5, 1];
// const mapped = arr.map((arayElement) => arayElement + 10);
// console.table(mapped);

// // const arr = [1, 2,, 3, 4, 5, 1];
// // const mapped = arr.map((arayElement) => arayElement + 10 );
// // console.table(mapped);
// // console.table(mapped[3]);
// // console.table(arr);


// const animals = ["dog", "cat", "horse", "mouse", "unicorn", "dragon"];
// const newAnimalArray = animals.map((animalsPetArray) => {
//     let storage = animalsPetArray;
//     console.table(storage);
//     return storage;
// })

// Método Filter

// const usingFilterMethod = arr.filter((arayElement) => {
//     return arayElement === 2 || arayElement === 4
//  });
//  console.log(usingFilterMethod);

//  const usingFilterAnimals = animals.filter((animalsPetArray) => animalsPetArray === "unicorn" || animalsPetArray === "dragon");
// console.log(usingFilterAnimals);

// Método sort
const alphabet = ["h", "e", "c", "v", "o"];

let ascend = alphabet.sort((numOne, numTwo) => {return numOne > numTwo ? 1: -1});
console.log(ascend);

// Método forEach

let usingForEach = alphabet.forEach((eachLetterParameter) => console.log(eachLetterParameter));

// Método concat

const arr1 = ["milan", "tokyo"];
const arr2 = ["miami", "chicago"];
const arr3 = ["london", "helsinki"];
let usingConcat = arr.concat(arr2, arr3);
console.log(usingConcat);

// Método every()

const everyArr = [2, 3, 6, 8, 6, 5, 4, 9, 10, 200, -3, 5, 57, 94];
let greaterThanFive = everyArr.every((number) => {return number > 5});
console.log(greaterThanFive);

// Método some()


// Métodos includes()

