// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';

// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// CSS processing
const gp = loadPlugins();
const css = () =>
  gulp
    .src(path.css.src, { sourcemaps: app.isDev })
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'CSS',
          message: error.message,
        })),
      }),
    )
    .pipe(gp.concat('main.css'))
    .pipe(gp.cssimport())
    .pipe(gp.webpCss())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gp.size({ title: 'main.css' }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(gp.csso())
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.size({ title: 'main.min.css' }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }));

export default css;
