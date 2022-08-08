<template>
  <div class="cardheader">
    <h1>
      <slot name="emoji"></slot>
      <span>
        <slot></slot>
      </span>
    </h1>
    <div class="line"></div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/vars";

.cardheader {
  h1 {
    margin: 0;
    width: max-content;

    span {
      margin-left: $small;
    }
  }

  .line {
    width: 50%;
    height: 1px;
    background: #e0e0e04f;
  }
}
</style>
