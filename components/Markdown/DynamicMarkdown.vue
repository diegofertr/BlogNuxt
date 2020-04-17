<script lang="js">
  import InlineCode from './InlineCode.vue'
  import hljs from 'highlight.js/lib/highlight'
  import javascript from 'highlight.js/lib/languages/javascript'
  import css from 'highlight.js/lib/languages/css'
  import xml from 'highlight.js/lib/languages/xml'
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('xml', xml)
  import 'highlight.js/styles/a11y-light.css'

  export default {
    props: ["renderFunc", "staticRenderFuncs", "extraComponent"],

    components: {
      InlineCode
    },

    computed: {
      initHighlightJs () {
        let targets = document.querySelectorAll('code')
        targets.forEach((target) => {
          hljs.highlightBlock(target)
        })
      },
      extraComponentLoader () {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/blog/${this.extraComponent}.vue`)
      }
    },

    mounted() {
      this.initHighlightJs
    },

    render (createElement) {
      // if (typeof this.templateRender === 'function') {
        //   console.log('3.- [RENDER] {funcion} ')
      //   console.log(typeof this.templateRender)
      //   return this.templateRender()
      // } else {
        //   console.log('Refrescando la ruta => ')
        //   console.log('IDIOMA :: ', this.$i18n.locale)
        // const fileContentTemp = await import(`~/contents/${this.$i18n.locale}${this.$router.currentRoute.path}.md`)
        // this.templateRender = fileContentTemp.vue.render
        // this.$options.staticRenderFns = fileContentTemp.vue.staticRenderFns
      // }
      return typeof this.templateRender === 'function' ? this.templateRender() : createElement("div", "Rendering")
      // return this.templateRender()

      // return typeof this.templateRender === 'function' ? this.templateRender() : this.$router.push(this.localePath('index'))
    },

    created () {
      this.templateRender = this.renderFunc
      this.$options.staticRenderFns = this.staticRenderFuncs
    }
  }
</script>