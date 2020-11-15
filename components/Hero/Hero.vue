<template>
  <section class="hero is-medium is-bold">
    <div  :class="$style.herobody" class="hero-body">
      <div class="container has-text-centered">
        <img src="/images/aris.jpg" alt="me" class="heroimg" />
        <h1 class="title ">Aris Markogiannakis</h1>
        <h2 class="subtitle is-bold">
          Senior Developer · Community Leader · Visiting Lecturer
        </h2>
        <SocialMedia :isBlack="false" />
      </div>
    </div>
  </section>
</template>

<script>
import SocialMedia from "../SocialMedia/SocialMedia";

export default {};
</script>

<style module lang="scss">
  @import "./Hero.scss";
</style>