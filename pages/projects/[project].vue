<template>
  <ProjectHeader :project="project.basic" />
  <div class="project-body">
    <FirstHalf
      :purpose="project.purpose"
      :challenges="project.challenges"
      :image="project.images[0]"
    />
    <SecondHalf :stack="project.stack" :images="project.images.slice(1, 3)" />
  </div>
  <Lessons :image="project.images.pop()" :lessons="project.lessons" />
</template>

<script setup lang="ts">
import ProjectHeader from "~~/components/Project/Header.vue";
import FirstHalf from "~~/components/Project/1stHalf.vue";
import SecondHalf from "~~/components/Project/2ndHalf.vue";
import Lessons from "~~/components/Project/Lessons.vue";

const route = useRoute();

definePageMeta({
  layout: "project",
});

const pid = route.params.project as string;
const project = getProject(pid);
</script>

<style lang="scss">
@import "../../assets/scss/vars";

.project-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: $projectgap 0;
}
</style>
