import gulp from 'gulp';

// Plugins
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// Image processing
const gp = loadPlugins();
const img = () => gulp.src(path.img.src)
  .pipe(gp.plumber({
    errorHandler: gp.notify.onError((error) => ({
      title: 'IMG',
      message: error.message,
    })),
  }))
  .pipe(gp.newer(path.img.dest))
  .pipe(gp.webp())
  .pipe(gulp.dest(path.img.dest))
  .pipe(gulp.src(path.img.src))
  .pipe(gp.newer(path.img.dest))
  .pipe(gp.if(app.isProd, gp.imagemin(app.imagemin)))
  .pipe(gulp.dest(path.img.dest));

export default img;