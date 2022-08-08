<template>
  <div id="home-jumbotron">
    <div id="center">
      <div class="btns">
        <NuxtLink to="/blog" class="btn blog rounded">Visit Blog</NuxtLink>
        <NuxtLink to="/blog" class="btn resume rounded">See Resume</NuxtLink>
      </div>
      <div class="text">{{ text.line3 }}</div>
      <div class="desc">{{ text.line2 }}</div>
      <div class="text">{{ text.line1 }} <br /></div>
    </div>
  </div>
</template>

<script setup>
import text from "~~/strings/jumbotron";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#home-jumbotron {
  font-size: 1rem;
  margin-bottom: 4rem;
  height: calc(100vh * .5);
  display: flex;
  align-items: center;

  #center {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
  }

  .text {
    font-weight: bold;
    font-size: 2rem;

    .name {
      font-size: 5rem;
    }
  }

  .desc {
    font-size: 4rem;
    margin-top: 1rem;
  }

  .nice {
    font-size: 2rem;
  }

  .btns {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    .btn {
      width: max-content;
      padding: $small;
      padding: 0.75rem 2rem;
      color: white;
      text-decoration: none;
    }

    .blog {
      background-color: $blue;
    }

    .resume {
      background-color: $red;
    }
  }
}
</style>
