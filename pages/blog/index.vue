<template>
  <div id="blog-home">
    <Intro />
    <h1 class="h">Recent posts</h1>
    <RecentPosts />
    <h1 class="h">Older posts</h1>
    <RecentPosts />
  </div>
</template>

<script setup lang="ts">
import RecentPosts from "../../components/Blog/RecentPosts.vue";
import Intro from "../../components/Blog/Intro.vue";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#blog-home {
  .h {
    margin-left: $small;
  }
}
</style>
