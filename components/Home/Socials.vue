<template>
  <div id="home-socials">
    <div id="content">
      <a v-for="s in socials" :key="s.url" :href="s.url" target="_blank">{{
        s.name
      }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from "~~/strings/links";

const socials = [
  {
    name: "GitHub",
    url: links.socials.github,
  },
  {
    name: "Twitter",
    url: links.socials.twitter,
  },
];
</script>

<style lang="scss">
@import "../../assets/scss/_vars.scss";

#home-socials {
    margin-bottom: 1rem;
  #content {
    margin: 0 auto;
    width: max-content;
    display: flex;
    gap: 1rem;

    a {
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
