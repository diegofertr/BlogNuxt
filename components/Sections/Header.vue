<template>
  <header>
    <div class="hero" :class="{'seccion': seccion}">
      <nuxt-link :to="localePath('index')">
        <img src="../../assets/images/logo-diego.svg" class="hero__logo" alt="logo-principal">
      </nuxt-link>
      <nav class="hero__nav">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link :to="localePath({ name: 'blog'})" class="ani">
              <span>
                {{ $t('header.menu.writing') }}
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'portfolio'})" class="ani">
              <span>
                {{ $t('header.menu.projects') }}
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath({ name: 'contact'})" class="ani">
              <span>
                {{ $t('header.menu.contact') }}
              </span>
            </nuxt-link>
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
      width: 3rem;
    }
  }

  &__nav {
    ul {
      display: flex;
      align-items: center;
      // margin-top: 10px;
      @media (max-width: $screen-sm) { margin-top: 0 }

      li>a {
        // margin: 0 10px;
        padding: 10px;
        font-size: 1.5rem;

        &.nuxt-link-active{
          color: $primary-lighter;
          // background-image: linear-gradient(to top right, rgba($color: $primary-lighter, $alpha: .1), transparent);
          border-radius: .5rem;
          font-weight: bold;
        }
      }

      // li>a {
      //   margin: 0 10px;
      //   color: $primary;
      //   font-size: 1.5rem;
      //   padding-bottom: .5rem;
      //   // border-bottom: none;
      //   transition: border-bottom 2s;

      //   &:hover {
      //     border-bottom: 2px solid $primary-light;
      //   }
      // }
    }
  }
}
</style>