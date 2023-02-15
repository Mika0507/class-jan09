<script setup>
    
const emit = defineEmits(["messageAlert"]);

</script>

<template>
    
    <button @click="$emit('messageAlert')">Emit</button>

</template>

<style scoped>

</style>