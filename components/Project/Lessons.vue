<template>
  <div class="project-lessons">
    <img :src="image" />
    <TextBlock :text="lessons" :header="lessonstitle" />
  </div>
</template>

<script setup lang="ts">
import TextBlock from "../TextBlock.vue";

defineProps<{
  image: string;
  lessons: string[];
}>();

const lessonstitle = "💪 Lessons Learned";
</script>

<style lang="scss">
.project-lessons {  
  img {
    width: 100%;
    height: auto;
  }
}
</style>
