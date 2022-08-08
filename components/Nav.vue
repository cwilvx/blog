<template>
  <div class="global-nav">
    <div class="link">
      <NuxtLink to="/">Mungai</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/vars";

.global-nav {
  margin-bottom: $small;
  margin: 3rem 0;

  .link {
    font-size: 2rem;
    font-weight: bold;
    font-family: monospace;
    a {
      color: inherit;
      text-decoration: none;
    }

    .small {
      font-size: 3rem;
    }
  }
}
</style>
