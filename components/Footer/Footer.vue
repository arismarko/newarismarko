<template>
  <footer class="footer">
    <div class="container">
      
      <nav class="navbar">
        <div class="navbar-menu">
          <nuxt-link to="/" class="navbar-item"> Home </nuxt-link>
          <nuxt-link to="/bio" class="navbar-item"> Bio </nuxt-link>
          <nuxt-link to="/contributions" class="navbar-item">
            Contributions
          </nuxt-link>
          <nuxt-link to="/contactme" class="navbar-item">
            Contact me
          </nuxt-link>
        </div>
      </nav>
       <div class="navbar-brand">
          <SocialMedia :isBlack="true" /> 
          &nbsp;
           &#169;Copyright 2020 @arismarko
        </div>
    </div>
  </footer>
</template>

<script>
import SocialMedia from "../SocialMedia/SocialMedia";

export default {};
</script>


<style scoped lang="scss">
  @import "./Footer.scss";
</style>