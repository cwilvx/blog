<template>
  <div id="home-jumbotron" class="rounded">
    <div class="btns">
      <NuxtLink to="/blog" class="btn blog rounded">Visit Blog</NuxtLink>
      <NuxtLink to="/blog" class="btn resume rounded">See Resume</NuxtLink>
    </div>
    <div class="nice">Nice to meet you.</div>
    <div class="desc">I build stuff that work on the web.</div>
    <div class="text">
      Hello there, I'm <br />
      <span class="name">Mungai</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "../../assets/scss/vars";

#home-jumbotron {
  font-size: 1rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column-reverse;
  height: 30rem;

  .text {
    font-weight: bold;
    font-size: 1.5rem;

    .name {
      font-size: 4rem;
      background: linear-gradient(37deg, red, blue);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .desc {
    font-size: 4rem;
    margin-top: 1rem;
  }

  .nice {
    font-size: 1.5rem;
  }

  .btns {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    .btn {
      width: max-content;
      padding: $small;
      padding: .75rem 2rem;
      color: white;
      text-decoration: none;
    }

    .blog {
      background-image: linear-gradient(
        37deg,
        rgba(111, 0, 255, 0.493),
        rgba(0, 0, 255, 0.555)
      );
    }

    .resume {
      background-image: linear-gradient(
        37deg,
        rgba(255, 0, 111, 0.493),
        rgba(255, 0, 0, 0.555)
      );
    }
  }
}
</style>
