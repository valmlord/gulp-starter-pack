// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';

// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// Favicon processing
const gp = loadPlugins();
const favicon = () =>
  gulp
    .src(path.favicon.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'Favicon',
          message: error.message,
        })),
      }),
    )
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(gp.favicons(app.favicons))
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(gp.filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(gulp.dest(path.root));

export default favicon;
