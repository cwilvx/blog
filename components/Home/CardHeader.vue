<template>
  <div class="cardheader">
    <h1><slot></slot></h1>
    <div class="line"></div>
  </div>
</template>

<style lang="scss">
.cardheader {
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    margin: 0;
    background: linear-gradient(37deg, red, blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .line {
    width: 50%;
    height: 1px;
    background: #e0e0e04f;
  }
}
</style>
