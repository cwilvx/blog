<template>
  <div>
    <Jumbotron />
    <hr />
    <AboutMe />
    <hr>
    <MySkills />
    <hr />
    <Projects />
    <hr>
  </div>
</template>

<script setup>
import Jumbotron from "../components/Home/Jumbotron.vue";
import AboutMe from "~~/components/Home/AboutMe.vue";
import Projects from "~~/components/Home/Projects.vue";
import MySkills from "~~/components/Home/MySkills.vue";

definePageMeta({
  layout: "default",
});
</script>
<style lang="scss"></style>
