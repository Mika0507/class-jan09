
<template>
  <p class="message">
    {{ postMessage }}
  </p>
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  postMessage: String,
});
</script>

<style scoped></style>