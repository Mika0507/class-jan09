<script setup>
import ChildComponent from './ChildComponent.vue'

const alertHello = () => {
    alert(`Hola`);
}
</script>

<template>
    
    <h1>I'm the Parent</h1>
    <ChildComponent @messageAlert="alertHello" />

</template>

<style scoped>

</style>