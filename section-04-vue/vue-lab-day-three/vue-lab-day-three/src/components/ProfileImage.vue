
<template>
  <img :src="imageUrl" class="profile" alt="profile" />
</template>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  imageUrl: String,
});
</script>

<style scoped></style>