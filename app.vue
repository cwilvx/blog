<template>
    <Nav />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const title = "Geoffrey's Blog";
const description = "This is my blog";

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style lang="scss">
#__nuxt {
  width: 100%;
  max-width: 70rem;
  overflow-x: hidden;
}
</style>
