export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'CASABLANCA',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'CASABLANCA', name: 'CASABLANCA', content: 'Casablanca is a place where you can live, work and relax comfortably.'}
    ],
    script: [
      {
        src: "//code.jivosite.com/widget/zgWvoShylw"
      },
      {
        src: "https://maps.api.2gis.ru/2.0/loader.js?pkg=full"
      }
    ],
    link: [
      // {rel: 'shortcut icon', sizes: "32x32", type: 'image/svg', href: '/logo.svg'},
      {rel: 'shortcut icon', type: 'image/svg', href: '/logo.ico'}
    ]
  },
  css: [],
  plugins: [
    {
      src: '~/plugins/axios.js'
    },
    {
      src: '~/plugins/uikit.js', ssr: false,
    },
    {
      src: '~/plugins/i18n.js'
    },
    {
      src: '~/plugins/persistedState.client.js'
    },
    {
      src: '~/plugins/aos.js', ssr: false
    }
  ],
  router: {
    middleware: 'i18n'
  },
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }
    ]
  ],
  axios: {
    baseURL: 'https://casablancaaparthotel.com/api/',
    proxyHeaders: false,
    credentials: false
  },
  /*proxy: {
    '/api/': 'http://207.154.252.25/api/'
  },*/
  build: {}
}
