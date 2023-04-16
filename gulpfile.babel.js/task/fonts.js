// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';

// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// Fonts processing
const gp = loadPlugins();
const fonts = () =>
  gulp
    .src(path.font.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'Font',
          message: error.message,
        })),
      }),
    )
    .pipe(gp.newer(path.font.dest))
    .pipe(gp.fonter(app.fonter))
    .pipe(gulp.dest(path.font.dest))
    .pipe(gp.ttf2woff2())
    .pipe(gulp.dest(path.font.dest));

export default fonts;
