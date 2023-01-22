

// creación del hijo del div:

let createFirstChild = document.createElement("p");
console.log(createFirstChild);

createFirstChild.innerText = "Esto es el infierno en vida... T_T";

let firstChildCreate = document.querySelector("#insert-p").appendChild(createFirstChild);

// Creación del div

let createAdiv = document.createElement("div");
// usar el setattribut ("id", "name");
createAdiv.id = "nested";

let inneerTextReplace = (createAdiv.innerText = "I'm feel stressed");


// let firstChildElement = document.querySelector("#firstchild");
// const parentElReplaceChild = document.getElementById("parent");

// let newElement = document.createElement("div");
// let innerTextReplaceChild = (newElement.innerText = "I love snowboarding");

// parentElReplaceChild.replaceChild(newElement, firstChildElement);


console.log(createAdiv);

// Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.

const createElementBox = document.createElement("div");

createElementBox.innerHTML = 'Css is ready <button id ="turn-to-red';
