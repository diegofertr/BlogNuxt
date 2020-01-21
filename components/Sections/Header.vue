<template>
  <header>
    <div class="hero" :class="{'seccion': seccion}">
      <nuxt-link :to="localePath('index')">
        <img v-if="!seccion" src="../../assets/images/loggex.svg" class="hero__logo" alt="logo-principal">
        <img v-else src="../../assets/images/loggexLight.svg" class="hero__logo" alt="logo-principal">
      </nuxt-link>
      <nav class="hero__nav">
        <!-- <nuxt-link to="/">{{ $t('header.menu.home') }}</nuxt-link> -->
        <nuxt-link :to="localePath({ name: 'blog'})">{{ $t('header.menu.writing') }}</nuxt-link>
        <nuxt-link :to="localePath({ name: 'portfolio'})">{{ $t('header.menu.projects') }}</nuxt-link>
        <!-- <nuxt-link to="/profile"></nuxt-link> -->
        <nuxt-link 
          :to="localePath({ name: 'profile'})"
        >{{ $t('header.menu.about') }}</nuxt-link>
        <nuxt-link 
          :to="localePath({ name: 'contact'})"
        >{{ $t('header.menu.contact') }}</nuxt-link>
        <!-- <button>Contact</button> -->
        <!-- <button>Contactame</button> -->
        <LangSwitcher />
      </nav>
    </div>
    
    <!-- <nuxt-link to="/profile">About me</nuxt-link> -->
  </header>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: {
    LangSwitcher
  },
  props: {
    seccion: Boolean
  },
  data () {
    return {
      logoDefault: '../../assets/images/loggex.svg',
      logoSeccion: '../../assets/images/loggexLight.svg'
    }
  }
}
</script>

<style lang="scss">
.seccion {
  background-color: $primary-darken;

  // .hero__nav {
  //   a {
  //     color: $primary;
  //   }
  // }
  .hero__logo {
    border: 1px solid white;
  }
}

.hero {
  padding: 10px;
  // background: rgba($color: white, $alpha: 0.3);
  border-bottom: 1px solid rgba($color: white, $alpha: 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // font-family: $fontOswald;

  &__logo {
    width: 6.2rem;
    border-radius: 5px;
    border: 1px solid $primary;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0 10px;
      color: white;
      // text-transform: uppercase;
      font-size: 1.5rem;

      &:hover {
        // color: $primary;
        // background: red;
        // border-color: $primary;
        border-bottom: 1px solid $primary-light;
        // font-weight: bold;
      }
    }
  }
}
</style>