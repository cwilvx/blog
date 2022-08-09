<template>
  <slot />
  <div class="default-bottom">
    <Connect />
    <Socials />
  </div>
</template>

<script setup lang="ts">
import Connect from "~~/components/Home/Connect.vue";
import Socials from "~~/components/Home/Socials.vue";
</script>
<style lang="scss">
.default-bottom {
  width: 100%;
}
</style>
