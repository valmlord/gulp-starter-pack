// eslint-disable-next-line import/no-extraneous-dependencies
import social from '../data/social.json';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd,
  isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    data: {
      social,
    },
    pretty: isDev,
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },

  spriteSvg: {
    svgmin: {
      js2svg: {
        pretty: true,
      },
    },
    cheerio: {
      run: function run($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true },
    },
    svgSprite: {
      mode: {
        symbol: {
          sprite: 'sprite.svg',
        },
      },
    },
  },

  favicons: {
    appName: 'My App',
    appShortName: 'App',
    appDescription: 'This is my application',
    developerName: '',
    developerURL: '',
    background: '#fff',
    path: 'img/favicon/',
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false,
    },
  },
};
