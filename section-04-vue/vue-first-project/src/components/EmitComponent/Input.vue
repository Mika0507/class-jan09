<script setup>
import {ref, reactive} from "vue";

const inputValue = ref("");
const emit = defineEmits(["valueInputFather"]);

</script>

<template>
    <input v-modal="inputValue" @confirm="valueInputFather" type="text" >
</template>

<style scoped>

</style>