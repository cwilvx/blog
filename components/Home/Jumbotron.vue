<template>
  <div id="home-jumbotron">
    <div id="center">
      <div class="btns">
        <NuxtLink to="/blog" class="button resume">See Resume</NuxtLink>
        <NuxtLink to="/blog" class="button button-sec blog"
          >Visit Blog</NuxtLink
        >
      </div>
      <h1 class="text">{{ text.line3 }}</h1>
      <h1 class="desc">{{ text.line2 }}</h1>
      <h1 class="text">{{ text.line1 }} <br /></h1>
    </div>
  </div>
</template>

<script setup>
import text from "~~/data/home/jumbotron";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#home-jumbotron {
  font-size: 1rem;
  margin-bottom: 4rem;
  height: calc(100vh * 0.5);
  display: flex;
  align-items: center;

  #center {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
  }

  h1 {
    margin: $small 0;
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
  }

  .nice {
    font-size: 2rem;
  }

  .btns {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;

    & > * {
      padding: 0.75rem 2rem;
    }

    .blog {
      &:hover {
        background-color: $black !important;
        color: $white !important;
      }
    }

    // .btn {
    //   width: max-content;
    //   padding: $small;
    //   color: white;
    //   text-decoration: none;
    // }

    // .blog {
    //   background-color: $accent;
    // }

    // .resume {
    //   background-color: $muted;
    //   color: $accent;
    // }
  }
}
</style>
