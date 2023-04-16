// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';

// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// SCSS processing
const gp = loadPlugins();
// eslint-disable-next-line import/no-extraneous-dependencies
const sass = gp.sass(require('sass'));

const scss = () =>
  gulp
    .src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'SCSS',
          message: error.message,
        })),
      }),
    )
    .pipe(gp.sassGlob())
    .pipe(sass())
    .pipe(gp.webpCss())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gp.size({ title: 'main.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(gp.csso())
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.size({ title: 'main.min.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));

export default scss;
