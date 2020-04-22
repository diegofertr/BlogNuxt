<template>
  <div class="page-index">
    <Header :seccion="false" />
    <section class="banner">
      <div class="banner__description">
        <!-- <h1 class="hello">{{ $t('banner.hello') }}</h1> -->
        <h2 class="titulo">{{ $t('banner.title') }}</h2>
        <!-- <h3 class="subtitulo">{{ $t('banner.subtitle') }}</h3> -->
        <p class="description">{{ $t('banner.description') }}</p>
      </div>
    </section>
    <div class="container">
      <!-- <div class="main-section"> -->
      <div class="page-index nuxt-content">
        <BlogSection :blogs="blogs" tipo="blog" />
      </div>
    </div>
  </div>
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
.banner {
  height: calc(100vh - 35rem);
  background: $primary;
  display: grid;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left:  20rem;
  padding-right: 20rem;
  align-items: center;
  justify-content: center;

  @media (max-width: $screen-sm) {
    height: calc(100vh - 30rem);
    padding-left: 3rem;
    padding-right: 3rem;
    // background-color: rgba($color: red, $alpha: 0.6)
  }

  &__description {
    text-align: center;
    // line-height: .5;
    @media (max-width: $screen-sm) { width: 100%; line-height: initial }

    h2 {
      font-size: 4.5rem;
      color: #fff;
      opacity: .8;

      @media (max-width: $screen-sm) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 2rem;
      color: #fff;
      opacity: .8;

      @media (max-width: $screen-sm) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
