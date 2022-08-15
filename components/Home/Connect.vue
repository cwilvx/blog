<template>
  <div id="lets-connect">
    <h1>
      {{ data.title }} <img src="../../assets/images/icons/chat.png" alt="" />
    </h1>
    <div class="grid">
      <p class="connect-text">
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
  background-color: rgba(0, 0, 0, 0.13);
  width: max-content;
  margin: 10rem auto;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.5);
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
    gap: $small;

    img {
      height: 2.5rem;
    }
  }

  .grid {
    width: 100%;

    .connect-text {
      max-width: 30rem;
      margin: 1rem auto;
      font-size: 1.25rem;
      text-align: center;
    }

    .say-hi {
      width: max-content;
      display: flex;
      gap: 1rem;
      margin: 0 auto;

      .chat {
        display: flex;
        align-items: center;
        gap: $small;
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

      @include phone-only {
        gap: $small;

        .copy {
          display: none;
        }
      }
    }
  }

  @include phone-only {
    padding: $small;
    width: auto;

    .connect-text {
      font-size: 1rem !important;
    }
  }
}
</style>
