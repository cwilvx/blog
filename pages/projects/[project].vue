<template>
  <div class="project-page">
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
  </div>
</template>

<script setup lang="ts">
import ProjectHeader from "~~/components/Project/Header.vue";
import FirstHalf from "~~/components/Project/1stHalf.vue";
import SecondHalf from "~~/components/Project/2ndHalf.vue";
import Lessons from "~~/components/Project/Lessons.vue";

const route = useRoute();

const pid = route.params.project as string;
const project = getProject(pid);
</script>

<style lang="scss">
@import "../../assets/scss/vars";

.project-page {
  width: 100%;
  margin-bottom: $projectgap;
}

.project-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: $projectgap 0;
  width: 100%;

  @include tablet-portrait {
    img {
      width: 100%;
      height: auto;
    }
  }

  @include phone-only {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
