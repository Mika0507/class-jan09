<script setup>
    import {ref} from "vue";
    import Submit from "./Submit.vue"
    import InputVue from "./Input.vue"

    const myName = ref("Belén");

    function changeName(param) {
        myName.value = param; 
    }
</script>

<template>
    <h1>{{ myName }}</h1>
    <InputVue @valueInputFather="changeName"/>
    <!-- <Submit @confirm="changeName" /> -->
</template>

<style scoped>

</style>
