<template>
  <header>
    <div class="hero">
      <nav class="hero__navigation">
        <!-- <ul>
          <li><a href="/"> Home</a></li>
          <li><a href="sobre"> About</a></li>
        </ul> -->
        <nuxt-link to="/">{{ $t('header.menu.home') }}</nuxt-link>
        <nuxt-link to="/portfolio">{{ $t('header.menu.portfolio') }}</nuxt-link>
        <nuxt-link to="/profile">{{ $t('header.menu.about') }}</nuxt-link>
        <LangSwitcher/>
      </nav>
      <div class="contenedor">
        <div class="contenido">
          <!-- <img class="avatar" src="https://pbs.twimg.com/profile_images/907087687944949760/hVF_2ygD_400x400.jpg" alt="Imagen personal"> -->
          <!-- <img class="avatar" src="../../assets/images/myPic.png" alt="Imagen personal"> -->
          <div class="avatar"></div>
          <div class="descripcion">
            <h1 class="titulo">{{ $t('header.title') }}</h1>
            <p>{{ $t('header.profession') }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- <nuxt-link to="/profile">About me</nuxt-link> -->
  </header>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: {
    LangSwitcher
  }
}
</script>

<style lang="scss">
.hero {
  // background-image: url('../../assets/images/1500x500.jpeg');
  // background-image: url('../../assets/images/bg-landing1.jpeg');
  background-image: url('../../assets/images/bg-landing3.jpeg');
  height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  .hero__navigation {
    // background: rgba($color: black, $alpha: .8);
    // background: linear-gradient(120deg, rgba(2,0,36,1) 9%, rgba(9,9,121,0.6068627280013568) 65%, rgba(2,0,36,1) 94%); 
    background: linear-gradient(120deg, rgba(1,0,23,1) 9%, rgba(1,1,79,0.6068627280013568) 65%, rgba(1,0,19,1) 94%); 
    border-bottom: 1px solid $primary;
    // background: linear-gradient(to bottom right, #4a148c, #6a1b9a);
    display: flex;
    // text-align: center;
    // flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

    a {
      color: white;
      padding: 1rem 3rem 1rem 1rem;
      border: 1px solid transparent;
      font-size: 1.8rem;
      // font-weight: 500;

      &:hover {
        color: #9fa8da;
        border-color: $primary;
        // font-weight: bold;
      }
    }
  }

  .contenedor {
    // background: rgba($color: black, $alpha: .8);
    // background: linear-gradient(120deg, rgba(2,0,36,1) 9%, rgba(9,9,121,0.6068627280013568) 65%, rgba(2,0,36,1) 94%); 
    background: linear-gradient(120deg, rgba(1,0,23,1) 9%, rgba(1,1,79,0.6068627280013568) 65%, rgba(1,0,19,1) 94%); 
    display: grid;
    justify-content: center;
    align-content: center;
    height: 510px;

    .contenido {
      display: grid;
      // justify-content: center;
      // align-items: center;
      justify-items: center;
      text-align: center;
      // margin-top: .1rem;
      
      .avatar {
        background-image: url('../../assets/images/myPic.png');
        width: 15rem;
        height: 15rem;
        background-size: cover;
        border-radius: 50%;
        border: .48rem groove $primary;
      }

      // .descripcion {
      //   background: rgba($color: #fafafa, $alpha: 0.15);
      //   padding: 2rem;
      //   border-radius: 5px;

      //   .titulo {
      //     margin: 0;
      //   }
      // }

    }
  }

}
</style>