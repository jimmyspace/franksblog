
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    //baseURL: 'http://192.168.5.28:3000', // Used as fallback if no runtime config is provided
    proxy: process.env.NODE_ENV === 'production' ? true : false
  },

  proxy: {
    '/api/': { target: 'http://1.116.147.186:3000'}
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    // publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.iloveyu.online/_nuxt/' : '/_nuxt/' // nuxt默认的
  },
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
