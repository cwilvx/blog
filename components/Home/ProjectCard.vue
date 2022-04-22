<template>
  <div class="projectcard">
    <div class="image rounded"></div>
    <div class="text">
      <div class="abs rounded">
        <div class="cont">
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <div id="tags">
            <div class="tag" v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div id="tags">
        <div class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</div>
      </div>
      <div id="links">
        <a :href="project.links.github" id="github">GitHub</a>
        <a :href="project.links.site" id="site">Go to Project</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "~~/composables/interfaces";

defineProps<{
  project: Project;
}>();
</script>
<style lang="scss">
@import "../../assets/scss/vars";

@mixin tags {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > * {
    border: solid 1px rgba(128, 128, 128, 0.438);
    border-radius: $small;
    padding: $small;
    cursor: default;
    height: max-content;
  }
}

.projectcard {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr max-content;
  grid-template-areas:
    "image image text text"
    "image image text text"
    "image image text text"
    "footer footer footer footer";
  gap: 1rem;

  .image {
    grid-area: image;
    height: 20rem;
    background-image: url("../../assets/images/alice.png");
    @include image;
    background-position: 0 0;
  }

  .text {
    grid-area: text;
    font-size: 1.2rem;
    position: relative;
    transition: all 0.5s ease;

    &:hover {
      height: 100%;
      transition: all 0.5s ease;

      .abs {
        transition: all 0.5s ease;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }

    .abs {
      @include shadow-black;
      position: absolute;
      background-color: rgb(25, 15, 41);
      padding: 1rem;
      left: -5rem;
      right: 5rem;
      bottom: 2rem;
      top: 2rem;
      transition: all 0.5s ease;

      .cont {
        height: 100%;
        overflow: auto;
      }

      #tags {
        @include tags();
        display: none;

        & > * {
          background-color: gray;
        }

        @include phone-only {
          display: flex;
          font-size: 0.9rem;
        }
      }
    }
  }

  .footer {
    grid-area: footer;

    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 1rem;

    @mixin align-center {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    #tags {
      @include tags();

      @include phone-only {
        display: none;
      }
    }

    #links {
      display: flex;
      gap: 1rem;

      a {
        text-decoration: none;
        color: inherit;
        background-color: blue;
        padding: $small;
        border-radius: $small;
        @include align-center;
        height: max-content;
      }

      #github {
        background-color: rgb(43, 42, 42);
        background-image: linear-gradient(37deg, rgb(43, 42, 42), gray);
      }

      #site {
        background-color: rgb(204, 58, 82);
      }
    }
  }

  @include phone-only {
    grid-template-areas:
      "text text text text"
      "text text text text"
      "image image image image"
      "footer footer footer footer";

    .image {
      height: 17rem;
    }

    .text {
      .abs {
        position: initial;
      }
    }

    .footer {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}
</style>
