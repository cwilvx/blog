<template>
  <ProjectHeader :project="project.basic" />
</template>

<script setup lang="ts">
import ProjectHeader from "~~/components/Project/Header.vue";

const route = useRoute();

definePageMeta({
  layout: "project",
});

const pid = route.params.project as string;
const project = getProject(pid);
</script>
