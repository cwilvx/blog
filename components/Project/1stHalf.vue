<template>
  <div class="first-half half">
    <TextBlock :text="purpose" :header="titles.purpose" />
    <img :src="image" alt="project image" class="rounded" />
    <TextBlock :text="challenges" :header="titles.challenges" />
  </div>
</template>
<script setup lang="ts">
import TextBlock from "../TextBlock.vue";

defineProps<{
  purpose: string[];
  image: string;
  challenges: string[];
}>();

const titles = {
  purpose: "Project Purpose and Goal",
  challenges: "🪨 Challenges",
};
</script>

<style lang="scss">
@import "../../assets/scss/vars";

.half {
  display: grid;
  gap: 3rem;
}
</style>
