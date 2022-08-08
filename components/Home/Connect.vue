<template>
  <div id="lets-connect">
    <h1>Let's Connect</h1>
    <div class="grid">
      <p>
        {{ data.text }}
      </p>
      <div class="say-hi">
        <div class="copy" @click.prevent="copyToClipboard">
          <span v-if="copied">✅ copied</span>
          <span v-else>📋 copy</span>
        </div>
        <div class="email">{{ data.button.email }}</div>
        <a :href="data.button.url">
          <div>{{ data.button.text }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import data from "~~/strings/lets-connect";
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
      color: #fff;

      a {
        color: #fff;
        text-decoration: none;
      }

      & > * {
        padding: 1rem;
        // font-size: 1.25rem;
        // height: 1rem;
        border-radius: $small;
        border: none;
        transition: all 0.5s ease;
        background-color: $blue;
      }

      .copy {
        cursor: pointer;
      }

      .email {
        background-color: $bgblue;
        color: $blue;
        font-weight: bolder;
      }
    }
  }
}
</style>
