<template>
  <header>
    <div class="hero" :class="{'seccion': seccion}">
      <nuxt-link :to="localePath('index')">
        <img src="../../assets/images/logo-diego.svg" class="hero__logo" alt="logo-principal">
        <!-- <img src="../../assets/images/logoAlternativa2.svg" class="hero__logo" alt="logo-principal"> -->
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
  -webkit-box-shadow: 0px 9px 7px 5px rgba(202,202,202,1);
  -moz-box-shadow: 0px 9px 7px 5px rgba(202,202,202,1);
  box-shadow: 0px 9px 7px 5px #ebe7e7;
}

.hero {
  padding: 10px;
  // background: rgba($color: white, $alpha: 0.3);
  // border-bottom: 1px solid rgba($color: white, $alpha: 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // font-family: $fontOswald;

  &__logo {
    width: 5rem;
    border-radius: 5px;
    // border: 1px solid $primary;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0 10px;
      // color: white;
      color: #0a182e;
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