<template>
  <div class="page-index">
    <div class="container">
      <BlogSection :blogs="blogs"/>
    </div>
  </div>
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"
import blogsEn from '~/contents/en/blogsEn.js'
import blogsEs from '~/contents/es/blogsEs.js'

export default {
  layout: 'seccion',
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
  
  components: { BlogSection },

  transition: {
    name: 'slide-fade'
  },


}
</script>

<style lang="scss">
// .page-index { margin-top: 3rem }
</style>