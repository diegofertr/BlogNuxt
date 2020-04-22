<template>
  <div class="page-index">
    <div class="container">
      <h2 class="titulo">{{ $t('articles.title') }}</h2>
      <BlogSection :blogs="articles" />
    </div>
  </div>
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"
import articlesEn from '~/contents/en/articlesEn.js'
import articlesEs from '~/contents/es/articlesEs.js'

export default {
  layout: 'seccion',
  async asyncData ({app}) {

    const articles = app.i18n.locale === 'en' ? articlesEn : articlesEs
    
    async function asyncImport (articleName) {
      const wholeMD = await import(`~/contents/${app.i18n.locale}/article/${articleName}.md`)
      return wholeMD.attributes
    }

    return Promise.all(articles.map(article => asyncImport(article)))
    .then((res) => {
      return {
        articles: res
      }
    })
  },
  
  components: { BlogSection },

  transition: {
    name: 'slide-fade'
  },


}
</script>

<style lang="scss" scoped>
.container { 
  margin-top: 3rem;

  .titulo {
    display: flex;
    justify-content: center;
  }
}
</style>