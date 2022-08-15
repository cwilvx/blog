<template>
  <div id="home-socials">
    <div id="content">
      <a v-for="s in socials" :key="s.url" :href="s.url" target="_blank">{{
        s.name
      }}</a>
    </div>
    <hr />
    <div class="images">
      <img src="/img/music2.png" alt="" />
    </div>
    <hr />
    <div class="music-quote">
      <i>〝My heart is where my music is - 💓🎵 ✅〞</i>
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
  .music-quote {
    width: max-content;
    margin: $small auto;
  }

  hr {
    border: none;
    border-top: solid 1px;
    opacity: 0.5;
  }

  margin-bottom: 2rem;

  .images {
    display: grid;
    margin: 0 auto;
  }

  img {
    width: 100%;
    margin: auto;
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

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
