<template>
  <section>
    <div class="contenedor">
      <Header :seccion=false />
      <div class="contenido">
        <div class="contenido__descripcion">
          <div class="avatar"></div>
          <div class="contenido__descripcion-banner">
            <h1 class="titulo">{{ $t('header.title') }}</h1>
            <!-- <p>somes</p> -->
            <p v-if="active" @mouseover="active = !active">{{ $t('header.profession') }}</p>
            <p v-else @mouseleave="active = !active">Never stop learning!</p>
          </div>
        </div>
        <div class="contenido__social">
          <a class="contenido__social-button" href="https://www.linkedin.com/in/diegofertr/" target="_blank">
            <font-awesome-icon class="contenido__social-icon" :icon="['fab', 'linkedin']"/>
          </a>
          <a class="contenido__social-button" href="https://github.com/diegofertr" target="_blank">
            <font-awesome-icon class="contenido__social-icon" :icon="['fab', 'github']"/>
          </a>
          <a class="contenido__social-button" href="https://twitter.com/diegofertr" target="_blank">
            <font-awesome-icon class="contenido__social-icon" :icon="['fab', 'twitter']"/>
          </a>
          <!-- <button><font-awesome-icon class="contenido__social-icon" :icon="['fas', 'code']"/></button> -->
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
  background-image: url('../assets/images/bg2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // margin-top: -5rem;
  // padding: 4.5rem;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  // justify-content: center;
  // align-content: center;
  // height: 410px;
  color: $primary;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba($color: black, $alpha: 0.7);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .contenido {
    // position: relative;
    display: grid;
    color: white;
    justify-content: center;
    align-content: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 1fr 50px;

    &__descripcion {
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-items: center;

      .avatar {
        background-image: url('../assets/images/myPic.png');
        width: 15rem;
        height: 15rem;
        background-size: cover;
        border-radius: 50%;
        border: .35rem groove $primary;
      }

      .contenido__descripcion-banner {
        margin-top: 2rem;
        // background: rgba($color: #fafafa, $alpha: 0.15);
        // padding: 2rem;
        // border-radius: 5px;
  
        // .titulo {
        //   margin: 0;
        // }
      }
    }


    &__social {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__social-button {
      background: rgba($color: $primary, $alpha: 0.3);
      // width: 5rem;
      color: white;
      font-size: 2.6rem;
      padding: 3px 15px;
      // display: grid;
      // justify-content: center;
      border-bottom: 1px solid rgba($color: $primary, $alpha: 0.5);

      &:hover {
        background: rgba($color: $primary, $alpha: 0.5);
        transform: translate(-1.5rem);
        transition: all 0.1s ease-in 0.1s;
      }
    }

    // &__social-icon {
    //   font-size: 2.5rem;
    //   // margin: 15px 0;
    //   // background: $primary;

    //   // &:hover {
    //   //   color: yellow;
    //   //   background: red;
    //   // }
    // }
  }
}
</style>
