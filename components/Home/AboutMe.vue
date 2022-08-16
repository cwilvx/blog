<template>
  <div id="aboutme" class="rounded">
    <CardHeader>
      <template #default>
        {{ bio.title }}
      </template>
      <template #emoji>
        {{ bio.emoji }}
      </template>
    </CardHeader>
    <div class="content">
      <div class="text">
        <p v-for="(p, index) in bio.paragraphs" :key="index">
          {{ p }}
        </p>
        <p class="italic">
          <i>{{ bio.italic }}</i>
        </p>
      </div>
      <div class="img">
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bio from "~~/data/home/bio";
import CardHeader from "./CardHeader.vue";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#aboutme {
  margin: 10rem 0;

  .content {
    display: grid;
    gap: $small;
    grid-template-columns: 1fr 0.75fr;

    @include phone-only {
      grid-template-columns: 1fr;
      gap: 0;

      .img {
        justify-content: flex-start;
        margin-bottom: 1rem;
      }
    }

    .italic {
      opacity: 0.5;
    }
  }

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .image {
      height: 18rem;
      aspect-ratio: 1;
      background-image: url("../../assets/images/avatar.webp");
      background-size: cover;
      @include shadow-black;
    }
  }
}
</style>
