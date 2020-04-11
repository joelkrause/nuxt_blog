export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s - Joel Krause`,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'I\'m a frontend web developer from Melbourne. I build lightning fast websites with nuxt and storyblok.'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#27ae60'
  },
  pageTransition: {
    name: "default",
    mode: "out-in"
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/app.scss'
  ],
  styleResources: {
    scss: [
      'assets/scss/utils/_functions.scss',
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    `~/plugins/posts.server.js`,
    `~/plugins/pages.server.js`,
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/moment',
    'nuxt-lazy-load',
    'nuxt-svg-loader',
    ['storyblok-nuxt', {
      accessToken: 'sZUcBEZiCUQNtT3CQAZrzgtt',
      cacheProvider: 'memory'
    }]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}