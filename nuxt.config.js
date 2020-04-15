
export default {
  mode: 'universal',

  head: {
    title: 'Simple_Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: 'blue' },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '@/plugins/element-ui'
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios:{},

  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
}
