
<template>
  <span class="timestamp">{{ timeStamp }}</span>
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  timeStamp: String,
});
</script>

<style scoped></style>