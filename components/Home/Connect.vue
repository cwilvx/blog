<template>
  <div id="lets-connect">
    <h1>Let's Connect</h1>
    <div class="grid">
      <p>
        {{ data.text }}
      </p>
      <div class="say-hi">
        <a :href="data.button.url">
          <div>{{ data.button.text }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import data from "~~/strings/lets-connect";
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
      a {
        text-decoration: none;
        color: #fff;
      }
      div {
        padding: 1rem 3rem;
        font-size: 1.25rem;
        border-radius: $small;
        border: none;
        background: linear-gradient(37deg, $blue, $red);
        transition: all 0.5s ease;

        &:hover {
          padding: 1rem 5rem;
        }
      }
    }
  }
}
</style>
