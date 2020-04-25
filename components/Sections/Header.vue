<template>
  <header>
    <div class="hero" :class="{'seccion': seccion}">
      <nav class="hero__nav">
        <div class="hero__nav-left">
          <nuxt-link :to="localePath('index')" class="hero__nav-logo">
            <img src="../../assets/images/loguito.png" class="hero-logo" alt="Logo principal">
          </nuxt-link>
          <div class="hero__nav-content">
            <ul class="nav-list">
              <li class="nav-item">
                <nuxt-link :to="localePath({ name: 'article'})" class="ani">
                  <span>
                    {{ $t('header.menu.articles') }}
                  </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="localePath({ name: 'tutorial'})" class="ani">
                  <span>
                    {{ $t('header.menu.tutorials') }}
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath({ name: 'projects'})" class="ani">
                  <span>
                    {{ $t('header.menu.projects') }}
                  </span>
                </nuxt-link>
              </li>
              <!-- <li>
                <a href="mailto:diegonano09@gmail.com" target="_blank" rel="noopener nofollow" class="hero__button">
                  <font-awesome-icon class="social__content-icon" :icon="['fas', 'paper-plane']"/>
                  <span>
                    {{ $t('header.menu.contact') }}
                  </span>
                </a>
              </li> -->
              <!-- <li>
                <LangSwitcher />
              </li> -->
            </ul>
          </div>
        </div>
        <div class="hero__nav-center">
          <LangSwitcher />
        </div>
        <div class="hero__nav-right">
          <div class="social-links">
            <a href="https://m.me/diegofertr" target="_blank" rel="noopener nofollow" class="social-links-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
            </a>
            <a href="https://github.com/diegofertr" target="_blank" rel="noopener nofollow" class="social-links-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/diegofertr" target="_blank" rel="noopener nofollow" class="social-links-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-mobile">
      <!-- <h2>Navegación modo mobile</h2> -->
      <nuxt-link :to="localePath('index')" class="hero__nav-logo">
        <img src="../../assets/images/loguito.png" class="hero-logo" alt="Logo principal">
      </nuxt-link>
      <button @click="openNav()" aria-label="Abrir menú principal">
        <font-awesome-icon class="social__content-icon" :icon="['fas', 'bars']"/>
      </button>
    </div>
    <nav :class="`${isMobileNav}`">
      <LangSwitcher />
      <ul class="nav-list">
        <li class="nav-item">
          <nuxt-link :to="localePath({ name: 'article'})" class="ani">
            <span>
              {{ $t('header.menu.articles') }}
            </span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="localePath({ name: 'tutorial'})" class="ani">
            <span>
              {{ $t('header.menu.tutorials') }}
            </span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath({ name: 'projects'})" class="ani">
            <span>
              {{ $t('header.menu.projects') }}
            </span>
          </nuxt-link>
        </li>
        <!-- <li>
        </li> -->
      </ul>
      <button @click="openNav()" aria-label="Cerrar menu">
        <font-awesome-icon class="social__content-icon" :icon="['fas', 'times']"/>
      </button>
    </nav>
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
      logoSeccion: '../../assets/images/loggexLight.svg',
      navMobile: false
    }
  },
  methods: {
    openNav () {
      this.navMobile = !this.navMobile
    }
  },
  computed: {
    isMobileNav () {
      return this.navMobile ? 'hero-mobile__nav' : 'oculto'
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

.oculto {
  display: none;
}



.hero-mobile {
  display: none;

  @media (max-width: $screen-sm) {
    background: $primary;
    display: flex;
    // justify-content: stretch;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-left:  3rem;
    padding-right: 3rem;
    padding-bottom: .5rem;
    // align-content: center;

    .hero-logo {
      width: 3rem;
      margin-right: 2rem;

      @media (max-width: $screen-sm) {
        width: 2rem;
      }
    }
  }

  &__nav {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $primary;
    z-index: 10;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    // padding: 0 5px;
    padding-top: 2rem;

    ul {
      margin-top: 10rem;

      li {
        border-bottom: 1px dashed $grey;
        padding-bottom: 10px;

        a {
          font-size: 2.5rem
        }
      }
    }

    button {
      font-size: 2rem;
      opacity: .8;
    }
  }

}

.hero {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-left:  20rem;
  padding-right: 20rem;
  padding-bottom: 1rem;
  background: $primary;

  @media (max-width: $screen-sm) {
    // background: rgba($color: red, $alpha: 0.2);
    padding-left: 3rem;
    padding-right: 3rem;
    border-bottom: 1px solid rgba($color: #cacaca, $alpha: .2);
    display: none;
    // box-shadow: 0px 0px 120px 120px #cacaca;
  }

  &__nav {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-areas: "izquierda centro derecha";

    @media (max-width: $screen-sm) {
      // flex-direction: column;
      grid-template-areas: "izquierda izquierda"
                           "derecha centro";
      justify-content: center;
    }

    &-left {
      display: flex;
      grid-area: izquierda;
      // align-items: center;
      // justify-content: center;
      // justify-items: center;
      // align-content: center;

      .hero-logo {
        width: 3rem;
        margin-right: 2rem;

        @media (max-width: $screen-sm) {
          width: 2rem;
        }
      }

      ul {
        display: flex;
        align-items: center;
        margin-bottom: -2rem;
        // margin-top: 10px;
        @media (max-width: $screen-sm) { margin-top: 0 }

        li>a {
          // margin: 0 10px;
          text-transform: uppercase;
          // padding: 10px;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
          font-size: 1.5rem;

          // &.nuxt-link-active{
          //   color: $primary-lighter;
          //   // background-image: linear-gradient(to top right, rgba($color: $primary-lighter, $alpha: .1), transparent);
          //   border-radius: .5rem;
          //   font-weight: bold;
          // }
        }
      }
    }

    &-center {
      grid-area: centro;
    }

    &-right {
      grid-area: derecha;
      @media (max-width: $screen-sm) {
        margin-right: 10rem;
      }
      .social-links {
        display: flex;

        &-item {
          padding: 10px;

          svg {
            fill: $grey;
            height: 2rem;
  
            &:hover {
              fill: white;
            }
          }
        }
        
      }
    }

  }
}
</style>