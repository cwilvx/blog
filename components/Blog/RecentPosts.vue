<template>
  <div id="recente">
    <div class="list">
      <PostCard v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    title: "First post",
    date: "yesterday",
    desc: "This is the first post",
    image: "https://picsum.photos/id/1/400/300",
  },
  {
    title: "Second post",
    date: "yesterday",
    desc: "This is the second post",
    image: "https://picsum.photos/id/2/400/300",
  },
  {
    title: "Third post",
    date: "yesterday",
    desc: "This is the third post",
    image: "https://picsum.photos/id/3/400/300",
  },
];
</script>

<style lang="scss">
@import "../assets/scss/vars";

#recente {
  .h {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    gap: 1rem;
  }
}
</style>
