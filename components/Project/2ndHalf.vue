<template>
  <div class="second-half half">
    <img :src="images[0]" />
    <TextBlock :text="stack" :header="stacktitle" />
    <img v-for="img in images.splice(1)" :key="img" :src="img" />
  </div>
</template>
<script setup lang="ts">
import TextBlock from "../TextBlock.vue";

defineProps<{
  images: string[];
  stack: string[];
}>();

const stacktitle = "🛠 Web Stack and Explanation";
</script>
<style lang="scss">
.second-half {
  img:first-child {
    margin-top: 7rem;
  }

  .text-block {
    margin-left: -1rem;
    margin-right: 1rem;
  }
}
</style>
