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
      <div class="page-index nuxt-content">
        <BlogSection :blogs="posts" />
      </div>
    </div>
  </div>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection"
  import Header from '~/components/Sections/Header'

  import articlesEn from '~/contents/en/articlesEn.js'
  import articlesEs from '~/contents/es/articlesEs.js'

  import tutorialsEn from '~/contents/en/tutorialsEn.js'
  import tutorialsEs from '~/contents/es/tutorialsEs.js'

  export default {
    async asyncData ({app}) {

      const articles = app.i18n.locale === 'en' ? articlesEn : articlesEs
      const tutorials = app.i18n.locale === 'en' ? tutorialsEn : tutorialsEs

      async function asyncImport (contentName, type) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/${type}/${contentName}.md`)
        return wholeMD.attributes
      }

      const articlesContents = await Promise.all(articles.map(article => asyncImport(article, 'article')))
      const tutorialsContents = await Promise.all(tutorials.map(tutorial => asyncImport(tutorial, 'tutorial')))

      return {
        posts: [
          ...articlesContents,
          ...tutorialsContents
        ]
      }
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
  height: calc(100vh - 38rem);
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
