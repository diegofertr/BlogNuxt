<template>
  <div class="page-index">
    <div class="container">
      <h2 class="titulo">{{ $t('tutorials.title') }}</h2>
      <BlogSection :blogs="blogs"/> 
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

    const blogs = app.i18n.locale === 'en' ? tutorialsEn : tutorialsEs
    
    async function asyncImport (blogName) {
      console.log(blogName)
      const wholeMD = await import(`~/contents/${app.i18n.locale}/tutorial/${blogName}.md`)
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(blog => asyncImport(blog)))
    .then((res) => {
      return {
        blogs: res
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