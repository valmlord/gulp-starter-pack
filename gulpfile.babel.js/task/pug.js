import gulp from 'gulp';

// Plugins
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// PUG processing
const gp = loadPlugins();
const pug = () => gulp.src(path.pug.src)
  .pipe(
    gp.plumber({
      errorHandler: gp.notify.onError((error) => ({
        title: 'Pug',
        message: error.message,
      })),
    }),
  )
  .pipe(gp.pug(app.pug))
  .pipe(gp.webpHtml())
  .pipe(gulp.dest(path.pug.dest));

export default pug;
