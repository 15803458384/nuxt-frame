// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
let serverConfig = require('./server.config');
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '药兜网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: process.env.npm_package_keywords || '药兜网keywords',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '药兜网description',
      },
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ydw.ico' },
    ],
  },
  // 自定义服务器ip
  server: {
    port: serverConfig.port || 3000, // default: 3002
    host: serverConfig.host || 'localhost', // default: localhost
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/css/main.scss',
      lang: 'scss',
    },
    {
      src: '~/assets/fonts/iconfont.css',
      lang: 'css',
    },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/router',
    { src: '~/plugins/ElementUI', ssr: true },
    { src: '~/assets/js/iconfont', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/sentry',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.BASE ? process.env.BASE : 'development'}` }],
  ],
  // sentry: {
  //   dsn: 'https://f06d6a9f35dd42808fcb297ebb9f499c@sentry.io/2693467', // Enter your project's DSN here
  //   config: {
  //   }, // Additional config
  // },
  // axios: {
  //   proxy: true, // 表示开启代理
  //   prefix: '/api', // 表示给请求url加个前缀 /api
  //   credentials: true // 表示跨域请求时是否需要使用凭证
  // },

  // proxy: {
  //   '/api': {
  //     target: 'https://www.apiopen.top', // 目标接口域名
  //     pathRewrite: {
  //       '^/api': '/', // 把 /api 替换成 /
  //       changeOrigin: true // 表示是否跨域
  //     }
  //   }
  // },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    // transpile: [/^vuetify/],
    extend(config, ctx) {

      // config.plugins.push(
      //   new VuetifyLoaderPlugin()
      // )
      // config.plugins.unshift(new LodashModuleReplacementPlugin)
      // // rules[2].use[0] is babel-loader
      // config.module.rules[2].use[0].options.plugins = ['lodash']
    },
    // 切割打包模块
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
    // 按需引入element-ui
    babel: {
      plugins: [
        [
          "component",
          { libraryName: "element-ui", styleLibraryName: "theme-chalk" },
        ],
      ],
    },
    vendor: ['axios', 'element-ui'],
  },
};
