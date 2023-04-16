// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';

// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// JavaScript processing
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack-stream');

const gp = loadPlugins();

const js = () =>
  gulp
    .src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'JavaScript',
          message: error.message,
        })),
      }),
    )
    .pipe(gp.babel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }));

export default js;
