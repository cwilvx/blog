<template>
  <div id="myskills">
    <div class="text">
      Here are some technologies that I have been working with recently.
    </div>
    <div id="skills">
      <div id="ts">TypeScript</div>
      <div id="js">JavaScript</div>
      <div id="vue">Vue</div>
      <div id="python">Python</div>
      <div id="flask">Flask</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/vars";

#myskills {
  #skills {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    & > * {
      padding: $small;
      border-radius: $small;
      background-color: rgb(230, 50, 50);
      transition: all 0.5s ease;
      cursor: default;

      &:hover {
        background-size: 20rem;
      }
    }

    #ts {
      background-color: rgb(6, 83, 134);
      background-image: linear-gradient(
        37deg,
        rgb(41, 40, 40),
        rgb(6, 83, 134)
      );
    }

    #js {
      background-color: rgb(197, 122, 23);
      background-image: linear-gradient(
        37deg,
        rgb(41, 40, 40),
        rgb(197, 122, 23)
      );
    }

    #vue {
      background-color: rgb(62, 143, 42);
      background-image: linear-gradient(
        37deg,
        rgb(41, 40, 40),
        rgb(62, 143, 42)
      );
    }

    #python {
      background-color: rgb(2, 56, 126);
      background-image: linear-gradient(
        37deg,
        rgb(41, 40, 40),
        rgb(2, 56, 126)
      );
    }

    #flask {
      background-color: rgb(92, 88, 88);
      background-image: linear-gradient(
        37deg,
        rgb(41, 40, 40),
        rgb(92, 88, 88)
      );
    }
  }
}
</style>
