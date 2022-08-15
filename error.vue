<template>
  <h3>... looks like I'm lost</h3>
  <div
    style="
      font-size: small;
      font-style: italic;
      opacity: 0.5;
      margin-bottom: 1rem;
    "
  >
    Don't panic
  </div>
  <button @click="handleError">Take me home</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: Object;
}>();

const handleError = () =>
  clearError().then(() => {
    const router = useRouter();

    setTimeout(() => {
      router.push("/");
    }, 1000);
  });

useHead({
  title: "404! Error",
});
</script>
