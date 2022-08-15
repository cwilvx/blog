<template>
  <div class="projectcard">
    <a :href="'projects/' + project.id" class="project-img">
      <img :src="project.cover" :alt="project.title" class="rounded" />
    </a>
    <div class="text rounded">
      <div class="cont">
        <a :href="'projects/' + project.id">
          <h1>{{ project.title }}</h1>
        </a>
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
        <a :href="'projects/' + project.id" class="button">View Project</a>
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
    background-color: $muted;
    padding: $small;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: bold;

    cursor: default;
    color: $accent;
  }
}

.projectcard {
  // color: $white;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr max-content;
  grid-template-areas:
    "image image text text"
    "footer footer footer footer";
  gap: 2rem;

  // h1 {
  //   color: $white !important;
  // }

  .project-img {
    grid-area: image;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    grid-area: text;
    position: relative;
    transition: all 0.5s ease;
    background-color: rgb(236, 236, 236);
    padding: 1rem;

    a {
      text-decoration: none;
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
