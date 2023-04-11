const isProd = process.argv.includes('--production');
const isDev = !isProd;


module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },

  pug: {
    data: {
      social: require('../data/social.json')
    },
    pretty: isDev
  },

  webpack: {
    mode: isProd ? "production" : "development"
  },

  imagemin: {
    verbose: true
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  },

  favicons: {
    appName: 'My App',
    appShortName: 'App',
    appDescription: 'This is my application',
    developerName: '',
    developerURL: '',
    background: '#fff',
    path: "img/favicon/",
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false
    }

  }
}