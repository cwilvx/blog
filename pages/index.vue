<template>
  <div>
    <Jumbotron />
    <AboutMe />
    <Projects />
  </div>
</template>

<script setup>
import Jumbotron from "../components/Home/Jumbotron.vue";
import AboutMe from "~~/components/Home/AboutMe.vue";
import Projects from "~~/components/Home/Projects.vue";

definePageMeta({
  layout: "default",
});
</script>
<style lang="scss"></style>
