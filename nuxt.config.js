
export default {
  mode: 'spa',
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
    '@/assets/styles/styles',
    '@mdi/font/css/materialdesignicons.css',
    'roboto-fontface/css/roboto/roboto-fontface.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/nuxt-client-init',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify
  ** See https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#001649',
          accent: '#172B59',
          secondary: '#43C7C5',
          warning: '#F7BA1D',
          success: '#05E585',
          info: '#007EFF',
          error: '#FA4373'
        },
        dark: {
          primary: '#001649',
          accent: '#172B59',
          secondary: '#43C7C5',
          warning: '#F7BA1D',
          success: '#05E585',
          info: '#007EFF',
          error: '#FA4373'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
