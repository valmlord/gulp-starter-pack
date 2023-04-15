import gulp from 'gulp';

// Plugins
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// JavaScript processing
const gp = loadPlugins();
const webpack = require('webpack-stream');

const js = () => gulp.src(path.js.src, { sourcemaps: app.isDev })
  .pipe(gp.plumber({
    errorHandler: gp.notify.onError((error) => ({
      title: 'JavaScript',
      message: error.message,
    })),
  }))
  .pipe(gp.babel())
  .pipe(webpack(app.webpack))
  .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }));

export default js;