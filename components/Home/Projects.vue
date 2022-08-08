<template>
  <div id="projects" class="rounded">
    <CardHeader>
      <template #default>
        {{ projects.title }}
      </template>
      <template #emoji>
        {{ projects.emoji }}
      </template>
    </CardHeader>
    <div class="content">
      <ProjectCard v-for="p in projects.projects" :key="p.title" :project="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardHeader from "./CardHeader.vue";
import ProjectCard from "./ProjectCard.vue";
import projects from "~~/strings/projects";
</script>

<style lang="scss">
@import "../../assets/scss/vars";
#projects {
  margin: 10rem 0;
  .content {
    margin-top: 1rem;
  }
}
</style>
