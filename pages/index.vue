<template>
  <div>
    <Jumbotron />
    <AboutMe />
    <Projects />
    <Connect />
    <Socials />
  </div>
</template>

<script setup>
import Jumbotron from "../components/Home/Jumbotron.vue";
import AboutMe from "~~/components/Home/AboutMe.vue";
import Projects from "~~/components/Home/Projects.vue";
import Connect from "~~/components/Home/Connect.vue";
import Socials from "~~/components/Home/Socials.vue";

definePageMeta({
  layout: "default",
});
</script>
<style lang="scss"></style>
