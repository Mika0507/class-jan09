<script setup>

    import {ref, reactive} from "vue";


    const food = reactive({
        imageSrc:"https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/02/02043605/Ruta-sushi3-1024x720.jpg",
        imageAlt: "bandeja de sushi",
        boolean: true,
    })

    const verImage = () => {
        food.boolean = !food.boolean
    }
</script>


<template>

    <div>
        <h1>Sushi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum, minus reiciendis ex animi aperiam, optio ut quaerat modi, voluptas sint necessitatibus iure odit officiis enim maiores fugiat esse quas?</p>
        <button @click="verImage">Click me to see the image</button>
        <div v-if="food.boolean">
            <img :src="food.imageSrc" 
            :alt="food.imageAlt" 
            class= "vista"/>
        </div>
        
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