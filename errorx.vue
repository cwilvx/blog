<template>
  <button @click="handleError">Clear Errors</button>
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
