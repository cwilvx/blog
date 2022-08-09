<template>
  <div id="lets-connect">
    <h1>
      {{ data.title }} <img src="../../assets/images/icons/chat.png" alt="" />
    </h1>
    <div class="grid">
      <p>
        {{ data.text }}
      </p>
      <div class="say-hi">
        <div class="button copy" @click.prevent="copyToClipboard">
          <div v-if="copied">✅ copied</div>
          <div v-else>📋 copy</div>
        </div>
        <div class="button button-sec email">{{ data.info.email }}</div>
        <a :href="'mailto:' + data.info.email" class="button">
          <div class="chat">
            {{ data.info.text }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import data from "~~/data/lets-connect";
const copied = ref(false);

function copyToClipboard() {
  const text = data.info.email;

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
    display: flex;
    align-items: center;
    justify-content: center;
    // text-align: center;
    width: max-content;
    margin: 0 auto;
    gap: $small;
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

      .chat {
        display: flex;
        align-items: center;
        gap: $small;
      }

      img {
        width: 2rem;
        aspect-ratio: 1;
      }

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
