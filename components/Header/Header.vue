<template>
    <!-- START NAV -->
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="../">
                       <img src="/images/logo.png" alt="Logo">
                </a>
               <span class="navbar-burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
            </div>
           <div  class="navbar-end navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-end">
                     <nuxt-link to="/" class="navbar-item">
                        Home
                    </nuxt-link>
                    <nuxt-link to="/bio" class="navbar-item">
                       Bio
                    </nuxt-link>
                    <nuxt-link to="/contributions" class="navbar-item">
                        Contributions
                    </nuxt-link>
                    <nuxt-link to="/teaching" class="navbar-item">
                        Teaching
                    </nuxt-link>
                     <nuxt-link to="/contactme" class="navbar-item">
                        Contact me
                    </nuxt-link>
                    
                </div>
            </div>
        </div>
    </nav>
    <!-- END NAV -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
    handleScroll: function() {
      if(window.scrollY > 10) {
        this.scroll = true;
      } else  {
        this.scroll = false;
      }
    }
  },
  computed: {
    toggleBurgerMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
  @import "./Header.scss";
  .navbar{
    position: fixed;
    background: white;
    width: 100%;
  }
</style>
