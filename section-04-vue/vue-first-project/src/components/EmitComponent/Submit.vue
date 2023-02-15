<script setup>

defineEmits(["confirm"]);

</script>

<template>
    <button @click="$emit('confirm')">Click me!</button>
</template>

<style scoped>

</style>