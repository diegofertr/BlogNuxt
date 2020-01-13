<template>
  <header>
    <div class="hero" :class="{'seccion': seccion}">
      <nuxt-link :to="localePath('index')">
        <img src="../../assets/images/logo3.png" class="hero__logo" alt="logo-principal">
      </nuxt-link>
      <nav class="hero__nav">
        <!-- <nuxt-link to="/">{{ $t('header.menu.home') }}</nuxt-link> -->
        <nuxt-link :to="localePath({ name: 'writing'})">{{ $t('header.menu.writing') }}</nuxt-link>
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
  }
}
</script>

<style lang="scss">
.seccion {
  // background-color: $primary;
  background-color: rgba($color: white, $alpha: 0.5);
  // $fontOswald
  // $fontCondensed
  // $fontAmatic
  // $fontRajdhani
  // $fontPathway

  .hero__nav {
    a {
      color: $primary;
    }
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
    width: 5rem;
  }

  &__nav {
    display: flex;
    // text-align: center;
    // flex-wrap: wrap;
    // justify-content: center;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0 10px;
      color: white;
      // padding: 1rem 3rem 1rem 1rem;
      // border: 1px solid transparent;
      text-transform: uppercase;
      font-size: 1.4rem;
      // font-family: $fontCondensed;
      // font-weight: 500;

      &:hover {
        // color: #3f3fb8;
        // border-color: $primary;
        border-bottom: 1px solid $primary-light;
        // font-weight: bold;
      }
    }
  }
}
</style>