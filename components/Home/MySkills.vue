<template>
  <div id="myskills">
    <div class="text">
      Here are some languages that I have worked with recently.
    </div>
    <div id="skills">
      <div>TypeScript</div>
      <div>React</div>
      <div>Vue</div>
      <div>Python</div>
      <div>Flask</div>
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
    color: $white;

    & > * {
      padding: $small;
      border-radius: $small;
      transition: all 0.5s ease;
      cursor: default;

      &:hover {
        background-size: 20rem;
      }
    }

    & > * {
      background-color: $bgblue;
      color: $blue;
    }
  }
}
</style>
