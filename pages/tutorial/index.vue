<template>
  <div class="page-index">
    <div class="container">
      <h2 class="titulo">{{ $t('tutorials.title') }}</h2>
      <BlogSection :blogs="tutorials" />
    </div>
  </div>
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"
import tutorialsEn from '~/contents/en/tutorialsEn.js'
import tutorialsEs from '~/contents/es/tutorialsEs.js'

export default {
  layout: 'seccion',
  async asyncData ({app}) {

    const tutorials = app.i18n.locale === 'en' ? tutorialsEn : tutorialsEs
    
    async function asyncImport (tutorialName) {
      const wholeMD = await import(`~/contents/${app.i18n.locale}/tutorial/${tutorialName}.md`)
      return wholeMD.attributes
    }

    return Promise.all(tutorials.map(tutorial => asyncImport(tutorial)))
    .then((res) => {
      return {
        tutorials: res
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