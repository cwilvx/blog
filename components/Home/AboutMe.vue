<template>
  <div id="aboutme" class="rounded">
    <div class="h">
      <h1 class="gtext">About Me</h1>
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          distinctio fuga eius. Totam qui quo suscipit, repudiandae mollitia
          earum perspiciatis laborum officia ea, maiores similique quaerat illo
          iste ipsum vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          commodi, rem excepturi cum cupiditate beatae sit quaerat totam
          nesciunt quae aut, adipisci perspiciatis accusamus cumque ducimus
          porro assumenda optio? Qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          commodi, rem excepturi cum cupiditate beatae sit quaerat totam
          nesciunt quae aut, adipisci perspiciatis accusamus cumque ducimus
          porro assumenda optio? Qui?
        </p>
      </div>
      <div class="img">
        <div class="image"></div>
      </div>
    </div>
    <MySkills />
  </div>
</template>

<script setup>
import MySkills from "./MySkills.vue";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#aboutme {
  .h {
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

  .content {
    display: grid;
    gap: $small;
    grid-template-columns: 1fr 0.75fr;

    @include tablet-portrait {
      grid-template-columns: 1fr;
      gap: 0;

      .img {
          justify-content: flex-start;
          margin-bottom: 1rem;
      }
    }

    .text {
      font-size: 1.1rem;
    }
  }

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .image {
      height: 18rem;
      aspect-ratio: 1;
      background-image: url("../../assets/images/avatar.webp");
      background-size: cover;
      box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.582);
    }
  }
}
</style>
