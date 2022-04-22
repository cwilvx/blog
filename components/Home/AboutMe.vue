<template>
  <div id="aboutme" class="rounded">
    <CardHeader>About Me</CardHeader>
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
import CardHeader from "./CardHeader.vue";
</script>

<style lang="scss">
@import "../../assets/scss/vars";

#aboutme {
  .h {
    display: flex;
    align-items: center;
    gap: 1rem;

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

    @include phone-only {
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
      @include shadow-black;
    }
  }
}
</style>
