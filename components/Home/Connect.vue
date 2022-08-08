<template>
  <div id="lets-connect">
    <h1>Let's Connect</h1>
    <div class="grid">
      <p>
        {{ data.text }}
      </p>
      <div class="say-hi">
        <div class="button copy" @click.prevent="copyToClipboard">
          <span v-if="copied">✅ copied</span>
          <span v-else>📋 copy</span>
        </div>
        <div class="button button-sec email">{{ data.button.email }}</div>
        <a :href="data.button.url" class="button">
          <div>{{ data.button.text }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import data from "~~/data/lets-connect";
const copied = ref(false);

function copyToClipboard() {
  const text = data.button.email;

  navigator.clipboard.writeText(text).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3000);
  });
}
</script>
<style lang="scss">
@import "../../assets/scss/vars";

#lets-connect {
  margin-bottom: 10rem;

  h1 {
    text-align: center;
  }

  .grid {
    display: grid;
    place-items: center;

    p {
      text-align: center;
      max-width: 30rem;
      font-size: 1.25rem;
    }

    .say-hi {
      display: flex;
      gap: 1rem;

      & > * {
        padding: 1rem;
      }

      .copy {
        cursor: pointer;
      }

      .email {
        font-weight: bolder;
      }
    }
  }
}
</style>
