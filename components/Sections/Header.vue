<template>
  <header>
    <div class="hero" :class="{'seccion': seccion}">
      <nuxt-link :to="localePath('index')">
        <img src="../../assets/images/logo-diego.svg" class="hero__logo" alt="logo-principal">
      </nuxt-link>
      <nav class="hero__nav">
        <ul>
          <li>
            <nuxt-link :to="localePath({ name: 'blog'})">{{ $t('header.menu.writing') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'portfolio'})">{{ $t('header.menu.projects') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'contact'})">{{ $t('header.menu.contact') }}</nuxt-link>
          </li>
          <li>
            <LangSwitcher />
          </li>
        </ul>
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
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: $screen-sm) {
    display: grid;
    // grid-template-columns: initial;
    grid-template-rows: 4rem 1fr;
    justify-items: center;
    justify-content: center;
    height: 10rem;
  }

  &__logo {
    width: 5rem;

    @media (max-width: $screen-sm) {
      width: 2.5rem;
    }
  }

  &__nav {
    ul {
      display: flex;
      align-items: center;

      li>a {
        margin: 0 10px;
        color: $primary;
        font-size: 1.5rem;
        padding-bottom: .5rem;

        &:hover {
          border-bottom: 2px solid $primary-light;
        }

        &.nuxt-link-active{
          color: $primary;
          font-weight: bold;
          // border-bottom: 2px solid $primary-light;
        }
      }
    }
  }
}
</style>