const builtAt = new Date().toISOString()
const path = require('path')
const { I18N } = require('./locales/i18n-nuxt-config')
// import blogsEn from './contents/en/blogsEn.js'
// import blogsEs from './contents/es/blogsEs.js'
import articlesEn from './contents/en/articlesEn.js'
import articlesEs from './contents/es/articlesEs.js'
import tutorialsEn from './contents/en/tutorialsEn.js'
import tutorialsEs from './contents/es/tutorialsEs.js'
import Mode from "frontmatter-markdown-loader/mode"

const productionUrl = {
  en: "/en",
  es: "/es"
};
const baseUrl = 'https://diegofertr.netlify.app';

module.exports = {
  env: {
    baseUrl,
    productionUrl
  },
  head: {
    title: 'Diego F. Ticona Ramos | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      // { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      { name: 'msapplication-TileImage', content: '/favicons/favicon.ico' },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@diegofertr' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon.ico', sizes: '16x16' },
      // { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      // { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-96x96.png', sizes: '96x96' },
      // { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-60x60.png', sizes: '60x60' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
      // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
      // { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#c1c1c1' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    // color: '#5a46ff',
    color: '#0a182e',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.scss'
  ],

  build: {
    extend (config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS],
          vue: {
            root: "dynamicMarkdown"
          }
        }
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          quality: 60,
          size: 1400,
          adapter: require('responsive-loader/sharp')
        }
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      });
    }
  },
  render: {
    bundleRender: {
      shouldPreload: (file, type) => {
        // return ['font'].includes(type)
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  plugins: [
    '~/plugins/lazyload',
    '~/plugins/globalComponents',
    { src: '~plugins/ga.js', ssr: false }
  ],
  modules: [  
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N],
    'nuxt-webfontloader',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
    }]
  ],
 
  styleResources: {
    scss: [
      '@/assets/css/utilities/_variables.scss',
      '@/assets/css/utilities/_helpers.scss',
      '@/assets/css/base/_grid.scss',
      '@/assets/css/base/_buttons.scss'
    ],
  },

  webfontloader: {
    custom: {
      families: [
        'Rajdhani',
        'Nunito'
      ],
      urls: ['/fonts/fonts.css']
    }
  },

  generate: {
    routes: [
      '/es', '404'
    ]
    // .concat(blogsEn.map(w => `/blog/${w}`))
    // .concat(blogsEs.map(w => `es/blog/${w}`))
    .concat(articlesEn.map(w => `/article/${w}`))
    .concat(articlesEs.map(w => `es/article/${w}`))
    .concat(tutorialsEn.map(w => `/tutorial/${w}`))
    .concat(tutorialsEs.map(w => `es/tutorial/${w}`))
  }
}
