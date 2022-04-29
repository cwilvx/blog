<template>
  <button @click="handleError">Go home</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: Object;
}>();

function handleError() {
  clearError({
    redirect: "/",
  });
}
</script>
