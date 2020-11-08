<template>
    <!-- START NAV -->
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="../">
                       <img src="/images/logo.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                      
                <span></span>
                <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                     <nuxt-link to="/" class="navbar-item is-active">
                        Home
                    </nuxt-link>
                    <nuxt-link to="/bio" class="navbar-item">
                       Bio
                    </nuxt-link>
                    <nuxt-link to="/contributions" class="navbar-item">
                        Contributions
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
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {
        this.formError = e.message;
      }
    },

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

