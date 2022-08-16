<template>
  <div id="home-socials">
    <div id="content">
      <a v-for="s in socials" :key="s.url" :href="s.url" target="_blank">{{
        s.name
      }}</a>
    </div>
    <hr />
    <div class="images">
      <img src="/img/music2.png" alt="my artist and albums" loading="lazy" />
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

  margin-bottom: 2rem;

  .images {
    display: grid;
    margin: 0 auto;
  }

  img {
    width: 100%;
    margin: auto;
    height: 6rem;
    object-fit: contain;
    margin-top: 1rem;
    filter: grayscale(1) drop-shadow(0 0 $small $muted);
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
