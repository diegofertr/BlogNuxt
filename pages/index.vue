<template>
  <section>
    <div class="social">
      <ul class="social__content">
        <li>
          <a
            class="social__content-button"
            href="https://github.com/diegofertr"
            target="_blank"
            rel="noopener"
            aria-label="Ver proyectos en github">
            <font-awesome-icon class="social__content-icon" :icon="['fab', 'github']"/>
          </a>
        </li>
        <li>
          <a
            class="social__content-button"
            href="https://www.linkedin.com/in/diegofertr/"
            target="_blank"
            rel="noopener"
            aria-label="Ver perfil en linkedin">
            <font-awesome-icon class="social__content-icon" :icon="['fab', 'linkedin']"/>
          </a>
        </li>
        <li>
          <a 
            class="social__content-button" 
            href="https://twitter.com/diegofertr" 
            target="_blank"
            rel="noopener"
            aria-label="Ver tweets">
            <font-awesome-icon class="social__content-icon" :icon="['fab', 'twitter']"/>
          </a>
        </li>
      </ul>
      <!-- <button><font-awesome-icon class="social__content-icon" :icon="['fas', 'code']"/></button> -->
    </div>
    <div class="contenedor">
      <Header :seccion=false />
      <div class="contenido">
        <div class="contenido__descripcion">
          <!-- <div class="avatar"></div> -->
          <div class="contenido__descripcion-banner">
            <h1 class="hello">{{ $t('banner.hello') }}</h1>
            <h2 class="titulo">{{ $t('banner.name') }}</h2>
            <h3 class="subtitulo">{{ $t('banner.subtitle') }}</h3>
            <!-- <h1 class="titulo">{{ $t('header.title') }}</h1> -->
            <!-- <p>somes</p> -->
            <p class="description">{{ $t('banner.description') }}</p>
          </div>
        </div>

        <div class="contenido__img">
          <img class="image-carousel" src="../assets/images/devConcept.png" alt="Developer concept image">
        </div>
      </div>
    </div>
    <div class="page-index">
      <div class="container">
        <p>Contenido principal, en desarrollo...</p>
        <!-- <BlogSection :blogs="blogs"/> -->
      </div>
    </div>
  </section>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection"
  import Header from '~/components/Sections/Header'

  import blogsEn from '~/contents/en/blogsEn.js'
  import blogsEs from '~/contents/es/blogsEs.js'

  export default {
    async asyncData ({app}) {

      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs
      
      async function asyncImport (blogName) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
        return wholeMD.attributes
      }

      return Promise.all(blogs.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
    },
    
    components: { BlogSection, Header },

    transition: {
      name: 'slide-fade'
    },

    head () {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Diego F. Ticona Ramos" },
          { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
          { property: "og:title", content: this.$t('indexPageHead.title') },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.$t('indexPageHead.description') },
          { name: "twitter:image", content: this.ogImage }
        ]
      };
    },

    data () {
      return {
        active: true
      }
    },

    computed: {
      ogImage: function () {
        return;
      }
    }
  }
</script>

<style lang="scss" scoped>
.contenedor {
  // background-image: url('../assets/images/bg-games.jpg');
  // background-image: url('../assets/images/bg2.jpg');
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  // justify-content: center;
  // align-content: center;
  // height: 410px;
  // color: $primary;

  // position: relative;
  // z-index: 0;

  // &::before {
  //   content: '';
  //   width: 100%;
  //   height: 100%;
  //   background: rgba($color: black, $alpha: 0.8);
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   z-index: -1;
  // }

  .contenido {
    display: grid;
    justify-content: start;
    align-content: center;
    position: relative;
    // justify-items: ;
    // align-items: start;

    margin: 0 12rem;
    text-align: left;

    grid-template-columns: 1fr 350px;
    // grid-gap: 10px;

    &__descripcion {
      // display: grid;

      // .avatar {
      //   background-image: url('../assets/images/myPic.png');
      //   width: 15rem;
      //   height: 15rem;
      //   background-size: cover;
      //   border-radius: 50%;
      //   border: .35rem groove $primary;
      // }

      &-banner {
        // display: grid;
        // grid-gap: 10px;

        h1 {
          font-size: 2rem;
          color: #2762ba;
        }
  
        h2 {
          font-size: 6.5rem;
          color: #0a182e;
        }

        h3 {
          color: rgba($color: white, $alpha: 0.8);
          font-size: 5rem;
          color: #2762ba;
        }

        p {
          margin-top: 4rem;
          font-size: 2rem;
          width: 60rem;
          color: #2762ba;
        }
      }
    }

    &__img {
      position: relative;

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba($color: white, $alpha: 0.6);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
      }

      img {
        width: 400px;
      }
    }

  }
}

.social {
  // background: red;
  position: fixed;
  width: 30px;
  bottom: 0;
  left: 30px;
  right: auto;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    &::after {
      content: '';
      width: 1px;
      display: block;
      height: 120px;
      margin: 0 auto;
      background-color: #0a182e;
    }

    li {
      // background: red;
      margin-bottom: 10px;
    }

    &-button {
      // background: rgba($color: $primary, $alpha: 0.3);
      // width: 5rem;
      color: #0a182e;
      font-size: 2.6rem;
      padding-bottom: 10px;
      // padding: 3px 15px;
      // display: grid;
      // justify-content: center;
      // border-bottom: 1px solid rgba($color: $primary, $alpha: 0.5);

      &:hover {
        color: #2762ba;
        transform: translate(1.5rem);
        transition: all 0.1s ease-in 0.1s;
      }
    }
  }
}
</style>
