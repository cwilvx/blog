<template>
  <div class="cardheader">
    <h1><slot></slot></h1>
    <div class="line"></div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/vars";

.cardheader {
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    margin: 0;
    @include gtext;
    width: max-content;
  }

  .line {
    width: 50%;
    height: 1px;
    background: #e0e0e04f;
  }
}
</style>
