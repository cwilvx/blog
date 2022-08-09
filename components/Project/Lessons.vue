<template>
  <div class="project-lessons">
    <TextBlock :text="lessons" :header="lessonstitle" :emoji="'cat_emoji'" />
    <img :src="image" class="img-100" />
  </div>
</template>

<script setup lang="ts">
import TextBlock from "../TextBlock.vue";

defineProps<{
  image: string;
  lessons: string[];
}>();

const lessonstitle = "Insights";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

.project-lessons {
  img {
    width: 100%;
    height: auto;
    margin: $projectgap 0;
  }

  .text-block {
    width: calc(100% * 0.75);
  }

  @include phone-only {
    .text-block {
      width: 100%;
    }
  }
}
</style>
