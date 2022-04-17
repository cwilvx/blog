<template>
  <div class="recente-post">
    <div
      class="image"
      :style="{
        backgroundImage: `url(${post.image})`,
      }"
    ></div>
    <div class="title">{{ post.title }}</div>
    <div class="desc">
      {{ post.desc }} This post talks about how I tried walking without talking
      to anyone for a day. Clearly it failed but it's funny
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from "../composables/interfaces";

defineProps<{
  post: Post;
}>();
</script>

<style lang="scss">
@import "../assets/scss/vars";

.recente-post {
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgb(17, 17, 17);
  transition: all 0.3s ease;

  .image {
    border-radius: $small;
    width: 100%;
    height: 15rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: $small;
  }

  .title {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: $small;
  }

  &:hover {
    background-color: rgb(41, 41, 43);
    transform: translateY(-0.5rem);
  }
}
</style>
