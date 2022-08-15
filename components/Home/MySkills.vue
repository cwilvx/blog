<template>
  <div id="myskills">
    <h1>My skills</h1>
    <p>{{ text }}</p>
    <div id="skills">
      <div v-for="skill in skills">{{ skill }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import text from "~~/data/home/skills";

const skills = [
  "JavaScript ES6 & TS",
  "Vue",
  "React",
  "Python3",
  "Flask",
  "Nuxt",
  "Sass",
  "HTML & CSS",
];
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#myskills {
  margin-top: 5rem;

  p {
    width: 50%;
  }

  #skills {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    color: $white;

    @include phone-only {
      grid-template-columns: repeat(2, 1fr);
    }

    & > * {
      padding: $small 0;
      border-radius: $small;
      transition: all 0.5s ease;
      cursor: default;

      &::before {
        content: "◼ ";
      }

      &:hover {
        background-size: 20rem;
      }
    }

    & > * {
      color: $blue;
    }
  }
}
</style>
