const serverConfig = require('./server.config');
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
    { src: '~/plugins/sentry', ssr: false }
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
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.BASE ? process.env.BASE : 'development'}` }],
  ],
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
    // 分离css样式
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      // 处理sentry报错乱码
      if (isClient && !isDev) {
        config.devtool = 'source-map';
      }
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    // 开启打包分析
    // analyze: true,
    // assetFilter: function(assetFilename) {
    //   return assetFilename.endsWith('.js');
    // },
    // 切割打包模块
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 250000,
        // 拆分element
        cacheGroups: {
          elementui: {
            test: /node_modules[\\/]element-ui/,
            chunks: 'all',
            priority: 20,
            name: true
          }
        }
      }
    },
    // 按需引入element-ui
    babel: {
      plugins: [
        [
          'component',
          { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' },
        ],
      ],
    },

    vendor: ['axios', 'element-ui'],
  },
};
