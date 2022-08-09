<template>
  <div class="text-block">
    <h2>
      <div v-if="emoji" :class="`emoji ${emoji}`"></div>
      {{ header }}
    </h2>
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
  emoji?: string;
}>();
</script>

<style lang="scss">
@import "../assets/scss/vars";

.text-block {
  h2 {
    display: flex;
    align-items: center;
    gap: $small;
  }
}

.emoji {
  width: 2rem;
  aspect-ratio: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.cat_emoji {
  background-image: url("../assets/images/icons/cat.png");
}

</style>
