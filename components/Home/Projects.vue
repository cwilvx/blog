<template>
  <div id="projects" class="rounded">
    <CardHeader>Built By Mungai</CardHeader>
    <div class="content">
      <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardHeader from "./CardHeader.vue";
import ProjectCard from "./ProjectCard.vue";
import { Project } from "~~/composables/interfaces";

const projects = <Project[]>[
  {
    title: "Alice Music Player",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas consectetur amet harum sed accusamus tempore nisi! Autem quisquam mollitia consectetur quis, officiis eaque quia. Sapiente laboriosam hic officia dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas consectetur amet harum sed accusamus tempore nisi! Autem quisquam mollitia consectetur quis, officiis eaque quia. Sapiente laboriosam hic officia dolorum!",
    image: "https://picsum.photos/id/2/400/300",
    tags: ["Typescript", "Javascript", "Python", "Flask", "Vue"],
    links: {
      github: "https://github.com/geoffrey45/alice",
      site: "https://alicemusic.com",
    },
  },
];
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
