<script setup>

    import {ref, reactive} from "vue";

    const imageSrc = ref ("https://phantom-telva.unidadeditorial.es/ea62e7b06405306e4902e406746b520e/crop/0x63/1497x962/resize/828/f/jpg/assets/multimedia/imagenes/2020/03/16/15843755691245.jpg");

    const imageAlt = ref("Lady GAGA")

    const boolean = ref (true);

    const verImage = () => {
        boolean.value = !boolean.value
    }
</script>


<template>

    <div>
        <h1>Lady Gaga</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum, minus reiciendis ex animi aperiam, optio ut quaerat modi, voluptas sint necessitatibus iure odit officiis enim maiores fugiat esse quas?</p>
        <button @click="verImage">Click me to see the image</button>
        <img :src="imageSrc" :alt="imageAlt" :class= "boolean ? 'vista' : 'no-vista'"/>
    </div>
    
</template>

<style scoped>

    .no-vista{
        display: none;
    }
    .vista{
        width: 200px;
    }
</style>