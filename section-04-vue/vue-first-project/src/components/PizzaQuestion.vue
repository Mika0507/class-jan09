<script setup>
import {watch} from "vue";

// crear un json con las respuestas del usuario y las imagenes que devuelves con la respuesta. Usar el condicional if, else if para poner en el watch.

/*
/// EJERCICIO 001 - CUSTOM EVENT

// Ej. 1: Crean una carpeta dentro del components folder y creamos un componente ParentComponent.vue y otro componente ChildComponent.vue. El template de ChildComponent debe ser un botón con el texto 'Emit'. En el template de ParentComponent poned lo que queráis un h1 p.ej.. Después debéis llamar al ChildComponent. EN EL SCRIPT DE PARENT creamos una función que tire una alerta de 'Emit realizado con éxito! :'. Ahora lo que tenemos que hacer es que cuando le demos al botón de ChildComponent se llame la función de ParentComponent.

/// EJERCICIO 002 - CUSTOM EVENT

// // Ej. 2: Creamos tres componentes: General.vue, Input.vue y Submit.vue. General debe enseñar en un <h1> una variable reactiva con vuestro nombre. Input debe contener un input type text y Submit.vue debe ser un botón. En el script de General vamos a crear la función changeName, la cual va a aceptar un argumento y cambiará el valor de la variable reactiva por el de dicho argumento. Después tendréis que crear la lógica correspondiente para que al darle al botón de Submit podamos coger el valor inputado en Input y cambiar el <h1> de General por dicho valor.
*/
</script>

<template>
    <h1>Pizza Fun!!</h1>
    <p>¿Te gusta la pizza?</p>
    <input v-model="answer" type="text" id="">
</template>

<style scoped>
    input{
        width: 8em;
        height: 3em;
    }
</style>





