<template>
  <div class="projectcard">
    <img
      src="../../assets/images/alice.png"
      :alt="project.title"
      class="rounded"
    />
    <div class="text rounded">
      <div class="cont">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
      </div>
    </div>
    <div class="footer">
      <div id="tags">
        <div v-for="tag in project.tags" :key="tag" class="rounded">
          {{ tag }}
        </div>
      </div>
      <div id="links">
        <a :href="project.links.site" id="site">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "~~/composables/interfaces";

defineProps<{
  project: Project;
}>();
</script>

<style lang="scss">
@import "../../assets/scss/vars";

@mixin tags {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > * {
    background-color: $bgblue;
    padding: $small;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: bold;

    cursor: default;
    color: $blue;
  }
}

.projectcard {
  color: $white;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr max-content;
  grid-template-areas:
    "image image text text"
    "footer footer footer footer";
  gap: 2rem;

  img {
    grid-area: image;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    grid-area: text;
    position: relative;
    transition: all 0.5s ease;
    background-color: rgba(42, 40, 44, 0.692);
    background-image: radial-gradient(
      circle,
      rgba(101, 106, 109, 0.651) 0%,
      rgba(25, 25, 26, 0.603) 100%
    );
    padding: 1rem;

    .abs {
      @include shadow-black;
      position: absolute;
      left: -5rem;
      right: 5rem;
      bottom: 2rem;
      top: 2rem;
      transition: all 0.5s ease;

      .cont {
        height: 100%;
        overflow: auto;
        scrollbar-width: none;
      }
    }
  }

  .footer {
    grid-area: footer;

    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 1rem;

    @mixin align-center {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    #tags {
      @include tags();

      @include phone-only {
        display: none;
      }
    }

    #links {
      display: flex;
      gap: 1rem;

      a {
        text-decoration: none;
        color: inherit;
        background-color: blue;
        padding: $small;
        border-radius: $small;
        @include align-center;
        height: max-content;
      }

      #site {
        background-color: $blue;
        color: rgb(255, 255, 255);
      }
    }
  }

  @include phone-only {
    grid-template-areas:
      "text text text text"
      "text text text text"
      "image image image image"
      "footer footer footer footer";

    .image {
      height: 17rem;
    }

    .text {
      .abs {
        position: initial;
      }
    }

    .footer {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}
</style>
