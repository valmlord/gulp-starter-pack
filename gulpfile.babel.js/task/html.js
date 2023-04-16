// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';

// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// HTML processing
const gp = loadPlugins();
const html = () =>
  gulp
    .src(path.html.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      }),
    )
    .pipe(gp.fileInclude())
    .pipe(gp.webpHtml())
    .pipe(gp.size({ title: 'Before Compression' }))
    .pipe(gp.htmlmin(app.htmlmin))
    .pipe(gp.size({ title: 'After Compression' }))
    .pipe(gulp.dest(path.html.dest));

export default html;
