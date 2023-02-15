
<template>
  <span class="user">
    <span class="name">{{ userName }}</span>
    <span class="handle">@{{ userHandle }}</span>
  </span>

<script setup>
import { ref, reactive } from "vue";
defineProps({
  userName: String,
  userHandle: String,
});
</script>

<style scoped></style>