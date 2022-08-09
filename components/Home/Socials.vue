<template>
  <div id="home-socials">
    <div id="content">
      <a v-for="s in socials" :key="s.url" :href="s.url" target="_blank">{{
        s.name
      }}</a>
    </div>
    <div class="images">
      <img :src="links.socials.albums" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import links from "~~/data/links";

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
  margin-bottom: 2rem;

  .images {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    margin: 0 auto;
    width: max-content;

    @include phone-only {
      display: none;
    }
  }

  img {
    width: 100%;
    margin: auto;
    height: 5rem;
    object-fit: contain;
    margin-top: 1rem;
  }

  #content {
    width: max-content;
    margin: 0 auto;
    display: flex;
    gap: 1rem;

    a {
      color: $black;
      text-decoration: none;
    }
  }
}
</style>
