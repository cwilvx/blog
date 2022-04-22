<template>
  <div id="projects" class="rounded">
    <CardHeader>Stuff I've Built</CardHeader>
    <div class="content"></div>
  </div>
</template>

<script setup>
import CardHeader from "./CardHeader.vue";
</script>

<style lang="scss">
@import "../../assets/scss/vars";
#projects {
  margin-top: 10rem;
  .content {
    display: grid;
    gap: $small;
    grid-template-columns: 1fr 0.75fr;

    .text {
      font-size: 1.1rem;
    }
  }
}
</style>
