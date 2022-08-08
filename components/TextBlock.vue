<template>
  <div class="text-block">
    <h2>{{ header }}</h2>
    <div v-if="Array.isArray(text)">
      <p v-for="(p, index) in text" :key="index">{{ p }}</p>
    </div>
    <p v-else>{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  header: string;
  text: string | string[];
}>();
</script>
<style lang="scss"></style>
