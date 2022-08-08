<template>
  <div class="project-header">
    <div class="heading">
      <h1>{{ project.title }}</h1>
      <div class="links">
        <a
          :href="project.links.github"
          class="button button-sec"
          target="_blank"
          >Go to code</a
        >
        <a :href="project.links.demo" class="button" target="_blank"
          >View demo</a
        >
      </div>
    </div>
    <p>{{ project.description }}</p>
    <div class="project-tags">
      <div v-for="tag in project.tags" :key="tag" class="button button-sec">
        {{ tag }}
      </div>
    </div>
    <img
      :src="project.cover"
      :alt="project.title + 'cover image'"
      class="rounded"
    />
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

.project-header {
  .heading {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;

    .links {
      display: flex;
      gap: 0.5rem;
    }
  }

  p {
    width: 75%;
  }

  .project-tags {
    margin-top: 2rem;

    display: flex;
    gap: $small;
    flex-wrap: wrap;
  }

  img {
    margin-top: 2rem;
    width: 100%;
    height: auto;
  }
}
</style>
